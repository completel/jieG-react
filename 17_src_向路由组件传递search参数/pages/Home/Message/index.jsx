import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
    state = {
        messageArr: [
            { id: '01', title: '消息1' },
            { id: '02', title: '消息2' },
            { id: '03', title: '消息3' },
        ]
    }
    render() {
        const { messageArr } = this.state;
        return (
            <div>
                <ul>
                    {
                        messageArr.map((item) => {
                            return (
                                <li key={item.id}>

                                    {/* 向路由组件传递params参数 */}
                                    {/* <Link to={`/home/message/detail/${item.id}/${item.title}`}>{item.title}</Link> */}

                                    {/* 向路由组件传递search参数 */}
                                    <Link to={`/home/message/detail/?id=${item.id}&title=${item.title}`}>{item.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr />
                {/* 注册路由：声明接受params参数 */}
                {/* <Route path='/home/message/detail/:id/:title' component={Detail} /> */}

                {/* 注册路由：声明接受search参数 */}
                <Route path='/home/message/detail' component={Detail} />
            </div>
        )
    }
}
