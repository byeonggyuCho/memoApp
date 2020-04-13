  
import React,{useEffect} from 'react'
import { RootState } from '../reducers'
import HomePage from '../pages/home'
import { Dispatch } from 'redux'
import { useDispatch ,useSelector } from 'react-redux'
import {
  fetchMemoList,
  fetchDeletedMemoList,
} from '../actions/memo'



const HomeContainer = function(){

  const dispatch:Dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchMemoList())
    dispatch(fetchDeletedMemoList())
  },[])

  const { memos, deletedMemos } = useSelector((state: RootState)=>{
    return {
      memos: state.memo.memos,
      deletedMemos: state.memo.deletedMemos,
    }
  })


    return <HomePage memos={memos} deletedMemos={deletedMemos} />
}





export default HomeContainer;