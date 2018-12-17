const express = require('express');
const mongodb = require('mongodb');
// 获取Mongo客户端
const MongoClient = mongodb.MongoClient;

let Router = express.Router();

//查询全部订单信息
Router.get('/',(req,res)=>{
    MongoClient.connect('mongodb://localhost:27017',(err, database)=>{
        if(err) throw err;
        let db = database.db('1809');// 使用1809数据库
        let user = db.collection('order');// 使用user集合
        // 查询全部数据
        user.find().toArray((err,result)=>{// 查询
            res.send(result);
        });
        database.close();// 关闭数据库，避免资源浪费
    });
});
//查询某个订单信息
Router.get('/:ord',(req,res)=>{
    MongoClient.connect('mongodb://localhost:27017',(err, database)=>{
        if(err) throw err;
        let db = database.db('1809');// 使用1809数据库
        let user = db.collection('order');// 使用user集合
        // 查询数据
        user.find({name:req.params.ord}).toArray((err,result)=>{
            res.send(result);
        });
        database.close();// 关闭数据库，避免资源浪费
    });
});

module.exports = Router;