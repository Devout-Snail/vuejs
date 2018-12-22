const mysql=require("mysql");
var pool=mysql.createPool({
    host:"",
    user:"root",//连接mysql用户名
    password:"",
    database:"",
    port:3306,//mysql的端口号
    connectionLimit:10//连接池10个活动连接一定要有connectionLimit
});
module.exports=pool;