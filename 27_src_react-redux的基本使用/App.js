import React, { Component } from 'react'
import Count from './containers/Count'
import store from './redux/store'

export default class App extends Component {
    render() {
        return (
            <div>
                {/* 给容器组件传递东西 */}
                <Count store={store} />
            </div>
        )
    }
}
