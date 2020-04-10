import { Memo } from '../models';
import { rejects } from 'assert';
import { memo } from 'react';

let initStore: Memo[] = [
  { id: 5, content: '다섯번째 메모입니다.', createdAt: Date.now() -1 },
  { id: 4, content: '네번째 메모입니다.', createdAt: Date.now() -2},
  { id: 3, content: '세번째 메모입니다.', createdAt: Date.now()-3},
  { id: 2, content: '두번째 메모입니다.', createdAt: Date.now()- 4},
  { id: 1, content: '첫번재 메모입니다.', createdAt: Date.now() - 5 },
]

const delayedBy = <TPayload>(sec:number,payload?:TPayload) => 
   new Promise<TPayload>((resolve, reject)=> {

    setTimeout(() => {
      console.log('calling API....')
      resolve(payload)
    }, sec*1000);
  })


type memoSchema = Memo


const delaySec = 0.5;

// type Handler  = <T>(payload:T[]) => T | T[]

interface Handler<T> {
  (payload:T[]) : T | T[] | undefined
}


const dbConnect= <T extends memoSchema>(store: T[]) => {
  
  return {
     select(handler:Handler<T>){
      return  delayedBy(delaySec, handler(store));
    },
     update(handler:Handler<T>){

      store = <T[]>handler(store) ;
      return  delayedBy(delaySec,store);
    },
     delete(handler:Handler<T>){

      store = <T[]>handler(store);
      return  delayedBy(delaySec,store);
    },
     insert  (handler:Handler<T>){
      store = <T[]>handler(store);
      return  delayedBy(delaySec,store);
    }
  }
}
// 60662 5724 6687


let mockDB= dbConnect<Memo>(initStore);


export const fetchMemoList = async () => { 
  
    return await mockDB.select((store)=>{
      let re =  store
      .filter(memo => !!memo.deleted == false)
      .sort((a, b) => b.createdAt! - a.createdAt!)

      return re;
    })

}

export const fetchDeletedMemoList = async () =>  await mockDB.select((store)=>{
  return store.filter(memo => !!memo.deleted)
  .sort((a, b) => b.createdAt! - a.createdAt!)
})


export const fetchMemo = async(memoId: number) =>  await mockDB.select((store)=>{
  return store.find(m => m.id === memoId)
})
  

export const addMemo = async(memo: Memo) =>  await mockDB.insert((store)=>{
  const lastMemo = store.sort((a, b) => b.id! - a.id!)[0];
  memo.id = lastMemo ? lastMemo.id! + 1 : 1;
  memo.createdAt = Date.now();
  store = [ memo, ...store ];
  return memo;
})



//   const lastMemo = store.sort((a, b) => b.id! - a.id!)[0];
//   memo.id = lastMemo ? lastMemo.id! + 1 : 1;
//   memo.createdAt = Date.now();
//   store = [ memo, ...store ];
//   return memo;
// });


export const deleteMemo = async(memoId: number) =>  await mockDB.delete( (store) => {
  return store.map(memo => {
         if(memo.id === memoId ){
            memo.deleted = true
         }
         return memo
      })
})


export const resotreMemo = async(memoId: number) =>  await mockDB.update( (store) =>{
  return store.map(memo => ({
    ...memo,
    deleted: memo.id === memoId ? false : memo.deleted,
  }))
})



// let foo =  async function  foo   () {
//   let re = await fetchMemoList()

//   console.log('foo',re)
// }

// foo()
