const express = require("express");   /*引入模块*/
const webserver = express();
const Carts=require("./carts");     /*引入的json文件*/
const ProductDetail=require("./ProductDetail");     /*引入的json文件*/
const Sort =require("./Sort");
const SortList =require("./SortList");

webserver.use("/api/carts",(req,res)=>{   /*通过3000端口号获取数据*/
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.json(Carts)
});
webserver.use("/api/ProductDetail",(req,res)=>{   /*通过3000端口号获取数据*/
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  let id=req.query.id;
  for(var i=0;i<ProductDetail.length;i++){
    if(id===ProductDetail[i].id){
      res.json(ProductDetail[i])
    }
  }
  // res.json(ProductDetail)
});
webserver.use("/api/sort",(req,res)=>{   /*通过3000端口号获取数据*/
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.json(Sort)
});

webserver.use("/api/sortList",(req,res)=>{   /*通过3000端口号获取数据*/
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  let id = req.query.id;
  console.log(id)
  for(var i=0;i<SortList.length;i++){
    if(id===SortList[i].id){
      res.json(SortList[i])
    }
  }
  // res.json(SortList)
});


webserver.listen(3000,()=>{
  console.log("api server is ready on port 3000")
});
