import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home' // Home 是路由组件
import About from './pages/About' // About 是路由组件
import Header from './components/Header' // Header 是一般组件
import MyNavLink from './components/MyNavLink'

export default class App extends Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <Header></Header>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/* 原生HTML中，靠<a>跳转不同的页面 */}
                            {/* <a className="list-group-item active" href="./about.html">About</a>
                            <a className="list-group-item" href="./home.html">Home</a> */}

                            {/* 在React中靠路由链接实现切换组件 --- 编写路由链接*/}
                            <MyNavLink to="/about">About</MyNavLink>
                            <MyNavLink to="/home">Home</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 注册路由  exact={true} 严格匹配 */}
                                <Switch>
                                    <Route exact={true} path='/about' component={About} />
                                    <Route exact={true} path='/home' component={Home} />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
