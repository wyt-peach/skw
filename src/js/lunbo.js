$(function(){

				var $ul = $('.pic ul');
				var $allLi = $('.pic').find('li');
				var liHeight = $allLi.outerHeight();
				var $img1 = $('.img1');
				var $img2 = $('.img2');
				var img1Left = parseInt($img1.css('left'));
				var img2Left = parseInt($img2.css('left'));
			
				$('.nav li').eq(0).addClass('select');
				$img1.eq(0).animate({left:550});
				$img2.eq(0).css('display','block').animate({left:0});
				var i = 0 ;
				var timer = 0;

				function bannermove(){
				
					var ulTop = -i*liHeight ;
					$ul.css('top',ulTop+'px');
				
					$img1.eq(i).stop().animate({left:550});
					$img1.eq(i-1).css('left',img1Left);
					$img2.eq(i).stop().css('display','block').animate({left:0,});
					$img2.eq(i-1).css({left:img2Left,display:'none'});
					
					$('.nav li').removeClass('select');
					$('.nav li').eq(i).addClass('select');
					i++ ;
					
					if (i>$allLi.length) {
						i=1;
						$('.nav li').eq(0).addClass('select');
						$ul.css('top','0');
					
						$img1.eq(0).animate({left:550});
						$img2.eq(0).css('display','block').animate({left:0});
					};
				}
				$('.nav').on('click','li',function(){
					
					 clearInterval(timer);
					 var index = $(this).index();
					 $allLi.eq(index).siblings('li').find('.img1').css('left',img1Left);
					 $allLi.eq(index).siblings('li').find('.img2').css({left:img2Left,display:'none'});
					 i = index  ;
					 bannermove();
					
				});
				
				timer = setInterval(bannermove,2000);

				$ul.on('mouseover','li',function(){
					clearInterval(timer);
				});
				$ul.on('mouseout','li',function(){
					timer =	setInterval(bannermove,2000);
				});


			});