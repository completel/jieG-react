import React, { Component } from 'react'
// import QueryString from 'query-string'


const DetailData = [
    { id: '01', title: '我之所以想变强，是为了活得轻松写意。' },
    { id: '02', title: '被动的生活，无聊的工作，才是效率的死敌。' },
    { id: '03', title: '我爱你，你是我呼吸的城堡，如此轻柔，我们要天长地久。' }
]
export default class Detail extends Component {
    render() {
        console.log(this.props);
        // 接受params参数
        // const { id, title } = this.props.match.params;

        // 接受search参数
        // const { search } = this.props.location;
        // const { id, title } = QueryString.parse(search);

        // 接受state参数
        const { id, title } = this.props.location.state || {};

        const findResult = DetailData.find((detailObj) => {
            return detailObj.id === id;
        }) || {}
        return (
            <ul>
                <li>ID: {id}</li>
                <li>TITLE: {title}</li>
                <li>CONTENT: {findResult.title}</li>
            </ul>
        )
    }
}
