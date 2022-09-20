import React, { Component } from 'react'
import List from './components/List'
import Search from './components/Search'

export default class App extends Component {

    state = {
        // 初始化状态，初始值为数组
        users: [],
        isFirst: true, // 是否为第一次打开
        isLoading: false, // 标识是否处在加载中
        err: '', // 存储请求相关的错误信息
    }

    // 更新App的state
    updateAppState = (stateObj) => {
        this.setState(stateObj)
    }

    render() {
        return (
            <div className="container">
                <Search updateAppState={this.updateAppState}></Search>
                <List {...this.state}></List>
            </div>
        )
    }
}
