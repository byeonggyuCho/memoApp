   
import * as React from 'react';
import { Memo } from '../../models';
import AddMemoContainer from '../../containers/AddMemoContainer'

interface Props {
  apiCalling: boolean;
  addMemo(memo: Memo): void;
}


const AddMemoPage = function ({addMemo,apiCalling}:Props) {

  
  return (
    <React.Fragment>
      <AddMemoContainer/>
    </React.Fragment>
  )
}

export default AddMemoPage;