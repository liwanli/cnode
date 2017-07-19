// 检测登录模块
function isCheck(req,res,next){
	console.log(req.session.userinfo)
	if(!req.session.userinfo){
		res.redirect("/u/login");
		return;
	}
	next();
}

module.exports=isCheck;