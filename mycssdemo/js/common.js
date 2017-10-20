



var fAjax = function(url, oData, callback) {
	$.ajax({
		url:url,
		type:"post",
		contentType: "application/json; charset=utf-8;",		
		data: JSON.stringify(oData),
		success: function(rData) {
			var sStatus = rData.status;
			var realData = rData.data;
			if (sStatus == true || sStatus == 'ok') {
				callback && callback(rData);
			} else {
				callback && callback(-1);
			}			
		},
		error: function(err) {
			console.info('error :', err);
			callback && callback(-1);
		}
	});
}