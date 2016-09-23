
$(function () {
    var $plist=$("#plist");
    var str = getCookie("arr");
      if (str != ""){

         var arr = eval(str);
         $("#neirong").remove();
          var $box=$("<div/>");
          for (var i = 0; i < arr.length; i++)
         {
             
              var $pro = $('<div/>');
              var $pic=$("<div/>");
              var $img=$("<img/>");
              var $p1=$("<p/>");
              var $p2=$("<p/>");
              var $a=$("<a/>");
              
                $img.attr("src",arr[i].img).attr({
                  "width":200
                }).appendTo($pic);
                $pic.addClass("pic").appendTo($pro);
                $pro.addClass("pro");
                $a.html(arr[i].product).appendTo($p1);
                $p1.appendTo($pro);
                $p2.html(arr[i].price+" 元").appendTo($pro);
                $pro.appendTo($box);

                $plist.append($box);
           }
   
    }
 

  
});