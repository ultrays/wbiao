const express=require("express");
const app=new express();

const Index=require("./index");
const Sort =require("./Sort");
const ProductList =require("./ProductList");
const ProductDetail=require("./ProductDetail");
const Info=require("./Info");
const InfoList=require("./InfoList");
const InfoDetail=require("./InfoDetail");
const Carts=require("./carts");

var fs = require('fs');//文件读写
var bodyParser = require('body-parser');//中间件获取req.body
var crud=require("./crud");

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded

app.all('*', function (req, res, next) {
  if (req.path !== "/" && !req.path.includes(".")) {
    res.header('"Access-Control-Allow-Credentials", true');
    res.header("Access-Control-Allow-Origin", req.headers["origin"] || "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
  }
  next();
});

app.use("/api/index",(req,res)=>{
  res.json(Index);
});

app.use("/api/sort",(req,res)=>{
  res.json(Sort);
});

app.use("/api/productlist",(req,res)=>{
  let id = req.query.id;
  let ProductList= JSON.parse(fs.readFileSync("./ProductList.json").toString());
  for(var i=0;i<ProductList.length;i++){
    if(id===ProductList[i].id){
      res.json(ProductList[i])
    }
  }
});

app.use("/api/productdetail",(req,res)=>{
  let id=req.query.id;
  for(var i=0;i<ProductDetail.length;i++){
    if(id===ProductDetail[i].id){
      res.json(ProductDetail[i])
    }
  }
});

app.use("/api/info",(req,res)=>{
  res.json(Info);
});

app.use("/api/infolist",(req,res)=>{
  res.json(InfoList);
});

app.use("/api/infodetail",(req,res)=>{
  res.json(InfoDetail);
});

app.use("/api/carts",(req,res)=>{
  res.json(Carts);
});

app.listen(3000,()=>{
  console.log("api-server is ready on port 3000")
})

/*******后台管理增删改查CRUD******/
//查询
app.get("/api/crud/productlist/Retrieve",(req,res)=>{
  console.log("haha")
  let temp = crud.retrieveJson(req.query.watchName,0,100);
  res.json(temp);
});
//删除
app.get("/api/crud/productlist/delete",(req,res)=>{
  console.log(req.query.id)
  let temp = crud.deleteJson(req.query.id);
  res.json(temp);
});
//新增
app.post("/api/crud/productlist/create",(req,res)=>{
  console.log("新增",req.body);
  let temp=crud.createJson(req.body);
  res.json(temp);
});
//更新
app.post("/api/crud/productlist/update",(req,res)=>{
  console.log("更新",req.body);
  let temp = crud.updateJson(req.body.id,req.body);
  res.json(temp);
});
