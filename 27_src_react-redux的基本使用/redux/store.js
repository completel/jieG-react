/* 
    该文件专门暴露一个store对象，整个应用只有一个store对象
*/

import { legacy_createStore as createStore, applyMiddleware } from '@reduxjs/toolkit'
// 引入redux-thunk，用于支持异步action 
import thunk from 'redux-thunk'
// 引入为Count组件服务的reducer
import countReducer from './count_reducer'

export default createStore(countReducer, applyMiddleware(thunk))

