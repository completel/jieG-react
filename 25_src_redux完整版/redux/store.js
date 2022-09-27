/* 
    该文件专门暴露一个store对象，整个应用只有一个store对象
*/

import { legacy_createStore as createStore } from '@reduxjs/toolkit'
// 引入为Count组件服务的reducer
import countReducer from './count_reducer'

export default createStore(countReducer)

