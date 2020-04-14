import React from 'react'
import Main from './common/Main'
import TrashRouter from '../routes/trash'

const DeleteMemoList = function(){

    return (
      <Main>
        <div style={{ margin: '10px' }}>
          <TrashRouter />
        </div>
      </Main>
    )
}


export default DeleteMemoList