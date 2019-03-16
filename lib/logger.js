module.exports = logger

/**
* @return 
* @param {string} text Logging Text
*/
var colors = require('colors');

function logger(text){
	var date = new Date();
	var o = {
		year: 1900 + date.getYear(),
		month: date.getMonth() + 1,
		date: date.getDate(),
		hour: date.getHours(),
		minute: date.getMinutes(),
		second: date.getSeconds()
	}, i;
	
	for(i in o){
		if(o[i] < 10) o[i] = "0"+o[i];
		else o[i] = o[i].toString();
	}
	console.log("["+o.year+"-"+o.month+"-"+o.date+" "+o.hour+":"+o.minute+":"+o.second+"] "+text);
}
exports.log = function(text){
	logger('[로그] ' + text);
};
exports.info = function(text){
	logger('[정보] '.cyan + text);
};
exports.success = function(text){
	logger('[성공] '.green + text);
};
exports.alert = function(text){
	logger('[알림] '.yellow + text);
};
exports.warn = function(text){
	logger('[경고] '.black.bgYellow + text);
};
exports.error = function(text){
	logger('[에러] '.bgRed + text);
};