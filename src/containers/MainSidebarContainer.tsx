  
import React,{useEffect} from 'react'
import { RootState } from '../reducers'
import { Dispatch } from 'redux'
import { useDispatch ,useSelector } from 'react-redux'
import {
  fetchMemoList,
  fetchDeletedMemoList,
} from '../actions/memo'
import Sidebar from '../components/Sidebar'


const SideBarContiner = function(){


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

     // 메뉴 자동화.
  const list = [
    {to:'/memo', title:`메모 (${memos.length})`},
    {to:'/trash', title:`휴지통 (${deletedMemos.length})`},
  ]

  // to="/" title = "메모" list = {list} apiCalling={apiCalling}

    return (
        <>
             <Sidebar title="폴더" list={list}/>
        </>
    )
}

export default SideBarContiner