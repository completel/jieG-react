import React, { Component } from 'react'
import { Button, DatePicker } from 'antd'
import { WechatOutlined, WeiboOutlined, SearchOutlined } from '@ant-design/icons'
import 'antd/dist/antd.less'

export default class App extends Component {

    onChange = (date, dateString) => {
        console.log(date, dateString);
    };

    render() {
        const { RangePicker } = DatePicker;
        return (
            <div>App……
                <button>demo</button>
                <Button type="primary">按钮1</Button>
                <Button>按钮2</Button>
                <Button type="link">按钮2</Button>
                <WechatOutlined />
                <WeiboOutlined />
                <Button type="primary" icon={<SearchOutlined />}>
                    Search
                </Button>
                <DatePicker onChange={this.onChange} />
                <RangePicker showTime />
            </div>
        )
    }
}
