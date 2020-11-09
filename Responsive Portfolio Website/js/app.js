
var counter=1;var start=1;var end=10;
var span1=document.getElementById('counter1');
var span2=document.getElementById('counter2');
var span3=document.getElementById('counter3');
var span4=document.getElementById('counter4');
function counterSet(counter,end,htmlelement){
      setTimeout(()=>{
        if(counter!=end){
          //console.log("starting => "+counter);
          counter++;
          htmlelement.textContent=counter;
          counterSet(counter,end,htmlelement); 
        }else{
          //console.log("end => "+end);
        }
      },1)
}
//always refresh on top
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
} 
// navigation animation on sticky scroll
  window.addEventListener("scroll",function(){
      var nav=document.querySelector("#nav-container");
      nav.classList.toggle("sticky",window.scrollY>0);
    })
//load hero animation 
window.addEventListener("load",function(){
  //windiw.location.assign("file:///D:/ptsquad/index.html");
  //window.scrollTop(0);
	var hero = document.getElementById("hero");
  hero.classList += " heroanime";
  hero.style.opacity=1;
  hero.style.marginTop="250px";
  var aboutus=document.getElementById('aboutus');
  var aboutContent=document.getElementById('about-content');
  var aboutSubcontent=document.getElementsByClassName('about-subcontent');
  
  aboutus.style.opacity=1;
  aboutContent.style.transform="translateY(0px)";
  aboutSubcontent[0].style.transform="translateY(0px)";
  aboutSubcontent[1].style.transform="translateY(0px)";

  var serviceBox=document.getElementsByClassName('service');
  for(var i =0; i<serviceBox.length;i++){
    serviceBox[i].style.opacity=1;
    console.log("haha :"+i);
    serviceBox[i].style.transform="translateY(0px)";
  }
  var action= document.getElementsByClassName('action');
  counterSet(1,232,span1);
  counterSet(1,521,span2);
  counterSet(1,1463,span3);
  counterSet(1,15,span4);

  var cta = document.getElementsByClassName("cta")[0];
  cta.style.opacity=1;

  var port = document.getElementById('port');
  var testimonial = document.getElementById('testimonial');
  var team = document.getElementById('team');
  var contact = document.getElementById('contact');
  var footer = document.getElementById('footer');
  port.style.opacity=1; 
  testimonial.style.opacity=1; 
  team.style.opacity=1; 
  contact.style.opacity=1; 
  footer.style.opacity=1; 

})

// navigation menu activator
var nav = document.getElementById("main-navi");
var nav_item = nav.getElementsByTagName("li");
var nav_link=nav.getElementsByTagName("a");
console.log(nav_item);
 activation();
 function activation(num=0){
 	for(var i=0;i<nav_item.length;i++){
		nav_item[i].className = nav_item[i].className.replace(" active", "");
	}
 	nav_item[num].classList += " active";
 }
//horizontal scroll bar locker
  function scrollChoker(){
  	var sublink=document.getElementById("dropdown");
    console.log(sublink.classList);
    if(sublink.classList.length===1){
    	console.log('notshow');
    	document.documentElement.style.overflow="hidden";
    	document.body.scrollTo(0,0);
    	document.body.scroll="no";

    }else{
    	console.log('show');
    	document.documentElement.style.overflow="scroll";
    	document.body.scroll="yes";
    }
		 
    }

  var lock = 1;
  function locker(){
      if(lock==1){
      console.log(lock);
      document.documentElement.style.overflow="hidden";
      document.body.scroll="no";
      lock=0;
    }else{
       console.log(lock);
      document.documentElement.style.overflow="scroll";
      document.body.scroll="yes";
      lock=1;
    }
  }


// ------------------putoo-----------------  //

var select=document.getElementsByClassName('portfolio-product');
function select_image(num){
    document.getElementsByClassName('portfolio-product')[num].addEventListener('mouseover',function(){
        select[num].style.opacity="0.5";
    });
    document.getElementsByClassName('portfolio-product')[num].addEventListener('mouseout',function(){
        select[num].style.opacity="1";
    });
}
for(var i=0; i<select.length; i++){
    select_image(i);
}
//////////////////////////////////////
