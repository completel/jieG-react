// 创建“外壳”组件App
import React, { Component } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import './App.css';

// 创建并暴露App组件
export default class App extends Component {
    // 状态在哪里，操作状态的方法就在那里

    // 初始化状态
    state = {
        todos: [
            { id: '001', name: '抽烟', done: false },
            { id: '002', name: '喝酒', done: false },
            { id: '003', name: '烫头', done: true },
            { id: '004', name: '打代码', done: false },
        ]
    }

    // addTodo 用于添加一个todo，接收的参数是todo对象
    addTodo = (todoObj) => {
        // 获取原todos
        const { todos } = this.state;
        // 追加一个todo
        const newTodos = [todoObj, ...todos];
        // 更新状态
        this.setState({ todos: newTodos });
    }

    // updateTodo 更新一个todoObj对象
    updateTodo = (id, done) => {
        // 获取状态中的todos
        const { todos } = this.state;
        // 匹配数据
        const newTodos = todos.map(todoObj => {
            if (todoObj.id === id) return { ...todoObj, done }
            else return todoObj;
        })
        this.setState({ todos: newTodos });
    }

    // deleteTodo 用于删除一个todo对象
    deleteTodo = (id) => {
        // 获取原来的todos
        const { todos } = this.state;
        // 删除指定id的todo对象
        const newTodos = todos.filter((todoObj) => {
            return todoObj.id !== id;
        })
        this.setState({ todos: newTodos });
    }

    //h 清除所有完成的
    clearAllDone = () => {
        // 获取原来的todos
        const { todos } = this.state;
        // 过滤数据
        const newTodos = todos.filter(todoObj => {
            return !todoObj.done;
        })
        this.setState({ todos: newTodos });
    }

    // 全选按钮
    checkAllTodo = (done) => {
        // 获取原来的的todos
        const { todos } = this.state;
        // 加工数据
        const newTodos = todos.map((todoObj) => {
            return { ...todoObj, done };
        })
        // 更新状态
        this.setState({ todos: newTodos });
    }

    render() {
        const { todos } = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo} todos={todos}></Header>
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}></List>
                    <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}></Footer>
                </div>
            </div>
        )
    }
}