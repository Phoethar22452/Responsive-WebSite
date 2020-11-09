var parameter=0;
testslider();
function testslider(){
  var slides = document.getElementsByClassName("test");
  for(var i=0;i<slides.length;i++){
       slides[i].style.display="none";
       slides[i].style.order=0;
  }
  var btn = document.getElementsByClassName("buttonshow");
  for(var i=0;i<slides.length;i++){
       btn[i].className=btn[i].className.replace(" active","");
  }
  
  if(parameter==0){

      slides[parameter].style.order=1;
      slides[parameter+1].style.order=2;
      slides[parameter+2].style.order=3;

      slides[parameter].style.display="block";
      slides[parameter+1].style.display="block";
      slides[parameter+2].style.display="block";
      btn[parameter].classList += " active";
  }
  else if(parameter==1){
    slides[parameter].style.order=1;
      slides[parameter+1].style.order=2;
      slides[parameter+2].style.order=3;

      slides[parameter].style.display="block";
      slides[parameter+1].style.display="block";
      slides[parameter+2].style.display="block";
      btn[parameter].classList += " active";

  }
  else if(parameter==2){
    slides[parameter].style.order=1;
      slides[parameter+1].style.order=2;
      slides[parameter+2].style.order=3;

      slides[parameter].style.display="block";
      slides[parameter+1].style.display="block";
      slides[parameter+2].style.display="block";
      btn[parameter].classList += " active";
  }
  else if(parameter==3){
      slides[parameter].style.order=1;
      slides[parameter+1].style.order=2;
      slides[parameter-parameter].style.order=3;

      slides[parameter].style.display="block";
      slides[parameter+1].style.display="block";
      slides[parameter-parameter].style.display="block";
      btn[parameter].classList += " active";
  }
  else if(parameter==4){
      slides[parameter].style.order=1;
      slides[parameter-parameter].style.order=2;
      slides[parameter-parameter+1].style.order=3;

      slides[parameter].style.display="block";
      slides[parameter-parameter].style.display="block";
      slides[parameter-parameter+1].style.display="block";
      btn[parameter].classList += " active";
      parameter=-1;
  }
  parameter++;
  setTimeout(testslider,2000);
}


