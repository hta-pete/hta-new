function slideStuff(slider){

    var $slider   = slider.querySelector(".slider");
    var $track    = slider.querySelector(".track");
    var $slides   = slider.querySelectorAll(".slide");
    var $dots     = slider.querySelectorAll(".dot");
      
    var index = 0;
    var $activeSlide;
    var $video;
    var $slidePos;
    var $copy      
    var $activeCopy
        
    function sizeStuff(){

        var $slide_width = $slider.offsetWidth;
        var $track_width = $slides.length * $slide_width;

        $track.style.width = $track_width + "px";

        for (i = 0; i < $slides.length; ++i) {
          $slides[i].style.width = $slide_width + "px";
        }
        $track.style.transform = "translateX("+ -$slide_width*index +"px)";

    }
    function goToSlide(){

        var $slide_width = $slider.offsetWidth;
        index            = Array.prototype.slice.call(this.parentElement.children).indexOf(this);

        for (i = 0; i < $dots.length; ++i) {
          $dots[i].classList.remove("dot-active");
        } 
        this.classList.add("dot-active");

        $track.style.transform = "translateX("+ -$slide_width*index +"px)";

        activeSlide($slides[index]);
        activeVideo();
        clearInterval(slideTimer);
        slideTimer = setInterval(autoSlide, 8000);   
        
    }

    function autoSlide(){
        

            $activeSlide     = $slider.querySelector(".slide-active");
            var $slide_width = $slider.offsetWidth;
            index            = Array.prototype.slice.call($track.children).indexOf($activeSlide.nextElementSibling);

            if( index < 0 ){

                $track.style.transform = "translateX("+ -$slide_width*0 +"px)";
                activeSlide($slides[0]);

            } else{

                $track.style.transform = "translateX("+ -$slide_width*index +"px)";
                activeSlide($slides[index]);

            }

            activeVideo();

            
            for (i = 0; i < $dots.length; ++i) {
              $dots[i].classList.remove("dot-active");
              if( index < 0 ){

                $dots[0].classList.add("dot-active");  

              } else{

                $dots[index].classList.add("dot-active");  

              }
            } 
            
    }

    var slideTimer = setInterval(autoSlide, 8000);

    function activeSlide(elem){

        for (i = 0; i < $slides.length; ++i) {
            $slides[i].classList.remove("slide-active");
        }
        elem.classList.add("slide-active");

    }

    function activeVideo(){

        $activeSlide = $slider.querySelector(".slide-active");
        $video = $track.getElementsByTagName("video");
        $active_video = $activeSlide.getElementsByTagName("video");

        if( $video.length ){
            for (i = 0; i < $video.length; ++i) {
                $video[i].pause();
            } 
        } 
        if( $active_video.length ){
            $active_video[0].play();
        } 

    }

    sizeStuff();

    window.addEventListener('load', sizeStuff);
    window.addEventListener('resize', sizeStuff);

    for (i = 0; i < $dots.length; ++i) {
      $dots[i].addEventListener("click", goToSlide, false);
    }
   

}