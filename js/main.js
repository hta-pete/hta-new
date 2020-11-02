var homeHero      = document.getElementById("home-hero"),
    header        = document.getElementById("header"),
    nav           = document.getElementById("nav"),
    nav_link      = nav.querySelectorAll('.section-link');
    menuBtn       = document.querySelector(".menu-btn"),
    htaMenu       = document.getElementById("hta-menu"),
    htaMenuClose  = document.querySelector(".hta-menu_close-btn"),
    menu          = htaMenu.querySelector(".hta-nav"),
    main          = document.querySelector("main"),
    scroll_cue    = document.querySelector(".scroll-cue"),
    section       = document.getElementsByClassName("section"),
    service       = document.querySelectorAll('.featured-service');

var lastScrollTop = 0;

function scrollStuff(){

  if( window.scrollY > 0 ){
    scroll_cue.classList.add("active");
    flkty.pausePlayer()
  } else{
    scroll_cue.classList.remove("active");
    flkty.unpausePlayer()
  }

  checkSectionOffset();

}


function checkSectionOffset(){
  for (var i = 0; i < section.length; i++) {
    if ( section[i].offsetTop - window.scrollY <= 80 ){
      activeLinks(nav_link[i]);
    } else if ( section[i].offsetTop - window.scrollY > 80 ) {
      nav_link[i].classList.remove("active");
    }
  }
}

function toggleMenu(){

  htaMenu.classList.toggle("open");
  menu.classList.toggle("active");
  this.classList.toggle("active");
  header.classList.toggle("hide");

  checkSectionOffset();

}

menuBtn.addEventListener("click", toggleMenu);
htaMenuClose.addEventListener("click", toggleMenu);  
window.addEventListener("scroll", _.throttle(scrollStuff, 200));

var elem = document.querySelector('.hero-slider');
var slides = elem.querySelectorAll(".hero-slide");

var flkty = new Flickity( elem, {
  
  fade: true,
  autoPlay: 2500,
  pauseAutoPlayOnHover: false,
  draggable: false,
  prevNextButtons: false,
  pageDots: false

});

var elem2 = document.querySelector('.work-slider');
var slides2 = elem.querySelectorAll(".work-slide");

var flkty2 = new Flickity( elem2, {
  
  fade: true,
  autoPlay: 2500,
  pauseAutoPlayOnHover: false,
  draggable: false,
  prevNextButtons: false,
  pageDots: false

});

window.addEventListener("load", function(){

  checkSectionOffset();

});

window.addEventListener("resize", function(){

  flkty.resize();
  flkty2.resize();
  checkSectionOffset();

});

// Navigation Links

for (var i = 0; i < nav_link.length; i++) {
  nav_link[i].addEventListener("click", function(e){
    e.preventDefault();
    activeLinks(this);
    if( index(this) !== 5 ){
      window.scrollTo({ top: section[index(this)].offsetTop -79, behavior: 'smooth' });
    }
  });
}
function index(el) {
  return [...el.parentElement.children].indexOf(el);
}
function activeLinks(elem){
  for (var i = 0; i < nav_link.length; i++) {
      nav_link[i].classList.remove("active");
      elem.classList.add("active")
  }
}

// Featured Services

for (var i = 0; i < service.length; i++) {
  service[i].addEventListener("click", function(e){
    activeService(this);
  });
}
function activeService(elem){
  elem.classList.toggle("active");
  for (var i = 0; i < service.length; i++) {
    if( service[i] !== elem ) {
      service[i].classList.remove('active');
    }
  }
}








