// —————————
// Variables
// —————————
var homeHero      = document.getElementById("home-hero"),
    header        = document.getElementById("header"),
    nav           = document.getElementById("nav"),
    nav_link      = nav.querySelectorAll('.section-link'),
    menuBtn       = document.querySelectorAll(".menu-btn"),
    htaMenu       = document.getElementById("hta-menu"),
    htaMenuClose  = document.querySelector(".hta-menu_close-btn"),
    menu          = htaMenu.querySelector(".hta-nav"),
    main          = document.querySelector("main"),
    scroll_cue    = document.querySelector(".scroll-cue"),
    section       = document.getElementsByClassName("section"),
    service       = document.querySelectorAll('.featured-service');
// —————————
// Load Stuff
// —————————
function loadStuff(){
  checkSectionOffset();
}
window.addEventListener("load", loadStuff);
// —————————
// Scroll Stuff
// —————————
function scrollStuff(){
  if(typeof(flkty) != 'undefined' && flkty != null){
    if( window.scrollY > window.outerHeight/4 ){
      flkty.player.stop();
    } else{
      flkty.player.play();
    }
  }
  if(typeof(scroll_cue) != 'undefined' && scroll_cue != null){
    if( window.scrollY > 0 ){
      scroll_cue.classList.add("active");
    } else{
      scroll_cue.classList.remove("active");
    }
  }
  checkSectionOffset();
}
window.addEventListener("scroll", _.throttle(scrollStuff, 200));
// —————————
// Resize Stuff
// —————————
function resizeStuff(){
  if(typeof(elem) != 'undefined' && elem != null){
    flkty.resize();
    flkty2.resize();
  }
  checkSectionOffset();
}
window.addEventListener("resize", resizeStuff);
// —————————
// Check Section Offsets
// —————————
function checkSectionOffset(){
  for (var i = 0; i < section.length; i++) {
    if ( section[i].offsetTop - window.scrollY <= 80 ){
      activeLinks(nav_link[i]);
    } else if ( section[i].offsetTop - window.scrollY > 80 ) {
      if(typeof(nav_link[i]) != 'undefined' && nav_link[i] != null){
        nav_link[i].classList.remove("active");
      }
    }
  }
}
// —————————
// Navigation Links
// —————————
for (var i = 0; i < nav_link.length; i++) {
  nav_link[i].addEventListener("click", function(e){
    e.preventDefault();
    activeLinks(this);
    if( index(this) !== 5 ){
      window.scrollTo({ top: section[index(this)].offsetTop -79, behavior: 'smooth' });
    }
  });
}
function activeLinks(elem){
  for (var i = 0; i < nav_link.length; i++) {
      nav_link[i].classList.remove("active");
      elem.classList.add("active");
  }
}
// —————————
// Sliders
// —————————
var elem = document.querySelector('.hero-slider');
if(typeof(elem) != 'undefined' && elem != null){
  var slides = elem.querySelectorAll(".hero-slide");
  var flkty = new Flickity( elem, {
    fade: true,
    autoPlay: 3000,
    pauseAutoPlayOnHover: false,
    draggable: false,
    prevNextButtons: false,
    pageDots: false,
    wrapAround: true,
    imagesLoaded: true
  });
}
var elem2 = document.querySelector('.work-slider');
if(typeof(elem2) != 'undefined' && elem2 != null){
  var slides2 = elem2.querySelectorAll(".work-slide");
  var flkty2 = new Flickity( elem2, { 
    fade: true,
    autoPlay: 2500,
    pauseAutoPlayOnHover: false,
    draggable: false,
    prevNextButtons: false,
    pageDots: false,
    wrapAround: true,
    imagesLoaded: true
  });
}
// —————————
// Featured Services
// —————————
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
// —————————
// Open Contact Form
// —————————
function openForm(){
  htaMenu.classList.toggle("open");
  menu.classList.toggle("active");
  this.classList.toggle("active");
  header.classList.toggle("hide");
  document.body.classList.add("no-scroll");
}
for (var i = 0; i < menuBtn.length; i++) {
  menuBtn[i].addEventListener("click", openForm);
}
// —————————
// Close Contact Form
// —————————
function closeForm(){
  htaMenu.classList.remove("open");
  menu.classList.remove("active");
  header.classList.remove("hide");
  document.body.classList.remove("no-scroll");
  hta_form.style.display = "flex";
  hta_thank_you.classList.remove("active");
  form.reset();
  checkSectionOffset();
}
htaMenuClose.addEventListener("click", closeForm);
// —————————
// Create Thank You Message on Form Submit
// —————————
var form          = document.getElementById("form"),
    hta_form      = document.getElementById("hta-form"),
    hta_thank_you = document.getElementById("hta-thank-you"),
    submit        = document.getElementById("form-submit");

function createThankYou(){
  var name                   = form.querySelector('[name="first-name"]').value,
      company_name           = form.querySelector('[name="company-name"]').value,
      thank_you_message      = hta_thank_you.querySelector('h2'),
      thank_you_message_2    = hta_thank_you.querySelector('h3'),
      thank_you_name         = thank_you_message.querySelector(".form-name"),
      thank_you_company_name = thank_you_message_2.querySelector(".form-company-name");

  thank_you_name.innerHTML = name;
  thank_you_company_name.innerHTML = company_name;
  hta_form.style.display = "none";
  hta_thank_you.classList.add("active");
}
submit.addEventListener("click", function(e){
  e.preventDefault();
  createThankYou();
});
// —————————
// Index utility function
// —————————
function index(el) {
  return [...el.parentElement.children].indexOf(el);
}
















