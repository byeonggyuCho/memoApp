import  React, {useState,useEffect} from 'react'
import {connect, useSelector, useDispatch} from 'react-redux'
import { Memo } from '../models';
import { Dispatch, bindActionCreators } from 'redux';
import { fetchMemo, deleteMemo } from '../actions/memo';
import {FetchMemoAction, DeleteMemoAction} from '../actions/memo';
import { RootState } from '../reducers';
import { RouteComponentProps, useParams } from 'react-router';
import MemoPage from '../pages/memo/Memo';

interface MatchProps {
  id: string;
}

interface Props {
  apiCalling: boolean
  memos: Memo[]
  fetchMemo(id: number): FetchMemoAction
  deleteMemo(id: number): DeleteMemoAction
}

// class MemoContainer extends React.Component<Props & RouteComponentProps<MatchProps>, {}> {
const MemoContainer = function(){

  const {id} = useParams()
  const memoId = parseInt(id as string, 10)
  const dispatch:Dispatch = useDispatch();

  const {memo,apiCalling} = useSelector((state:RootState)=>{
    return {
      memo: state.memo.memos.find(memo => memo.id == memoId),
      apiCalling: state.app.apiCalling,
    }
  })

  useEffect(()=>{
    if (!isNaN(memoId)) 
          dispatch(fetchMemo(memoId))
  },[memoId])

  // componentDidMount() {
  //   const {fetchMemo, match: {params: {id}}} = this.props;
  //   const memoId = parseInt(id, 10)
  //   if (!isNaN(memoId)) {
  //     fetchMemo(memoId)
  //   }
  // }

  const deleteMemoHandler = (_id:number)=> dispatch(deleteMemo(_id));

  
  return <MemoPage memo={memo} apiCalling={apiCalling} deleteMemo={deleteMemoHandler} />
  
}


export default MemoContainer;