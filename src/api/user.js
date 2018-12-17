//用户信息路由
const express = require('express');
let Router = express.Router();
//返回全部用户信息
Router.get('/',(req,res)=>{
    res.send('user list');
});
//返回符合条件的用户信息
Router.get('/:username',(req,res)=>{
    res.send({
        path:req.url,
        username:req.params.username
    });
});

module.exports = Router;