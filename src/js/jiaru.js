onload = function() {

	
    consolog("1");

	var oUl = document.getElementById("neirong");

	var str = getCookie("arr");

	var arr = eval(str);

	for (var i = 0; i < arr.length; i++)
	{

		var oLi = document.createElement("li");

		// 取出数组中元素，arr[i] 是一个对象,
		//    再取出这个对象中的产品名 和 价格
		oLi.innerHTML = arr[i].product + ", " + arr[i].price;

		oUl.appendChild(oLi);
		oUl.innerHTML="skhkjshkjshjkshskjh";
	}

}
