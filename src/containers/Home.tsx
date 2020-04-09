  
import React,{useEffect} from 'react'
import { RootState } from '../reducers'
import HomePage from '../pages/home'
import { Dispatch } from 'redux'
import { useDispatch ,useSelector } from 'react-redux'
import {
  fetchMemoList,
  fetchDeletedMemoList,
} from '../actions/memo'

// interface Props {
//   memos: Memo[] 
//   deletedMemos: Memo[] 
//   fetchMemoList(): FetchMemoListAction
//   fetchDeletedMemoList(): FetchDeletedMemoListAction
// }

const HomeContainer = function(){

  const dispatch:Dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchMemoList())
    dispatch(fetchDeletedMemoList())
  },[])

  const { memos, deletedMemos } = useSelector((state: RootState)=>{
    return {
      memos: state.memo.memos,
      deletedMemos: state.memo.deletedMemos,
    }
  })


    return <HomePage memos={memos} deletedMemos={deletedMemos} />
}



// const mapStateToProps = (state: RootState) => {
//   return {
//     memos: state.memo.memos,
//     deletedMemos: state.memo.deletedMemos,
//   }
// }

// const mapDisptchToProps = (dispatch: Dispatch) => {
//   return bindActionCreators({
//     fetchMemoList,
//     fetchDeletedMemoList,
//   }, dispatch)
// }

// export default connect(
//   mapStateToProps,
//   mapDisptchToProps
// )(HomeContainer)


export default HomeContainer;