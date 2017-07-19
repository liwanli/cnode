$(function(){

	$('#saveinfo').on('click',function(){
		// var options={
		// 		 url:url, //form提交数据的地址
		// 		 type:type, //form提交的方式(method:post/get)
		// 		 target:target, //服务器返回的响应数据显示在元素(Id)号确定
		// 		 beforeSubmit:function(), //提交前执行的回调函数
		// 		 success:function(), //提交成功后执行的回调函数
		// 		 dataType:null, //服务器返回数据类型
		// 		 clearForm:true, //提交成功后是否清空表单中的字段值
		// 		 restForm:true, //提交成功后是否重置表单中的字段值，即恢复到页面加载时的状态
		// 		 timeout:6000 //设置请求时间，超过该时间后，自动退出请求，单位(毫秒)。
		// 		}
			// {  
   //              url:"/u/settingok",
   //              type : 'POST',
   //              dataType : 'json',  
   //              headers : {"ClientCallMode":"ajax"},
   //              success : function(succ) {  
   //                  alert(succ);  
   //              },  
   //              error: function(err) {  
   //                  alert(err);  
   //              }  
   //           }
            $("#uploadFile").ajaxForm(function(){
            	alert('')
            });  
            return false;
	})

})