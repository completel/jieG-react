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

    showReplace = (id, title) => {
        // replace跳转+携带params参数
        // this.props.history.replace(`/home/message/detail/${id}/${title}`);

        // replace跳转+携带search参数
        // this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`);

        // replace跳转+携带state参数
        this.props.history.replace(`/home/message/detail`, { id, title });
    }

    showPush = (id, title) => {
        //* push跳转+携带params参数
        // this.props.history.push(`/home/message/detail/${id}/${title}`);

        //* push跳转+携带search参数
        // this.props.history.push(`/home/message/detail?id=${id}&title=${title}`);

        //* push跳转+携带state参数
        this.props.history.push(`/home/message/detail`, { id, title });
    }

    back = () => {
        this.props.history.goBack();
    }

    forward = () => {
        this.props.history.goForward();
    }

    go = () => {
        this.props.history.go(2);
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
                                    {/* <Link to={`/home/message/detail/?id=${item.id}&title=${item.title}`}>{item.title}</Link> */}

                                    {/* 向路由组件传递state参数 */}
                                    <Link to={{ pathname: '/home/message/detail', state: { id: item.id, title: item.title } }}>{item.title}</Link>

                                    &nbsp;&nbsp;<button onClick={() => this.showPush(item.id, item.title)}>push查看</button>
                                    &nbsp;&nbsp;<button onClick={() => this.showReplace(item.id, item.title)}>replace查看</button>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr />
                {/* 注册路由：声明接受params参数 */}
                {/* <Route path='/home/message/detail/:id/:title' component={Detail} /> */}

                {/* 注册路由：声明接受search参数 */}
                {/* <Route path='/home/message/detail' component={Detail} /> */}

                {/* 注册路由：声明接受state参数 */}
                <Route path='/home/message/detail' component={Detail} />

                <button onClick={this.back}>回退</button> &nbsp;
                <button onClick={this.forward}>前进</button> &nbsp;
                <button onClick={this.go}>go</button>
            </div>
        )
    }
}
