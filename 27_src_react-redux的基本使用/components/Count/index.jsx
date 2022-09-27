import React, { Component } from 'react'
import { Button, message } from 'antd'
import 'antd/dist/antd.less'
import './index.less'

export default class Count extends Component {

    state = { names: 'jieG' }

    // 加法
    increment = () => {
        const { value } = this.selectedNumber;
        this.props.jia(value * 1);
    }

    // 减法
    decrement = () => {
        const { value } = this.selectedNumber;
        this.props.jian(value * 1);
    }

    // 奇数再加
    incrementIfOdd = () => {
        const { value } = this.selectedNumber;
        if (this.props.count % 2 !== 0) {
            this.props.jia(value * 1);
        } else {
            message.warn('干啥呢干啥呢');
        }
    }

    // 延时再加
    incrementAsync = () => {
        const { value } = this.selectedNumber;
        this.props.jiaAsync(value * 1, 500);
    }


    render() {
        console.log('ui组件接收到的props是', this.props);
        return (
            <div className='count'>
                <h2>当前求和的值：{this.props.count}</h2>
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
