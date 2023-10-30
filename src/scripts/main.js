
//hamburger menu.

let carousel = document.querySelector(".image-carousel")


//------------image carousel--------


var flkty = new Flickity( carousel, {
  // options
  cellAlign: 'center',
  contain: true,
  freeScroll: true,
  wrapAround: true,
  autoPlay: 1500,
  pauseAutoPlayOnHover: true,
  groupCells: window.matchMedia("(min-width: 600px)").matches? 3 : false,
});


// -------------navigation------------


let nav = document.querySelector('#inner-nav')