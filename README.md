## JieG

### `npm run start`
**在本地配置一个服务器环境**

### `npm run build`
**打包项目文件**

## 1. todoList案例相关知识点
- 拆分组件、实现静态组件，注意：className、style的写法
- 动态初始化列表，如何确定将数据放在哪个组件的state中？
    - 某个组件使用：放在自身的state中
    - 某些组件使用：放在他们共同的父组件state中（官方称此操作为：状态提升）
- 关于父子组件通信：
    - 【父组件】给【子组件】传递数据：通过props传递
    - 【子组件】给【父组件】传递数据：通过props传递，要求父组件提前给子传递一个函数
- 注意`defaultChecked`和`checked`的区别，类似的还有`defaultValue`和`value`
- 状态在哪里，操作状态的方法就在那里

> `defaultChecked` 只在第一次指定的时候有作用
> 
> 如果使用`checked`需要搭配`onChange`一起使用  

``` js
// 这里的filter取反，可以看下面那个例子，可以理解为将false的过滤出来
clearAllDone = () => {
    // 获取原来的todos
    const { todos } = this.state;
    // 过滤数据
    const newTodos = todos.filter(todoObj => {
        return !todoObj.done;
    })
    this.setState({ todos: newTodos });
}

let arr = [
    { a: true, b: '123' },
    { a: true, b: '456' },
    { a: false, b: '789' },
    { a: true, b: 'abc' }
]

const result = arr.filter(item => !item.a);

console.log(result); // [ { a: false, b: '789' } ]
```