import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Dispatch, bindActionCreators } from 'redux';
import { fetchMemoList } from '../actions/memo';
import { RootState } from '../reducers';
import {  Redirect, useLocation, useRouteMatch } from 'react-router';
import MemoList from '../components/MemoList'


const MemoListContainer = function(){

  const dispatch:Dispatch = useDispatch();
  const {pathname} = useLocation()
  const {isExact, url} = useRouteMatch();


  const {memos, apiCalling} = useSelector((state:RootState)=>{
    return {
      memos: state.memo.memos,
      apiCalling: state.app.apiCalling
    }
  })

  useEffect(()=>{
    dispatch(fetchMemoList())
  },[])

    // const hasMemos = memos.length > 0
    const isAddPath = pathname === `${url}/add`

    // if (isExact && hasMemos) {
    //   return <Redirect to={`${url}/${memos[0].id}`} />
    // }


    return <MemoList memos={memos} apiCalling={apiCalling} hasAddMemoBtn={!isAddPath}/>
}


export default MemoListContainer;