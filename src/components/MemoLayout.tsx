import  React from 'react'
import Button from '../components/Button'
import DateString from '../components/DateString';
import Skelton from '../components/Skelton';
import { Memo } from '../models';



interface Prop {
    memo: Memo
    apiCalling : boolean
    onClick: ()=>void
    // children: React.ReactElement
}


const MemoLayout = function({memo, apiCalling, onClick}:Prop){


    const hasMemo = !apiCalling && memo
    const contents = hasMemo 
                    ? memo.content
                    :  <Skelton />

    return (
        <>
            {
                hasMemo &&  <Button  disabled={apiCalling}  onClick={onClick}   >삭제</Button>
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



export default MemoLayout