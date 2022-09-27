// 引入connect用于连接UI组件与redux
import { connect } from "react-redux"
import React, { Component } from 'react'
import {
    increment,
    decrement,
    incrementAsync
} from "../../redux/actions/count"

class Count extends Component {

    state = { names: 'jieG' }

    // 加法
    increment = () => {
        const { value } = this.selectedNumber;
        this.props.increment(value * 1);
    }

    // 减法
    decrement = () => {
        const { value } = this.selectedNumber;
        this.props.decrement(value * 1);
    }

    // 奇数再加
    incrementIfOdd = () => {
        const { value } = this.selectedNumber;
        if (this.props.count % 2 !== 0) {
            this.props.increment(value * 1);
        }
    }

    // 延时再加
    incrementAsync = () => {
        const { value } = this.selectedNumber;
        this.props.incrementAsync(value * 1, 500);
    }


    render() {
        // console.log('ui组件接收到的props是', this.props);
        return (
            <div className='count'>
                <h2>我是Count组件，下方组件总人数为{this.props.renshu}</h2>
                <h4>当前求和的值：{this.props.count}</h4>
                <select ref={ele => this.selectedNumber = ele}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button style={{ marginLeft: '10px' }} onClick={this.increment} >+</button>
                <button style={{ marginLeft: '10px' }} onClick={this.decrement} >-</button>
                <button style={{ marginLeft: '10px' }} onClick={this.incrementIfOdd} >当前求和奇数再加</button>
                <button style={{ marginLeft: '10px' }} onClick={this.incrementAsync} >异步加</button>
            </div>
        )
    }
}

// 使用connect()()创建并暴露一个Count的容器组件
export default connect(
    state => ({ count: state.count, renshu: state.persons.length }),
    {
        increment,
        decrement,
        incrementAsync,
    }
)(Count)