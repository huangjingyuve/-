window.onload=function(){
    function task(){  
        var show=document.querySelector(".show");
        var spotshow=document.querySelector(".spotshow");
        show.className="";
        spotshow.className="";
        if(show.nextElementSibling!==null){   
          show.nextElementSibling.className="show";
          spotshow.nextElementSibling.className="spotshow";
        }else{
        show.parentNode.children[0].className="show";
        spotshow.parentNode.children[0].className="spotshow";
        }
    }

    var timer=setInterval(task,2000);
    
    var slider=document.querySelector("#slider");
    slider.onmouseover=function(){
      clearInterval(timer);
      timer=null;
    }
    slider.onmouseout=function(){
      timer=setInterval(task,1000);
    }
        //回到顶部 
       
    
    }
window.onscroll=function(){
  var toTop=document.querySelector("#toTop");
  var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
  console.log(scrollTop);
  if(scrollTop>500){
    toTop.style.display="block";
  }else{
    toTop.style.display="none";
  }
}