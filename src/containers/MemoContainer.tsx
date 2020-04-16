import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { addMemo,updateMemo } from '../actions/memo';
import { Dispatch, } from 'redux';
import { RootState } from '../reducers';
import Memo from '../components/Memo'

const MemoContainer = function (){

  const dispatch: Dispatch = useDispatch();
  const {apiCalling} = useSelector((state:RootState)=>(
    {
      apiCalling: state.app.apiCalling
    }
  ))



  let [memo, setMemo]  = useState('');

  const handleChange = function(evt: React.FormEvent<HTMLTextAreaElement>)  {
    const value:string = evt.currentTarget.value;
    setMemo(value);
  }


  //todo: 필수값 체크 로직 및 알림.
  const handleClickSave = () => {
    const content = memo.trim();
    if (!content) return  alert('메모를 입력하세요') ;

    dispatch(addMemo({content}));
  }



  return <Memo value={memo} handleChange={handleChange} handleClickSave = {handleClickSave}  apiCalling={apiCalling}  />
}


export default MemoContainer