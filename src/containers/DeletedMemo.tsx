import React,{ useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { Memo } from '../models';
import { fetchDeletedMemo, restoreMemo, initMemo} from '../actions/memo';
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
     
      if (!isNaN(memoId)) {
        console.log('[DeletedMemo] component will mount')
        dispatch(fetchDeletedMemo(memoId))
      }  
      
      return ()=>{
        console.log('[DeletedMemo]: clear')
       dispatch( initMemo())
      }
  },[memoId])


  const {memo}  = useSelector((state:RootState)=> ({
    memo : state.memo.memo
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