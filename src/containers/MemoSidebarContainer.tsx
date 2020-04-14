  
import React,{useEffect} from 'react'
import { RootState } from '../reducers'
import { Dispatch } from 'redux'
import { useDispatch ,useSelector } from 'react-redux'
import {
  fetchMemoList,
  fetchDeletedMemoList,
} from '../actions/memo'
import Sidebar from '../components/common/Sidebar'
import {useRouteMatch} from 'react-router'


const SideBarContiner = function(){


  // 현재 URL을 비교한다.
  const {url} = useRouteMatch();
  const isTrash = url ==='/trash'



  const dispatch:Dispatch = useDispatch();

  useEffect(()=>{
  
    if(isTrash){
      dispatch(fetchDeletedMemoList())
    } else{
      dispatch(fetchMemoList())
    }
  
  },[isTrash])

  let { list } = useSelector((state: RootState)=>{
    

    return {
      list: isTrash 
              ? state.memo.deletedMemos
              : state.memo.memos
    }
  })



  let listItems = list.map(item =>({
    to : `${url}/${item.id}`,
    title: item.content
  }))


  return (
      <>
            <Sidebar title={isTrash ? "Trash" : 'Memo'} list={listItems}/>
      </>
  )
}

export default SideBarContiner