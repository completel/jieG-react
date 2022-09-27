/* 
    该文件专门暴露一个store对象，整个应用只有一个store对象
*/
import { legacy_createStore as createStore, applyMiddleware } from '@reduxjs/toolkit'
// 引入redux-thunk，用于支持异步action 
import thunk from 'redux-thunk'
// 引入redux-devtools-extension
import { composeWithDevTools } from 'redux-devtools-extension'
// 引入汇总之后的reducer
import reducer from './reducers'

export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

