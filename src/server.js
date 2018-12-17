//nodejs模块化开发
const express=require('express');
//引入配置文件
const {port,host,root}=require('./api/config.json');
//引入路由文件
const Router=require('./api');

let app=express();
//静态资源服务器
app.use(express.static(root));
//路由
app.use(Router);
//监听端口
app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
});