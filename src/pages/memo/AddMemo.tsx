   
import * as React from 'react';
import { Memo } from '../../models';
import {useState} from 'react'
import Button from '../../components/Button'

interface Props {
  apiCalling: boolean;
  addMemo(memo: Memo): void;
}


const AddMemoPage = function ({addMemo,apiCalling}:Props) {

  let [value, setValue]  = useState('');

  const handleChange = function(evt: React.FormEvent<HTMLTextAreaElement>)  {
    const value:string = evt.currentTarget.value;
    setValue(value);
  }

  const handleClickSave = () => {
    const content = value.trim();
    if (!content) return;

    addMemo({ content })
  }

  const textBoxStype = {
    width: '97%',
    height: '100px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    padding: '10px',
  }

  
  return (
    <React.Fragment>
      <form>
        <textarea  style={textBoxStype} placeholder="여기에 메모를 입력하세요"  onChange={handleChange} value={value} />
      </form>
      <Button to="/memo">취소</Button>
      <Button  disabled={apiCalling} onClick={handleClickSave}>저장</Button>
    </React.Fragment>
  )
}

export default AddMemoPage;