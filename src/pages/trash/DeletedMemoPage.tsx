import * as React from 'react';
import { Memo } from '../../models';
import Button from '../../components/common/Button';
import DateString from '../../components/DateString';

interface Props {
  memo?: Memo
  onRestore(id: number): void
}

const DeletedMemo= (props:Props )=> {
  const { memo, onRestore } = props;
  if (!memo) return null

  const restoreOnClick = () => onRestore(memo.id!)
  
  return (
    <React.Fragment>
      <Button onClick={restoreOnClick}>복구</Button>
      <div style={{  borderTop: '1px solid #ddd',  paddingTop: '10px',   }}>
        <div style={{   marginBottom: '15px'  }}  >
          {memo.createdAt && <DateString timestamp={memo.createdAt} />}
        </div>
        <div>{memo.content}</div>
      </div>
    </React.Fragment>

  );
}

export default DeletedMemo;