	$('#reg').click(function() {
	    var userData = {
	        uname: $('#exampleInputName').val(),
	        upwd: $('#inputPassword2').val(),
	        umail: $('#exampleInputEmail').val()
	    }
	    $.ajax({
	        type: 'POST',
	        url: '/u/doreg',
	        data: userData,
	        success: function(succ) {
	            if (succ === 'ok') {
	                alert('注册成功！');
	                window.location.href = "/u/active?uname="+$('#exampleInputName').val();
	            } else {
	                alert('注册失败！请查看网络重新注册！'+succ.status);
	            }
	        }
	    })
	});
	$('.glyphicon-remove').click(function(){
		$(this).prev().val('')
	})
	$('#exampleInputName').focus(function() {
		
		$(this).parent().next('.tips').html('用户名仅支持字母、数字和下划线,且不能为纯数字');
		if($('.tips').eq(0).html().length<=15){
			$('.tips').css('lineHeight','30px')
		}else{
			$('.tips').css('lineHeight',1)
		}
	})
	
	$('#exampleInputName').blur(function() {
		if(true){
		    $(this).parent().addClass('has-error');
		    $(this).siblings('.glyphicon-remove').show();

		}else{
		    $(this).parent().addClass('has-success');
		    $(this).siblings('.glyphicon-ok').show();
		}
	})
