function my$(id){
    return document.getElementById(id);
};
my$("pwd").onclick=function(){
    
    $("#pwd").css("color","red");
    $("#pwd").css('border-bottom','2px solid #e74b3b');
    $("#note").css('color','#000');
    $("#note").css('border-bottom','2px solid #fff');
    $("#cyp").css('display','block');
    $("#cod").css('display','none');
};
my$("note").onclick=function(){
    $("#note").css("color","red");
    $("#note").css('border-bottom','2px solid #e74b3b');
    $("#pwd").css('color','#000');
    $("#pwd").css('border-bottom','2px solid #fff');
    $("#cod").css('display','block');
    $("#cyp").css('display','none');
};
my$("post1").onclick=function(){
    if(this.value=="没有账号？ 注册"){
        
        document.getElementsByClassName("register")[0].style.display="none";
        document.getElementsByClassName("post")[0].style.display="block";
        this.value="已有账号？ 登录";

     
    }else{
        document.getElementsByClassName("post")[0].style.display="none";
        document.getElementsByClassName("register")[0].style.display="block";
        this.value="没有账号？ 注册";
    }
};