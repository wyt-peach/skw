

onload = function() {
	var str = getCookie("arr");


	var arr = [];
	if (str != "")
	{
	
		arr = eval(str);
	}


	var gwc= document.getElementById("gwc");


	gwc.onclick = function() {

			//路径
			var oImg = document.getElementById('picsrc');
			// 这个是价格
			var oPrice =  document.getElementById("jiage");

			// 这个商品的信息
			var oProduct = document.getElementById('xingxi');
			
		
		

			var obj = {};

			obj.img = oImg.src;
			obj.price = oPrice.innerHTML;
			obj.product = oProduct.innerHTML;

			arr.push(obj);

	
			addCookie("arr", arr.toSource(), 7);

			alert("添加成功");
		}
	
}

	
