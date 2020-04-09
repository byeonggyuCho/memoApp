import * as React from 'react'
import {connect} from 'react-redux'
import { Memo } from '../models';
import { addMemo } from '../actions/memo';
import { AddMemoAction } from '../actions/memo';
import AddMemoPage from '../pages/memo/AddMemo'
import { Dispatch, bindActionCreators } from 'redux';
import { RootState } from '../reducers';

interface Props {
  apiCalling: boolean
  addMemo(memos: Memo): AddMemoAction
}

const AddMemoContainer = function (props: Props){
    return <AddMemoPage {...props} />
}

const mapStateToProps = (state: RootState) => ({
  apiCalling: state.app.apiCalling
})

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    addMemo,
  }, dispatch)
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(AddMemoContainer)