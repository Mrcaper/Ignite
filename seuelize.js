let express=require('express');
let app=express();
let {Sequelize,Model,DataType}=require('sequelize');
let seqCon=new Sequelize({host:'localhost',username:'root',password:'',dialect:'mysql',database:'Rana'});
seqCon.authenticate()