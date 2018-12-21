const mysql=require("mysql");
var pool=mysql.createPool({
    host:"47.100.111.201",
    user:"root",//连接mysql用户名
    password:"@Yangjie7",
    database:"goshop",
    port:3306,//mysql的端口号
    connectionLimit:10//连接池10个活动连接一定要有connectionLimit
});
module.exports=pool;