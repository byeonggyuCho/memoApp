import  React, {useEffect} from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { Dispatch } from 'redux';
import { fetchMemo, deleteMemo, initMemo,updateMemo } from '../actions/memo';
import { RootState } from '../reducers';
import { useParams } from 'react-router';
import Memo from '../components/MemoView'
import {Memo as MemoInterferface} from '../models'

const MemoViewContainer = function(){

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
  // const updateMemoHandler = (memo:MemoInterferface)=> dispatch(updateMemo(memo));
  const memoDelete = () => deleteMemoHandler(memo.id!)

  // 페이지 이동
  // const memoUpdate = () => updateMemoHandler(memo)
  // return <MemoPage memo={memo} apiCalling={apiCalling} deleteMemo={deleteMemoHandler} />
// memoDeleteHandler,memoUpdateHandler
  return (
    <>
      <Memo memo={memo} apiCalling={apiCalling}  memoDeleteHandler={memoDelete}/>
    </>
  )

  
}


export default MemoViewContainer;

