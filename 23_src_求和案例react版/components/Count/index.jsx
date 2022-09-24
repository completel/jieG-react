import React, { Component } from 'react'
import { Button, message } from 'antd'
import 'antd/dist/antd.less'
import './index.less'

export default class Count extends Component {

    state = { count: 0 }

    // 加法
    increment = () => {
        const { value } = this.selectedNumber;
        const { count } = this.state;
        this.setState({ count: count + value * 1 });
    }

    // 减法
    decrement = () => {
        const { value } = this.selectedNumber;
        const { count } = this.state;
        this.setState({ count: count - value * 1 });
    }

    // 奇数再加
    incrementIfOdd = () => {
        const { value } = this.selectedNumber;
        const { count } = this.state;
        if (count % 2 !== 0) {
            this.setState({ count: count + value * 1 });
        }
        message.warning('当前数字不是奇数噢~');
    }

    // 延时再加
    incrementAsync = () => {
        const { value } = this.selectedNumber;
        const { count } = this.state;
        setTimeout(() => {
            this.setState({ count: count + value * 1 });
        }, 2000);
    }


    render() {
        const { count } = this.state;
        return (
            <div className='count'>
                <h2>当前求和的值：{count}</h2>
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
