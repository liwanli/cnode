var nodemailer = require('nodemailer');
// 定义传输协议：
function setmail(userName,userEmail,userId){
	var transport = nodemailer.createTransport({
		host:"smtp.qq.com",
		auth:{
			user:"970603897@qq.com",
			pass:"juhayqcszbbqbfcb"
		}
	})
	// 定义传输内容
	var mailoptions = {
		from:'cnode<970603897@qq.com',
		to:userEmail,
		subject:'Cnode邮箱验证',
		html:'欢迎'+userName+'注册Cnode'+'<a href="http://localhost/u/chmodok/'+userId+'?uname='+userName+'">点击跳转</a>'
	};
	transport.sendMail(mailoptions,function(err,data){
		if(err){
			console.log(err);
		}else{
			console.log(data);
		}
	});
}
module.exports = setmail;

