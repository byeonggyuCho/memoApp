import React, {useEffect} from 'react'
import { useDispatch, } from 'react-redux'
import DeletedMemoList from '../components/DeleteMemoList'
import { Dispatch } from 'redux';
import { fetchDeletedMemoList } from '../actions/memo';


const DeletedMemoListContainer = function(){

  const dispatch:Dispatch = useDispatch();

  useEffect(()=>{
    return ()=>{
      // WillMount: 삭제 데이터 요청
      // dispatch(fetchDeletedMemoList())
    }
  },[])

  return <DeletedMemoList  />
}



export default DeletedMemoListContainer;