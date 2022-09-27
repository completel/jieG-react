// 引入React核心库
// import React from "react";
// 引入ReactDOM
import ReactDOM from "react-dom/client";
// 引入App组件
import App from "./App";
import store from "./redux/store";

// 渲染App到页面
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// 检测redux中状态的改变，如redux的状态发生了改变，那么重新渲染App组件
store.subscribe(() => {
    root.render(
        <App />
    );
})
