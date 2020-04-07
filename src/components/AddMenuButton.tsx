import * as React from 'react';
import Button from './Button';

const AddMemoBtn: React.FC = () => {
  return (
    <Button to="/memo/add">새로운 메모</Button>
  )
}

export default AddMemoBtn;