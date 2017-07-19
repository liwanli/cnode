// 登录
$('#exampleInputName').blur(function() {
	var u = $('#exampleInputName').val();
	var p = $('#inputPassword1').val();
	if(!u){
	    $(this).parents('.form-group,.col-sm-7').removeClass('has-error has-success').addClass('has-error');
	    $(this).siblings('.glyphicon-remove').show();
	    console.log($(this).parent('.col-sm-7').next().html('用户名不能为空！'))
	    return false;

	}else{
	    $(this).parents('.form-group,.col-sm-7').removeClass('has-error has-success').addClass('has-success');
	    $(this).siblings('.glyphicon-ok').show();
	    $(this).siblings('.glyphicon-remove').hide();
	    console.log('1')
	}
})
$('#login').click(function(){
	var userData ={
		uname:$('#exampleInputName').val(),
		upwd:$('#inputPassword1').val()
	}
	$.ajax({
		type:'POST',
		url:'/u/dologin',
		data:userData,
		success:function(succ){
			if(succ==='ok'){
				alert('登录成功');
				window.location.href="/"
			}else if(succ==='1'){
				alert('用户名不存在！');
			}else if(succ==='2'){
				alert('用户未激活！');	
				window.location.href="/u/active?uname="+$('#exampleInputName').val();
			}else if(succ==='3'){
				alert('密码不正确！');			
			}else{
				alert(succ);
			}
		}
	})
});

