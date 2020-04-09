import { Memo } from '../models';
import { rejects } from 'assert';

let store: Memo[] = [
  { id: 5, content: '다섯번째 메모입니다.', createdAt: Date.now() -1 },
  { id: 4, content: '네번째 메모입니다.', createdAt: Date.now() -2},
  { id: 3, content: '세번째 메모입니다.', createdAt: Date.now()-3},
  { id: 2, content: '두번째 메모입니다.', createdAt: Date.now()- 4},
  { id: 1, content: '첫번재 메모입니다.', createdAt: Date.now() - 5 },
]

const delayedBy = <TPayload>(sec:number,payload?:TPayload) => {
  
  return new Promise<TPayload>((resolve, reject)=> {

    setTimeout(() => {
      resolve(payload)
    }, sec*1000);
   
  })
}

const getStore =  delayedBy(1,store)



export const fetchMemoList = () => getStore
.then((store)=>
  store.filter(memo => !memo.deleted)
    .sort((a, b) => b.createdAt! - a.createdAt!)
  );

export const fetchDeletedMemoList = () => getStore.then((store)=>
  store.filter(memo => !!memo.deleted)
    .sort((a, b) => b.createdAt! - a.createdAt!));

export const fetchMemo = (memoId: number) => getStore.then((store)=>
  store.find(m => m.id === memoId)
);

export const addMemo = (memo: Memo) => getStore.then((store)=>{
  const lastMemo = store.sort((a, b) => b.id! - a.id!)[0];
  memo.id = lastMemo ? lastMemo.id! + 1 : 1;
  memo.createdAt = Date.now();
  store = [ memo, ...store ];
  return memo;
});


export const deleteMemo = (memoId: number) => getStore.then((store)=>
  store = store.map(memo => ({
    ...memo,
    deleted: memo.id === memoId ? true: memo.deleted,
  }))
)

export const resotreMemo = (memoId: number) => getStore.then((store)=>
  store = store.map(memo => ({
    ...memo,
    deleted: memo.id === memoId ? false : memo.deleted,
  }))
)
