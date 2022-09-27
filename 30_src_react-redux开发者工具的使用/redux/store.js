/* 
    该文件专门暴露一个store对象，整个应用只有一个store对象
*/

import { legacy_createStore as createStore, applyMiddleware, combineReducers } from '@reduxjs/toolkit'
// 引入redux-thunk，用于支持异步action 
import thunk from 'redux-thunk'
// 引入redux-devtools-extension
import { composeWithDevTools } from 'redux-devtools-extension'
// 引入为Count组件服务的reducer
import countReducer from './reducers/count'
import personReducer from './reducers/person'

// 汇总所有的reducer变为一个总的reducer
const allReducer = combineReducers({
    he: countReducer,
    rens: personReducer
})

export default createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))

