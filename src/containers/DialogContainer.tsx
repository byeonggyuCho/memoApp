import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../reducers';
import Dialog from '../components/common/Dialog';
import { confirmDialog, cancelDialog } from '../actions/app';


const DialogContainer = function(){
    const dispatch = useDispatch();
    const {dialog} = useSelector((state:RootState)=>{
        return {
            dialog : state.app.dialog
        }
    })

    console.log('[DialogContainer] Render...')

    const cancelDialogHandler = () => dispatch(cancelDialog())
    const confirmDialogHandler = () => dispatch(confirmDialog())

    return (
      <Dialog dialog={dialog} cancelDialog={cancelDialogHandler} confirmDialog={confirmDialogHandler}/>
    )
}
export default DialogContainer