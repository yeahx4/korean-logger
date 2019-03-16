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
module.exports.log = function(text){
	logger('[로그] ' + text);
};
module.exports.info = function(text){
	logger('[정보] '.cyan + text);
};
module.exports.success = function(text){
	logger('[성공] '.green + text);
};
module.exports.alert = function(text){
	logger('[알림] '.yellow + text);
};
module.exports.warn = function(text){
	logger('[경고] '.black.bgYellow + text);
};
module.exports.error = function(text){
	logger('[에러] '.bgRed + text);
};