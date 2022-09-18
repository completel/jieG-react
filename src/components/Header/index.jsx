import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import './index.css';

export default class Header extends Component {

    // 对接收的props进行：类型、必要性的限制
    static propTypes = {
        addTodo: PropTypes.func.isRequired,
    }

    // 键盘事件的回调
    handleKeyUp = (event) => {
        // 解构赋值 keyCode 、 target、todos
        const { keyCode, target } = event;
        const { todos } = this.props;
        // 判断是否是回车按键
        if (keyCode !== 13) return
        if (target.value.trim() === '') {
            alert('输入不能为空~');
            return;
        }
        // 判断是否有重复属性
        const result = todos.some((todo) => {
            return todo.name === target.value;
        })
        if (result) {
            alert('请勿输入重复任务~');
            return;
        }
        // 准备好一个todo对象
        const todoObj = { id: uuidv4(), name: target.value, done: false };
        // 将todoObj传递给App
        this.props.addTodo(todoObj);
        // 清除输入框的值
        event.target.value = '';
    }

    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
            </div>
        )
    }
}
