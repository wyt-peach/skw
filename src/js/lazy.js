
	
$(function(){
	var $datalist = $('.md2');

	var pageNum=10;
	// 全局配置
	$.ajaxSetup({
		url:'http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=10&offset=20',
		
		dataType:'jsonp',
		success:function(res){
			console.log(res);
			
			
			$.each(res.song_list,function(idx,item){
				var $pro = $('<div/>');
				var $pic=$("<div/>");
				var $img=$("<img/>");
				var $p1=$("<p/>");
				var $p2=$("<p/>");
				var $a=$("<a/>");
				
					$img.attr("src",item.pic_big).attr({
						"width":200
					}).appendTo($pic);
					$pic.addClass("pic").appendTo($pro);
					$pro.addClass("pro");
					$a.html(item.artist_name).appendTo($p1);
					$p1.appendTo($pro);
					$p2.html(item.all_artist_ting_uid).appendTo($pro);

				$datalist.append($pro);
			});

			
		}
	});

	$.ajax();

	$(window).on('scroll',function(){
		var scrollTop = $(window).scrollTop();
		console.log("1");
		if(scrollTop >= $(document).height() - $(window).height() - 400){
			pageNum+=5;
			console.log(pageNum);
			$.ajax({
				url:'http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=5&offset='+pageNum+'',
			});		
			if (scrollTop>=3000) {
				$(window).off();
			}
		}

	});

	// 手动触发滚动事件
	$(window).trigger('scroll');
});
