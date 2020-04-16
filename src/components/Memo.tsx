import React from 'react'
import Button from './common/Button'


interface AddmemoInterface {
    apiCalling : boolean
    handleChange : (e: React.FormEvent<HTMLTextAreaElement>)=>void
    value :string
    handleClickSave: ()=>void
    isEdit? : boolean
}

const Addmemo = function(prop: AddmemoInterface){


    const  {apiCalling, handleChange, value, handleClickSave , isEdit} = prop


    const textBoxStype = {
        width: '97%',
        height: '100px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        padding: '10px',
    }


    return (
        <>
            <form>
                <textarea  style={textBoxStype} placeholder="메모를 입력하세요"  onChange={handleChange} value={value} />
            </form>
            <Button to="/memo">취소</Button>
            <Button  disabled={apiCalling} onClick={handleClickSave}>{isEdit ? '수정' : '저장'}</Button>
        </>
    )
}


export default Addmemo;