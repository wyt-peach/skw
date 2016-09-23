    window.onload=function(){

      
   
      var mz=document.getElementById("mz");
      var mm=document.getElementById("mm");
      var qr=document.getElementById("qr");
      var mzsp=document.getElementById("mzsp");
      var mmsp=document.getElementById("mmsp");
      var qrsp=document.getElementById("qrsp");
      var reg1=/^1[3-8]\d{9}$/;
      var reg2=/^\w{6,16}$/;
      // var reg2=/^1[3-8]+\d{9}$/;
    

      var flag1=false;
      var flag2=false;
      var flag3=false;

      mz.onblur=function(){
          
            var str1=mz.value;
          
           if(reg1.test(str1)==false){
                 
               mzsp.innerHTML="请输入正确的手机号";
                 
           }
           else{
              mzsp.innerHTML=" ";
              flag1=true;
           }
          

      }
        mm.onblur=function(){
          
            var str2=mm.value;
        
           if(reg2.test(str2)==false){
                 
               mmsp.innerHTML="请输入(6~16)字符";
                 
           }
           else{
              mmsp.innerHTML=" ";
               flag2=true;
           }
          

      }
      qr.onblur=function(){

        var str3=qr.value;
         var str2=mm.value;
     

        if(str3!==str2){
           qrsp.innerHTML="密码不一致";
        }
        else{
           qrsp.innerHTML="";
            flag3=true;
        }
      }





  setInterval(function(){

         var check=document.getElementById("check");
         
           if(check.checked){
            $(".ff").show();
           }
           if(check.checked==false){
            $(".ff").hide();
           }
  },100);





      var f5=document.getElementById("bnt");


       f5.onclick=function(){
           console.log("1");
       

           if(flag1&&flag2&&flag3){

             alert("恭喜你注册成功");

            }
            else{
            alert("请完善信息");

            }

       }
       

 
      
 };