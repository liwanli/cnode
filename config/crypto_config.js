var crypto = require('crypto');

/*
 *定义加载函数 cryptoStr
 *	@param string pwd 要加密的字符
 *	@param string newpwd 加密过的字符
 */

function cryptoStr(pwd){
	var newpwd = crypto.createHash('md5').update(pwd).digest('hex');
	return newpwd;
}


module.exports = cryptoStr;