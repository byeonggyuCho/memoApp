import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../reducers';
// import * as models from '../models';
import Dialog from '../components/Dialog';
import { confirmDialog, cancelDialog } from '../actions/app';

// interface Props {
//   dialog?: models.Dialog
//   cancelDialog(): CancelDialogAction
//   confirmDialog(): ConfirmDialogAction
// }

// class DialogContainer extends React.Component<Props> {
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