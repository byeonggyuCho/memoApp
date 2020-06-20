import React, { useEffect, useState } from 'react'
import Memo from '../components/Memo'
import { RootState } from '../reducers'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch } from 'redux'
import { fetchMemo, updateMemo, initMemo } from '../actions/memo'
import { useParams } from 'react-router-dom'

const EditMemoContainer = function () {

    const { id } = useParams();
    const numId = parseInt(id as string);
    const dispatch: Dispatch = useDispatch();

    const { apiCalling, memo } = useSelector((store: RootState) => {
        return {
            apiCalling: store.app.apiCalling,
            memo: store.memo.memo
        }
    })

    const [value, setValue] = useState(memo.content);


    useEffect(() => {

        dispatch(fetchMemo(numId))

        return () => {
            dispatch(initMemo())
        }
    }, [numId])





    const handleChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
        const value: string = e.currentTarget.value;
        setValue(value);
    }

    const handleClickUpdate = () => {
        dispatch(updateMemo({
            id: numId,
            content: value
        }))
    }

    return (
        <Memo
            value={value}
            isEdit={true}
            apiCalling={apiCalling}
            handleChange={handleChange}
            handleClickSave={handleClickUpdate}
        />
    )
}


export default EditMemoContainer