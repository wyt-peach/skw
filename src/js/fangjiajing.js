   $(function(){
           

           $('.datu').lxzoom({
				width:300,
				height:300
			});

            $('.header li').click(function(){
              
                var idx = $(this).index();
                 if(idx==0){
                	
                	 $(".datu img").attr("src","../img/xiangqing/k2.jpg");
                	 
                }
                if(idx==1){

                	 $(".datu img").attr("src","../img/xiangqing/k4.jpg");
                	 
                }
                    if(idx==2){
                	
                	 $(".datu img").attr("src","../img/xiangqing/k3.jpg");
                	 

                }
                 if(idx==3){
                	
                	 $(".datu img").attr("src","../img/xiangqing/k1.jpg");
                	 
                }

                
            });


        });
