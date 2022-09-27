/* 
    该文件专门为Count组件生成action对象
*/
import { INCREMENT, DECREMENT } from '../constant'

// 同步action，就是指action的值是Object
export const increment = data => ({ type: INCREMENT, data })

export const decrement = data => ({ type: DECREMENT, data })

// 异步action，就是之action的值是函数，异步action中一般都会调用同步action，异步action不是必须要用的
export const incrementAsync = (data, timer) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(increment(data))
        }, timer)
    }
}

