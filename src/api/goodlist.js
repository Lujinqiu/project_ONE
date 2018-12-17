const express = require('express');
const mongodb = require('mongodb');
// 获取Mongo客户端
const MongoClient = mongodb.MongoClient;
let Router = express.Router();
//返回全部商品信息
Router.get('/',(req,res)=>{
    MongoClient.connect('mongodb://localhost:27017',(err, database)=>{
        if(err) throw err;
        let db = database.db('1809');// 使用1809数据库
        let user = db.collection('goodlist');// 使用user集合
        // 查询全部数据
        user.find().toArray((err,result)=>{// 查询
            res.send(result);
        });
        database.close();// 关闭数据库，避免资源浪费
    });
});
// RESTful风格api
// 客户端发起不同的请求相同路由可以获得不同操作
Router.route('/:gname')
    .get((req,res)=>{
        MongoClient.connect('mongodb://localhost:27017',(err, database)=>{
            if(err) throw err;
            let db = database.db('1809');// 使用1809数据库
            let user = db.collection('goodlist');// 使用user集合
            // 查询全部数据
            user.find({name:req.params.gname}).toArray((err,result)=>{// 查询
                res.send(result);
                console.log(result);
            });
            database.close();// 关闭数据库，避免资源浪费
        });
    })
    .post((req,res)=>{
        res.send({
            path:'修改商品信息',
            username:req.params.id
        });
    })
    .put((req,res)=>{
        res.send({
            path:'添加商品',
            username:req.params.id
        });
    })
    .delete((req,res)=>{
        res.send({
            path:'删除商品',
            username:req.params.id
        });
    });

module.exports = Router;