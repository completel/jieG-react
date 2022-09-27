import React, { Component } from 'react'
import { Button, message } from 'antd'
// 引入store，用于获取redux中保存状态
import store from '../../redux/store'
import { createIncrementAction, createDecrementAction } from '../../redux/count_actions'
import 'antd/dist/antd.less'
import './index.less'

export default class Count extends Component {

    state = { names: 'jieG' }

    /* componentDidMount() {
        // 检测redux中状态的变化，只要变化，就调用render
        store.subscribe(() => {
            this.setState({});
        })
    } */

    // 加法
    increment = () => {
        const { value } = this.selectedNumber;
        store.dispatch(createIncrementAction(value * 1));
    }

    // 减法
    decrement = () => {
        const { value } = this.selectedNumber;
        store.dispatch(createDecrementAction(value * 1));
    }

    // 奇数再加
    incrementIfOdd = () => {
        const { value } = this.selectedNumber;
        const count = store.getState();
        if (count % 2 !== 0) {
            store.dispatch(createIncrementAction(value * 1));
        } else {
            message.warn('你在干啥呢~');
        }
    }

    // 延时再加
    incrementAsync = () => {
        const { value } = this.selectedNumber;
        setTimeout(() => {
            store.dispatch(createIncrementAction(value * 1));
        }, 2000);
    }


    render() {
        return (
            <div className='count'>
                <h2>当前求和的值：{store.getState()}</h2>
                <select ref={ele => this.selectedNumber = ele}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <Button onClick={this.increment} type="primary">+</Button>
                <Button onClick={this.decrement} type="primary">-</Button>
                <Button onClick={this.incrementIfOdd} type="primary">当前求和奇数再加</Button>
                <Button onClick={this.incrementAsync} type="primary">异步加</Button>
            </div>
        )
    }
}
