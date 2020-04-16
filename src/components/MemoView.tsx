import  React from 'react'
import Button from './common/Button'
import DateString from './DateString';
import Skelton from './Skelton';
import { Memo } from '../models';



interface Prop {
    memo: Memo
    apiCalling : boolean
    memoDeleteHandler: ()=>void
    // memoUpdateHandler: ()=>void
    // children: React.ReactElement
}


const MemoView = function({memo, apiCalling, memoDeleteHandler}:Prop){


    const hasMemo = !apiCalling && memo
    const contents = hasMemo 
                    ? memo.content
                    :  <Skelton />

    return (
        <>
            {
                hasMemo && <div> 
                    <Button  disabled={apiCalling}  to={`edit/${memo.id}`}  >수정</Button>
                    <Button  disabled={apiCalling}  onClick={memoDeleteHandler}   >삭제</Button>  
                    </div>
            }
            <div style={{ borderTop: '1px solid #ddd', paddingTop: '10px' }}>
                <div style={{ marginBottom: '15px' }}>
                    {hasMemo  && <DateString timestamp={memo.createdAt} />}
                    <div>
                     {contents}
                     </div>
                </div>
            </div>
         </>
    )
}



export default MemoView