import  React, {useState,useEffect} from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { Dispatch } from 'redux';
import { fetchMemo, deleteMemo, initMemo } from '../actions/memo';
import { RootState } from '../reducers';
import { useParams } from 'react-router';
import MemoPage from '../pages/memo/Memo';




const MemoContainer = function(){

  const {id} = useParams()
  const memoId = parseInt(id as string, 10)
  const dispatch:Dispatch = useDispatch();

  const {memo,apiCalling} = useSelector((state:RootState)=>{
    return {
      memo: state.memo.memo, // 여기서 오는 정보는 전체정보임...
      apiCalling: state.app.apiCalling,
    }
  })

  useEffect(()=>{
    if (!isNaN(memoId)) 
      dispatch(fetchMemo(memoId))
    
    return () => {
      // 초기화
      dispatch(initMemo())
    }
  },[memoId])

  const deleteMemoHandler = (_id:number)=> dispatch(deleteMemo(_id));

  
  return <MemoPage memo={memo} apiCalling={apiCalling} deleteMemo={deleteMemoHandler} />
  
}


export default MemoContainer;