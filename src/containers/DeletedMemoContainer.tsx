import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDeletedMemo, restoreMemo, initMemo } from '../actions/memo';
import { RootState } from '../reducers';
import { useParams } from 'react-router-dom';
import DeletedMemoPage from '../pages/trash/DeletedMemoPage';




const DeletedMemoContainer = function () {

  const dispatch = useDispatch();
  const { id } = useParams();
  const memoId = parseInt(id as string, 10)

  useEffect(() => {

    if (!isNaN(memoId)) {
      console.log('[DeletedMemo] component will mount')
      dispatch(fetchDeletedMemo(memoId))
    }

    return () => {
      console.log('[DeletedMemo]: clear')
      dispatch(initMemo())
    }
  }, [memoId])


  const { memo } = useSelector((state: RootState) => ({
    memo: state.memo.memo
  }))


  const onRestore = (id: number) => dispatch(restoreMemo(id))

  return (
    <DeletedMemoPage memo={memo} onRestore={onRestore} />
  )
}

export default DeletedMemoContainer