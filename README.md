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

## 2. 配置代理
**[配置代理](https://github.com/completel/jieG-react/blob/master/markdown/react%E8%84%9A%E6%89%8B%E6%9E%B6%E9%85%8D%E7%BD%AE%E4%BB%A3%E7%90%86.md)**


## 3. github搜索案例相关知识点
1. 设计状态时要考虑全面，例如带有网络请求的组件，要考虑请求失败怎么办。
2. ES6小知识点：解构赋值+重命名
    ``` js
    let obj = {a: {b: 1}};
    const {a} = obj; // 传统解构赋值
    const {a: {b}} = obj; // 连续解构赋值
    const {a: {b: value}} = obj; // 连续解构赋值+重命名
    ```
3. 消息订阅和发布机制
    - 先订阅，再发布（理解：有一种隔空对话的感觉）
    - 适用于任意组件间通信
    - 要在组件的`componentWillUnmount`中取消订阅
4. fetch发送请求（关注分离的设计思想）
    ``` js
    try {
        const response = await fetch(`https://api.github.com/search/users?q=${keywords}`);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('请求出错', error);
    }
    ```

## 4. 路由的基本使用
1. 明确好界面中的导航区、展示区
2. 导航区的a标签改为Link标签
    `<Link to="/xxx">Demo</Link>`
3. 展示区写Route标签进行路径的匹配
    `<Route path="/xxx" component={Demo} />`
4. \<App>的最外侧包裹了一个\<BrowserRouter>或\<HashRouter>

## 5. 路由组件与一般组件
1. 写法不同：
    一般组件：`<Demo />`  
    路由组件：`<Route path='/demo' component={Demo} />`  
2. 存放位置不同：
    一般组件：`components`  
    路由组件：`pages`  
3. 接收到的`props`不同：  
    一般组件：写组件标签时传递了什么，就能收到什么。  
    路由组件：接收到三个固定的属性  

    > history:   
    > - go: ƒ go(n)  
    > - goBack: ƒ goBack()  
    > - goForward: ƒ goForward()  
    > - push: ƒ push(path, state)  
    > - replace: ƒ replace(path, state)  
    >   
    > location:   
    > - pathname: "/about"  
    > - search: ""  
    > - state: undefined  
    >   
    > match:   
    > - params: {}  
    > - path: "/about"  
    > - url: "/about"  

## 6. NavLink与封装NavLink
1. NavLink可以实现路由链接的高亮，通过activeClassName指定样式名
2. 标签体内容是一个特殊的标签属性
3. 通过this.props.children可以获取标签体内容


## 7. Switch的使用
1. 通常情况下，path和component是一一对应的关系。
2. `Switch`可以提高路由匹配效率（单一匹配）。

## 8. 解决多级路径刷新页面样式丢失的问题
1. public/index.html 中 引入样式时不写 ./ 写 / (常用)
2. public/index.html 中 引入样式时不写 ./ 写 %PUBLIC_URL% (常用)
3. 使用HashRouter

## 9. 路由的严格匹配和模糊匹配
1. 默认使用的时模糊匹配（简单记：【输入的路径】必须包含要【匹配的路径】，且顺序要一致）
2. 开启严格匹配：\<Route exact={true} path="/about/" component={About} />
3. 严格匹配不要随便开启，需要再开，有些时候开启会导致无法继续匹配二级路由

## 10. Redirect的使用
1. 一般写在所有路由注册的最下方，当所有路由都无法匹配时，跳转到Redirect指定的路由
2. 具体编码：
``` jsx
<Switch>
    <Route path='/about' component={About} />
    <Route path='/home' component={Home} />
    <Redirect to='/about' />
</Switch>
```

## 11. 嵌套路由
1. 注册子路由时要写上父路由的path值
2. 路由的匹配是按照注册路由的顺序进行的

## 12. 向路由组件传递参数
1. params参数
    > 路由链接(携带参数)：\<Link to='/demo/test/tom/18'>详情\</Link>  
    > 注册路由(生命接受)：\<Route path='/demo/test/:name/:age' component={Test} />  
    > 接收参数：const {id, title} = this.props.match.params
2. search参数
    > 路由链接(携带参数)：\<Link to='/demo/test?name=tom&age=18'>详情\</Link>  
    > 注册路由(生命接受)：\<Route path='/demo/test component={Test} />  
    > 接收参数：this.props.location.search
    > 备注：获取到的search是urlencoded编码字符串，需要借助`query-string`解析
3. state参数
    > 路由链接(携带参数)：\<Link to={{pathname: '/demo/test', state: {name: 'tom', age: 18}}}>详情\</Link>  
    > 注册路由(生命接受)：\<Route path='/demo/test component={Test} />  
    > 接收参数：this.props.location.state
    > 备注：刷新也可以保留住参数

## 13. 编程式路由导航
**借助`this.props.history`对象上的API对操作路由跳转、前进、后退**  
> -this.props.history.push()  
> -this.props.history.replace()  
> -this.props.history.goBack()  
> -this.props.history.goForward()  
> -this.props.history.go()  
