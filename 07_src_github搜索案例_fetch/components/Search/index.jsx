import React, { Component } from 'react'
import PubSub from 'pubsub-js'
// import axios from 'axios'

export default class Search extends Component {

    search = async () => {
        // 获取用户的输入（连续解构赋值+重命名）
        const { keyWordElement: { value: keywords } } = this;
        // 发送请求前通知List更新状态
        // this.props.updateAppState({ isFirst: false, isLoading: true });
        PubSub.publish('hello', { isFirst: false, isLoading: true });

        // 发送网络请求 --- 使用axios发送
        /* axios.get(`https://api.github.com/search/users?q=${keywords}`).then(
            response => {
                // 请求成功后通知App更新状态
                const { items } = response.data;
                // this.props.updateAppState({ isLoading: false, users: items });
                PubSub.publish('hello', { isLoading: false, users: items });
            },
            error => {
                // 请求失败后通知App更新状态
                // this.props.updateAppState({ isLoading: false, err: error.message });
                PubSub.publish('hello', { isLoading: false, err: error.message });
            },
        ) */

        // 发送网络请求 --- 使用fetch发送 --- 使用fetch发送
        /* fetch(`https://api.github.com/search/users?q=${keywords}`).then(
            response => {
                console.log('联系服务器成功了');
                return response.json();
            },
            error => console.log('联系服务器失败了', error),
        ).then(
            response => console.log('获取数据成功了', response),
            error => console.log('获取数据失败了', error),
        ) */

        // 发送网络请求 --- 使用fetch发送 --- 使用fetch发送（优化）
        try {
            const response = await fetch(`https://api.github.com/search/users?q=${keywords}`)
            const data = await response.json();
            PubSub.publish('hello', { isLoading: false, users: data.items })
        } catch (error) {
            PubSub.publish('hello', { isLoading: false, err: error.message });
        }

    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索Github用户</h3>
                <div>
                    <input ref={ele => this.keyWordElement = ele} type="text" placeholder="输入关键字点击搜索" />&nbsp;
                    <button onClick={this.search}>搜索</button>
                </div>
            </section>
        )
    }
}
