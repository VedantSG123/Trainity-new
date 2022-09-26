$(window).on('load', function(){
    initSmoothScrolling('.testimonial-components','smoothscroll');
    logoSmoothScrolling('.logo-components', 'logoScroll');
    $("a.program-btn").click(function(event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top
          }, 100);
      });
  });
  
  function initSmoothScrolling(container,animation){
  
      var sliderWidth = 0;	
      var animationWidth = 0;	
      
  
      $('>div>div', container).each(function(){				
          animationWidth += $(this).outerWidth(true);		
      });
      
     
      var slidesVisible = $(container).width() / $('>div>div:first-of-type',container).outerWidth(true);	
      slidesVisible = Math.ceil(slidesVisible);
      
  
   
      var slidesNumber = $('>div>div', container).length;
      
      var speed = 40;
      
      
      
  
      $('>div>div',container).slice(0,slidesVisible).clone().appendTo($('>div',container));	
  
      
      $('>div>div', container).each(function(){
          sliderWidth += $(this).outerWidth(true);
      });
  
     
      $('>div',container).css({'width':sliderWidth});
     
    
  // Insert styles to html
    //   $("<style>@keyframes "+animation+" { 0% { margin-left: 0px; } 100% { margin-left: -"+animationWidth+"px; } } "+$('>div>div:first-of-type',container).selector+" { -webkit-animation: "+animation+" "+speed+"s linear infinite; -moz-animation: "+animation+" "+speed+"s linear infinite; -ms-animation: "+animation+" "+speed+"s linear infinite; -o-animation: "+animation+" "+speed+"s linear infinite; animation: "+animation+" "+speed+"s linear infinite; }</style>").appendTo("head");	
      $("head").append("<style>@keyframes "+animation+" { 0% { margin-left: 0px; } 100% { margin-left: -"+animationWidth+"px; } } "+$('>div>div:first-of-type',container).selector+" { -webkit-animation: "+animation+" "+speed+"s linear infinite; -moz-animation: "+animation+" "+speed+"s linear infinite; -ms-animation: "+animation+" "+speed+"s linear infinite; -o-animation: "+animation+" "+speed+"s linear infinite; animation: "+animation+" "+speed+"s linear infinite; }</style>");
      // restart the animation (e.g. for safari & ie)	
      var cl = $(container).attr("class");
      $(container).removeClass(cl).animate({'nothing':null}, 1, function () {
          $(this).addClass(cl);
      });
  }

  function logoSmoothScrolling(container,animation){
  
    var sliderWidth = 0;	
    var animationWidth = 0;	
    

    $('>div>div', container).each(function(){				
        animationWidth += $(this).outerWidth(true);		
    });
    
   
    var slidesVisible = $(container).width() /$('>div>div:first-of-type',container).outerWidth(true);	
    slidesVisible = Math.ceil(slidesVisible);
    console.log(slidesVisible);

 
    var slidesNumber = $('>div>div', container).length;
    
    var speed = 40;
    
    
    

    $('>div>div',container).slice(0,slidesVisible).clone().appendTo($('>div',container));	

    
    $('>div>div', container).each(function(){
        sliderWidth += $(this).outerWidth(true);
    });

   
    $('>div',container).css({'width':sliderWidth});
   
  
// Insert styles to html
  //   $("<style>@keyframes "+animation+" { 0% { margin-left: 0px; } 100% { margin-left: -"+animationWidth+"px; } } "+$('>div>div:first-of-type',container).selector+" { -webkit-animation: "+animation+" "+speed+"s linear infinite; -moz-animation: "+animation+" "+speed+"s linear infinite; -ms-animation: "+animation+" "+speed+"s linear infinite; -o-animation: "+animation+" "+speed+"s linear infinite; animation: "+animation+" "+speed+"s linear infinite; }</style>").appendTo("head");	
    $("head").append("<style>@keyframes "+animation+" { 0% { margin-left: 0px; } 100% { margin-left: -"+animationWidth+"px; } } "+$('>div>div:first-of-type',container).selector+" { -webkit-animation: "+animation+" "+speed+"s linear infinite; -moz-animation: "+animation+" "+speed+"s linear infinite; -ms-animation: "+animation+" "+speed+"s linear infinite; -o-animation: "+animation+" "+speed+"s linear infinite; animation: "+animation+" "+speed+"s linear infinite; }</style>");
    // restart the animation (e.g. for safari & ie)	
    var cl = $(container).attr("class");
    $(container).removeClass(cl).animate({'nothing':null}, 1, function () {
        $(this).addClass(cl);
    });
}

var clicked = false;
function changeClicked(){
    $(".menu-icon").click(function(){
        clicked = !click;
    });
}
document.querySelector(".main-wrapper").addEventListener("touchmove", function(e){
    if(clicked === true){
        e.preventDefault();
        $(".menu-icon").click();
    }
});


