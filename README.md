## pocket-book
是一个兼容mac 和 windows的开源记账本app程序，可以用于个人日常使用。

#### 安装运行
```
npm clone https://github.com/suyuhuan/pocket-book.git
cd pocket-book
npm install
npm run dev
```

#### 功能实现
- 1.展示列表账单
- 2.收入支出统计
- 3.图表分析
- 4.按年月统计账单
- 5.按类型统计账单
- 6.收入支出分类
- 7.添加收入支出账单
- 8.修改收入支出账单
- 9.删除收入支出账单


#### 使用技术栈
- electron: 桌面应用框架
- node: 后端服务
- react: view渲染
- prop-types:类型检查
- bootstrap: css样式库

#### elctorn && react 配置说明
- concurrently  同时运行多个命令
- wait-on   执行等待
- cross-env  通过js在平台设置不同的环境变量的工具
- 支持跨平台

```
//package.json
"scripts": {
 "dev": "concurrently \"wait-on http://localhost:3000 && electron .\" \"cross-env BROWSER=none npm start\""
}
```

#### src目录结构说明
  - components: 展示型组件
  - containers: 容器型组件
  - hooks: 自定义hook
  - utils: 工具库
  - __test__: 测试文件

  ### 组件说明
  - 展示型组件:
  - 容器型组件:home.js 、create.js



