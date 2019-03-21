var colors = require('colors');

/**
* @return 
* @param {string} text Logging Text
*/

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
logger.log = function(text){
	logger('[로그] ' + text);
};
logger.info = function(text){
	logger('[정보] '.cyan + text);
};
logger.success = function(text){
	logger('[성공] '.green + text);
};
logger.alert = function(text){
	logger('[알림] '.yellow + text);
};
logger.warn = function(text){
	logger('[경고] '.black.bgYellow + text);
};
logger.error = function(text){
	logger('[오류] '.bgRed + text);
};
logger.chat = function(text){
	logger('[채팅] ' + text);
};
logger.status = function(text){
	logger('[상태] '.blue + text);
};
logger.debug = function(text){
	logger('[디버그] '.gray + text);
};

module.exports = logger