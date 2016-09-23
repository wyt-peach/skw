onload = function() {



    // 登录按钮
    var btnLogin = document.getElementById("btnLogin");
    
    // 7天免登陆前面的那个 checkbox
    var oCheck = document.getElementById("savePwd");

    var oUsername = document.getElementById("username");
    var oPassword = document.getElementById("password");

    
    var str = document.cookie;

    var obj = {};
    
    var arr = str.split("; ");
    for (var i = 0; i < arr.length; i++)
    {
        var arr2 = arr[i].split("=");

        var name = arr2[0];
        var val = arr2[1];

        // 在obj对象中添加了一个属性为 name 变量的值，然后这个属性的值是 val
        obj[name] = val;

      
    }

    if (obj.username )
    {
        oUsername.value = obj.username;
        
        
        
    }

   

    btnLogin.onclick = function() {

        if(oUsername.value&&oPassword.value){

             if (oCheck.checked){
                var strUsername = oUsername.value;

                var oDate = new Date();

                oDate.setDate(oDate.getDate() + 7);

                document.cookie = "username="+strUsername+";expires=" + oDate;

               
            }
        }

        else{
            alert("请输入用户名和密码");}
           
    }
        





}
