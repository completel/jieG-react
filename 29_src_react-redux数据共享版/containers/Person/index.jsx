import React, { Component } from 'react'
import { connect } from 'react-redux'
import { nanoid } from 'nanoid'
import { createAddPersonAction } from '../../redux/actions/person'

class Person extends Component {

    addPerson = () => {
        const name = this.nameNode.value;
        const age = this.ageNode.value;
        const personObj = { id: nanoid(), name, age };
        this.props.addPerson(personObj);
        this.nameNode.value = '';
        this.ageNode.value = '';
    }

    render() {
        const { personObj } = this.props;
        console.log(personObj)
        return (
            <div>
                <h2>我是Person组件，上方组件求和为{this.props.he}</h2>
                <input ref={ele => this.nameNode = ele} type="text" placeholder='输入名字' />
                <input ref={ele => this.ageNode = ele} type="text" placeholder='输入年龄' />
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {
                        personObj.map(p => {
                            return <li key={p.id}>{p.name}--{p.age}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}


export default connect(
    state => ({
        personObj: state.rens,
        he: state.he
    }),
    // 映射操作状态的方法
    { addPerson: createAddPersonAction }
)(Person)