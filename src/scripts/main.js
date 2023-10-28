
//hamburger menu.

let hamburger = document.querySelector(".hamburger");

let nav = document.querySelector("#inner-nav");

const navItems = document.querySelector(".nav-item")

let carousel = document.querySelector(".image-carousel")


let isOpen = false;


const animateNav = (nav) => {
    gsap.to(nav, {
        height: "100%",
        duration: 1.2,
        ease: "power2.out"
    })
}


hamburger.addEventListener('click', () => {
    isOpen = true;

    if(isOpen = true){
        hamburger.style.zIndex = 5;

        

        gsap.to(navItems, {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 1.2,
            delay: .8,
            ease: "power2.out"
        })
    }else{
        hamburger.style.zIndex = 5;

        gsap.to(nav, {
            height: "0%",
            delay: .8,
            duration: 1.2,
            ease: "power2.out"
        })

        gsap.to(navItems, {
            opacity: 0,
            y: 0,
            stagger: 0.1,
            duration: 1,
            ease: "power2.out"
        })
    }
    

    // if()
})


//image carousel


var flkty = new Flickity( carousel, {
  // options
  cellAlign: 'center',
  contain: true,
  freeScroll: true,
  wrapAround: true,
  autoPlay: 1500,
  pauseAutoPlayOnHover: true
});
