import { Memo } from '../models';
import { FetchMemoListAction, fetchMemoList } from '../actions';
import * as React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { RootState } from '../reducers'
import * as api from '../apis'
import MemoListPage from '../pages/memo/MemoList'

interface Props {
    memos: Memo[]
    fetchMemoList(memo: Memo[]): FetchMemoListAction
}

class MemoListContainer extends React.Component<Props> {

    componentWillMount() {
        const { fetchMemoList } = this.props
        const memos = api.fetchMemoList()
    
        // 액션을 발행 한다 
        fetchMemoList(memos)
    }

    render() {
        const { memos } = this.props
        return <MemoListPage memos={memos} />
      }

}

const mapStateToProps = (state: RootState) => ({
    memos: state.memo.memos
  })
  
const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators({
      fetchMemoList
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MemoListContainer)