import React, {useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import DeletedMemoListPage from '../pages/trash/DeletedMemoList';
import { Dispatch } from 'redux';
import { fetchDeletedMemoList } from '../actions/memo';
import {RootState} from '../reducers'


const DeletedMemoListContainer = function(){

  const dispatch:Dispatch = useDispatch();
  const {memos} = useSelector((state:RootState)=>{
    return {
      memos: state.memo.deletedMemos
    }
  })

  useEffect(()=>{
    return ()=>{
      // WillMount: 삭제 데이터 요청
      dispatch(fetchDeletedMemoList())
    }
  },[])

  return <DeletedMemoListPage memos={memos} />
}



export default DeletedMemoListContainer;