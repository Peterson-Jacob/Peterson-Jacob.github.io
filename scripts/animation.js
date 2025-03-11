


gsap.from('.jumboHeader', {opacity: 0, y: '50', ease: "power2.out", duration: 2});
//gsap.from('.jumboPara', {opacity: 0, y: '75', ease: "power2.out", duration: 3, delay: 0.5});
//gsap.from('.jumboSocial', {opacity: 0, y: '75', ease: "power2.out", duration: 3, delay: 1});

let aboutTL = gsap.timeline({
    scrollTrigger:{
      trigger: '.aboutSection',
      start: '10% center',
      end: 'bottom center',
      scrub: false,
      markers: false,
      toggleActions: 'play complete'
    }
  })

  aboutTL.add("join");
  aboutTL.to('.mySelf', { opacity: 1, duration: 2}, "join");
  aboutTL.from('.aboutImg', {opacity: 0, duration:1, delay: 1}, "join");

  let skillsTL = gsap.timeline({
    scrollTrigger:{
      trigger: '.Skills',
      start: '10% center',
      end: 'bottom center',
      scrub: false,
      markers: false,
      toggleActions: 'play complete'
    }
  })

  skillsTL.add("join");
  skillsTL.from('.sCard', {opacity: 0, y: "random(-100, 100)", stagger: 0.4}, 'join');
  skillsTL.from('.education', {opacity: 0, x: '-250', duration: 2}, 'join');


  let portTL = gsap.timeline({
    scrollTrigger:{
      trigger: '.Portfolio',
      start: '10% center',
      end: 'bottom center',
      scrub: false,
      markers: false,
      toggleActions: 'play complete'
    }
  })

 portTL.from('.card', {opacity: 0, x: "random(-100, 100)", stagger: 0.5});

  
  let gcard = document.querySelector('.gashCard');

  let gdisplay = gsap.to('.gashInfo', {
    paused: true,
    opacity: 1,
    duration: 1
    
  });

  gcard.addEventListener("mouseover", () => gdisplay.play());
  gcard.addEventListener("mouseout", () => gdisplay.reverse());


  let tcard = document.querySelector('.cardTwo');

  let tdisplay = gsap.to('.glennInfo', {
    paused: true,
    opacity: 1,
    duration: 1
    
  });

  tcard.addEventListener("mouseover", () => tdisplay.play());
  tcard.addEventListener("mouseout", () => tdisplay.reverse());


  let pcard = document.querySelector('.peteCard');

  let pdisplay = gsap.to('.peteInfo', {
    paused: true,
    opacity: 1,
    duration: 1
    
  });

  pcard.addEventListener("mouseover", () => pdisplay.play());
  pcard.addEventListener("mouseout", () => pdisplay.reverse());

  let lcard = document.querySelector('.lakeCard');

  let lakedisplay = gsap.to('.lakeInfo', {
    paused: true,
    opacity: 1,
    duration: 1
    
  });

  lcard.addEventListener("mouseover", () => lakedisplay.play());
  lcard.addEventListener("mouseout", () => lakedisplay.reverse());
  
  
