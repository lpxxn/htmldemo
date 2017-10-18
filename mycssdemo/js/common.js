



var fAjax = function(url, oData, callback) {
	$.ajax({
		url:url,
		type:"post",
		data:oData,
		success: function(sData) {
			var rdata = JSON.parse(sData);
			var error = rData.error;
			var sState = rData.state;
			var realData = rData.data;
			if (sState == 'true' || sState == 'ok') {
				callback && callback(realData);
			} else {
				callback && callback(error);
			}			
		},
		error: function(err) {
			console.info('error :', err);
			callback && callback(-1);
		}
	});
}