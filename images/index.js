window.onload=function()
{
  var time=document.getElementById("timer");  
  
    div = time.querySelectorAll("div")[0];
    setTimeout(function(){
    div.style.visibility="visible";},0);  
   
    //定时器累加
    function play(i){
      if(i<=429){
        moveImg(i);
        setTimeout(function(){play(i+1)}, 0);
      }
    }
 
    function moveImg(i){
      div1 = time.querySelectorAll("div")[1]; 
      div1.innerText=i;
    }
    play(300);

    function playk(j){
      if(j<=957){
        moveImg1(j);
        setTimeout(function(){playk(j+1)}, 10);
      }
    }
    function moveImg1(j){
      div2 = time.querySelectorAll("div")[2]; 
      div2.innerText=j;
    }
    playk(700);
    

    //four 定时转换
    for(let n=0;n<8;n++)
    {
      console.log(n)
     setInterval(function(){
       task(n);
     },(Math.random()+2)*3000);
    }
    function task(i)
    {
       if(i<8)
       {
        var one=document.getElementsByClassName("face-first")[i];
        var two=document.getElementsByClassName("face-second")[i];
        console.log(one)

        if(getComputedStyle(one,null).display=="block")
        {
          one.style.display="none";  
          two.style.display="block";   
        }
        else if(getComputedStyle(one,null).display=="none")
        {
          console.log(11111)
          one.style.display="block"; 
          two.style.display="none"; 
        }
       }     
    }
}

// window.onscroll=function(){
//   var  scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
//   var nav=document.getElementById("nav");
//   console.log(scrollTop);
//   if(scrollTop>700)
//   {
//   nav.style.position="fixed";
//   nav.style.background="rgba(0,0,0,0)";
// } 

// }


 
