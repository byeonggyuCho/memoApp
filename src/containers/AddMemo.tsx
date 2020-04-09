import * as React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { Memo } from '../models';
import { addMemo } from '../actions/memo';
import { AddMemoAction } from '../actions/memo';
import AddMemoPage from '../pages/memo/AddMemo'
import { Dispatch, } from 'redux';
import { RootState } from '../reducers';

interface Props {
  apiCalling: boolean
  addMemo(memos: Memo): AddMemoAction
}

const AddMemoContainer = function (){

  const dispatch: Dispatch = useDispatch();
  const {apiCalling} = useSelector((state:RootState)=>{
    return {
      apiCalling: state.app.apiCalling
    }
  })

  const addMemoHandler = (memo:Memo) => dispatch(addMemo(memo));

  return <AddMemoPage addMemo={addMemoHandler} apiCalling={apiCalling}  />
}


export default AddMemoContainer