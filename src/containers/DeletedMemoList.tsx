import React, {useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import DeletedMemoListPage from '../pages/trash/DeletedMemoList';
import { Dispatch } from 'redux';
import { fetchDeletedMemoList } from '../actions/memo';
import { Redirect, useRouteMatch } from 'react-router';
import {RootState} from '../reducers'


const DeletedMemoListContainer = function(){

  const dispatch:Dispatch = useDispatch();
  const {isExact, url} = useRouteMatch();
  const {memos} = useSelector((state:RootState)=>{
    return {
      memos: state.memo.deletedMemos
    }
  })

  useEffect(()=>{
    return ()=>{
      // WillMount: 삭제 데이터 요청
      dispatch(fetchDeletedMemoList())
    }
  },[])


  // const {memos, match: {isExact, url}} = props;
  const hasMemos = memos.length > 0
  
  if (isExact && hasMemos) {
    return <Redirect to={`${url}/${memos[0].id}`} />
  }

  return <DeletedMemoListPage memos={memos} />
}



// const mapStateToProps = (state: RootState) => ({
//   memos: state.memo.deletedMemos
// })

// const mapDispatchToProps = (dispatch: Dispatch) => 
//   bindActionCreators({
//     fetchDeletedMemoList
//   }, dispatch)

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(DeletedMemoListContainer)


export default DeletedMemoListContainer;