import React,{ useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { Memo } from '../models';
import { fetchDeletedMemo, restoreMemo} from '../actions/memo';
import { FetchDeletedMemoAction, RestoreMemoAction} from '../actions/memo';
import { RootState } from '../reducers';
import {  useParams } from 'react-router';
import DeletedMemo from '../pages/trash/DeletedMemo';



interface Props {
  memo?: Memo
  fetchDeletedMemo(id: number): FetchDeletedMemoAction
  restoreMemo(id: number): RestoreMemoAction
}


const DeletedMemoContainer = function(props:Props){

  const dispatch = useDispatch();
  const {id} = useParams();
  const memoId = parseInt(id as string, 10)

  useEffect(()=>{
    
    return ()=>{
      console.log('DeletedMemo component will mount')
     
      if (!isNaN(memoId)) {
        dispatch(fetchDeletedMemo(memoId))
      }
    }
  },[memoId])

  const {memo}  = useSelector((state:RootState)=> ({
    memo : state.memo.deletedMemos.find(memo => memo.id == memoId) 
  }))




  // componentWillMount() {
  //   const {fetchDeletedMemo, match: {params: {id}}} = props;
  //   const memoId = parseInt(id, 10)
  //   if (!isNaN(memoId)) {
  //     fetchDeletedMemo(memoId)
  //   }
  // }
  
  const onRestore = (id: number) => {
    dispatch(restoreMemo(id))
  }

    return (
      <DeletedMemo memo={memo} onRestore={onRestore} />
    )
}

export default  DeletedMemoContainer