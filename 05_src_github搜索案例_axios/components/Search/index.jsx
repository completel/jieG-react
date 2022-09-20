import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {

    // state = { value: '', };

    //h 数据的双向绑定
    // userName = (event) => {
    //     const { value } = event.target;
    //     this.setState({ value });
    // }

    search = () => {
        // 获取用户的输入（连续解构赋值+重命名）
        const { keyWordElement: { value: keywords } } = this;
        // 发送请求前通知App更新状态
        this.props.updateAppState({ isFirst: false, isLoading: true });
        // 发送网络请求
        axios.get(`https://api.github.com/search/users?q=${keywords}`).then(
            response => {
                // 请求成功后通知App更新状态
                const { items } = response.data;
                this.props.updateAppState({ isLoading: false, users: items });
            },
            error => {
                // 请求失败后通知App更新状态
                this.props.updateAppState({ isLoading: false, err: error.message });
            },
        )
        // 发送网络请求
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索Github用户</h3>
                <div>
                    <input onChange={this.userName} ref={ele => this.keyWordElement = ele} type="text" placeholder="输入关键字点击搜索" />&nbsp;
                    <button onClick={this.search}>搜索</button>
                </div>
            </section>
        )
    }
}
