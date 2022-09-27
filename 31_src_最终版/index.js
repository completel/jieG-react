// 引入React核心库
// import React from "react";
// 引入ReactDOM
import ReactDOM from "react-dom/client";
// 引入App组件
import App from "./App";
import store from './redux/store';
import { Provider } from "react-redux";

// 渲染App到页面
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // 此处需要用Provider包裹App,目的是让所有的后代容器组件都能接收到store
    <Provider store={store}>
        <App />
    </Provider>
)
