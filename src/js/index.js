$(function(){

		  $(".ser").mouseover(function(){

		  	
		    $(".kf").slideDown();

		  });

		   $(".kf").mouseover(function(){
		    
		   $(".ser").addClass("chang");
		  	
		    $(".kf").show();

		  });
		 
		     $(".kf").mouseout(function(){

		  	   $(".ser").removeClass("chang");
		    $(".kf").hide();

		  });




			 // $(".m1r-b").find("img").mouseover(function(){

			 //  	 $(".m1r-b").find("img").animate({opacity:0.5},function(){

			 //         $(".m1r-b").find("img").animate({opacity:1});

			 //  	 });
			 //  });


			 var imgs=$(".m1r-b");
			 imgs.on('mouseover','img',function(){
			 	$(this).fadeTo("slow",0.7,function(){
			 		$(this).fadeTo('slow',1);
			 	});
			 });


			  var imgs2=$(".middle5");
			 imgs2.on('mouseover','img',function(){
			 	$(this).fadeTo("slow",0.7,function(){
			 		$(this).fadeTo('slow',1);
			 	});
			 });

			  var imgs3=$(".m2-l");
			 imgs3.on('mouseover','img',function(){
			 	$(this).fadeTo("slow",0.7,function(){
			 		$(this).fadeTo('slow',1);
			 	});
			 });
			   var imgs4=$(".m4left");
			 imgs4.on('mouseover','img',function(){
			 	$(this).fadeTo("slow",0.7,function(){
			 		$(this).fadeTo('slow',1);
			 	});
			 });
    









    		
				var $nav = $('#nav');
				var $floor = $('.middle5');

				$(window).on('scroll',function(){
					
					var scrollTop = $(window).scrollTop();

					if(scrollTop > 1900){
						$nav.fadeIn();
					}else{
						$nav.fadeOut();
					}

			
					$floor.each(function(idx,ele){
						
						if($(ele).offset().top - scrollTop < $(window).height()/5){
							$nav.find('li').eq(idx).addClass('hover').siblings('li').removeClass('hover');
						
						}
						
					})
				});

				$nav.on('click','li',function(){
					if($(this).hasClass('last'))
					{
						scrollTop = 0;
					}else{
						var index = $(this).index();
						 

						var scrollTop = $floor.eq(index).offset().top - 
						$(window).height()/5*3;

					
					}
					$('html,body').animate({scrollTop:scrollTop});
				});
 
 

});