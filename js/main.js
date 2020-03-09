var homeHero      = document.getElementById("home-hero"),
    menuBtn       = document.querySelector(".menu-btn"),
    htaMenu       = document.getElementById("hta-menu"),
    menu          = htaMenu.querySelector(".hta-nav"),
    main          = document.querySelector("main"),
    scroll_cue    = document.querySelector(".scroll-cue"),
    section       = document.getElementsByClassName("section"),
    section_label = document.getElementsByClassName("section-label"),
    logo          = document.querySelector(".hta-logo");
 

function scrollStuff(){

	if( main.scrollTop > 0 ){
		scroll_cue.classList.add("active");
	} else{
		scroll_cue.classList.remove("active");
	}
	for (var i = 0; i < section_label.length; i++) {
		if ( section_label[i].offsetTop - main.scrollTop == 0 ){
			section_label[i].classList.add("active");
		} else {
			section_label[i].classList.remove("active");
		}
	}
	checkLogo();

}

function checkLogo(){

	for (var i = 0; i < section.length; i++) {
		if ( section[i].offsetTop - main.scrollTop <= 30 && section[i].classList.contains("bg-light") ){
			logo.classList.add("dark");
		} else if( section[i].offsetTop - main.scrollTop <= 30 && section[i].classList.contains("bg-dark") ){
			logo.classList.remove("dark");
		}
	}

}

function toggleMenu(){

	htaMenu.classList.toggle("open");
	menu.classList.toggle("active");
	this.classList.toggle("active");

}


slideStuff(homeHero);

menuBtn.addEventListener("click", toggleMenu); 
main.addEventListener("scroll", _.throttle(scrollStuff, 200));


var elem = document.querySelector('.about-gallery');
var slides = elem.querySelectorAll(".about-gallery-slider_slide");
var elements = elem.querySelectorAll(".draggable-img");


var flkty = new Flickity( elem, {
  
  freeScroll: true,
	contain: true,
  resize: false,
	prevNextButtons: false,
	pageDots: false

});


window.addEventListener("resize", function(){
  flkty.resize();
});

oldx = 0;

flkty.on( 'dragStart', function( event, pointer ) {

	oldx = event.pageX;

});

flkty.on( 'dragMove', function( event, pointer ) {

    if (event.pageX < oldx) {

        //left
        for (var i = 0; i < elements.length; i++) {
        	elements[i].style.transform = "rotateY(" + -(event.pageX - oldx)*0.025 + "deg)";
		    }
  
    } else if (event.pageX > oldx) {

      //right
      for (var i = 0; i < elements.length; i++) {
      	elements[i].style.transform = "rotateY(" + -(event.pageX - oldx)*0.025 + "deg)";
	    }

    }

});

flkty.on( 'dragEnd', function( event, pointer ) {
  
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.transform = "rotateY(0deg)";
	}

});










