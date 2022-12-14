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

## 14. BorowserRouter与HashRouter的区别
1. 底层原理不一样：
    - `BrowserRouter`使用的是H5的history API，不兼容IE9及以下版本。
    - `HashRouter`r使用的是URL的哈希值。
2. path表现形式不一样
    - `BrowserRouter`的路径中没有#，例如：localhost:3000/demo/test
    - `HashRouter`的路径包含#，例如：localhost:3000/#/demo/test
3. 刷新后对路由state参数影响
    - `BrowserRouter`没有任何影响，因为state保存在history对象中。
    - `HashRouter`刷新后会导致路由state参数的丢失!!!!!!!
4. 备注：`HashRouter`可以用于解决一些路径错误相关的问题。

## 15. antd的按需引入+自定主题
1. 安装依赖：
    > npm install @craco/craco@5
    > npm install craco-less --force
    > 在APP.js中添加：import 'antd/dist/antd.less'

2. 修改package.json
    ``` json
        "scripts": {
        "start": "craco start",
        "build": "craco build",
        "test": "craco test",
        "eject": "react-scripts eject"
    },
    ```

3. 然后在项目根目录创建一个 `craco.config.js` 用于修改默认配置。
    ``` js
        // 配置具体的修改规则
        const CracoLessPlugin = require('craco-less');

        module.exports = {
            plugins: [
                {
                    plugin: CracoLessPlugin,
                    options: {
                        lessLoaderOptions: {
                            lessOptions: {
                                modifyVars: { '@primary-color': '#096' },
                                javascriptEnabled: true,
                            },
                        },
                    },
                },
            ],
        };
    ```

## 16. 求和案例_redux精简版
1. 去掉Count组件自身的状态
2. `.src`下建立：  
        `-src`  
            `-redux`  
                `-store.js`  
                    `-count_reducer.js`
3. store.js:
    - 引入redux中的`legacy_createStore as createStore `函数，创建一个store
    - `createStore`调用时要传入一个为其服务的reducer
    - 记得暴露store对象
4. count_reducer.js:
    - `reducer`的本质是一个函数，接受：`preState`, `action`，返回加工后的状态
    - `reducer`有两个作用：初始化状态，加工状态
    - `reducer`被第一次调用时，是store自动触发的，传递的`preState`是`undefined`，传递的action是：{ type: '@@REDUX/INIT_a.2.b.4' }
5. 在index.js中检测store中状态的改变，一旦发生改变重新渲染\<App />  
    备注：redux只负责管理状态，至于状态的改变驱动着页面的展示，要靠我们自己写。

## 17. 求和案例_redux完整版
    新增文件：  
        1. count_actions.js 专门用于创建action对象  
        2. constant.js 放置容易写错的type值

## 18. 求和案例_redux异步action版
1. 明确：延迟的动作不想交给组件自身，想交给action
2. 合适需要异步action：想要对状态进行操作，但是具体的数据靠异步任务返回
3. 具体编码：
    - npm install redux-thunk，并配置在store中
    - 创建action的函数不再返回一般对象，而是一个函数，该函数写异步任务
    - 异步任务有结果后，分发一个同步的action去真正操作数据
4. 备注：异步action不是必须要写的，完全可以自己等待异步任务的结果再去分发同步action。

## 19. 求和案例_react-redux基本使用
1. 明确两个概念：
    - UI组件：不能使用任何redux的api，只负责页面的呈现、交互等。
    - 容器组件：负责redux通信，将结果交给UI组件。
2. 如何创建一个容器组件————靠`react-redux` 的 `connect`函数
    - connect(mapStateToProps, mapDispatchToProps)(UI组件)
    - `-mapStateToProps`：映射状态，返回值是一个对象
    - `-mapDispatchToProps`：映射操作状态的方法，返回值是一个对象
3. 备注1：容器组件中的store是靠`props`传进去的，而不是在容器组件中直接引入
4. 备注2：`-mapDispatchToProps`，也可以是一个对象

## 20. 求和案例_react-redux优化
1. 容器组件和UI组件整合一个文件。
2. 无需自己给容器传递`store`，给\<App />包裹一个\<Provider store={store} > 即可。
3. 使用了`react-redux`后也不用再自己检测`redux`中状态的改变了，容器组件可以自动完成这个工作。
4. `mapDispatchToProps`也可以简单的写成一个对象。
5. 一个组件要和`redux`“打交道”要经过那几步？
    - 定义好UI组件---不暴露。
    - 引入`connect`生成一个容器组件，并暴露，写法如下：
    ``` jsx
        connect(
            state => ({key: value}), // 映射状态
            {key: xxxxAction} // 映射操作状态的方法
        )(UI组件)
    ```
    - 在UI组件中通过this.props.xxxxx读取和操作状态。

## 21. 求和案例_react-redux数据共享版
1. 定义一个`Person`组件，和`Count`组件通过`redux`共享数据。
2. 为`Person`组件编写：`reducer`、`action`，配置constant常量。
3. 重点：`Person`的`reducer`和`Count`的`Reducer`要使用`combineReducers`进行合并，合并后的总状态是一个对象！！！
4. 交给store的是总`reducer`，最后注意在组建中取出状态的时候，记得“取到位”。

## 22. 求和案例_react-redux开发者工具的使用
1. npm install redux-devtools-extension
2. store中进行配置
```js
    import { composeWithDevTools } from 'redux-devtools-extension'
    const store = createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))
```

## 23. 求和案例_react-redux最终版
1. 所有的变量名字要规范,尽量触发对象的简写形式.
2. reducers文件夹中,编写index.js专门用于汇总并暴露所有的reducer.