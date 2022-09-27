// 引入Count的ui组件
import CountUI from "../../components/Count"
// 引入connect用于连接UI组件与redux
import { connect } from "react-redux"
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from "../../redux/count_actions"

// mapStateToProps函数返回值对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value————状态
function mapStateToProps(state) {
    return {
        count: state
    }
}

// mapDispatchToProps函数返回值对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value————操作状态的方法
function mapDispatchToProps(dispatch) {
    return {
        jia: data => dispatch(createIncrementAction(data)),
        jian: data => dispatch(createDecrementAction(data)),
        jiaAsync: (data, timer) => dispatch(createIncrementAsyncAction(data, timer)),
    }
}

// 使用connect()()创建并暴露一个Count的容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)