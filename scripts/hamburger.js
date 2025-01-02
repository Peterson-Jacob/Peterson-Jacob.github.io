
window.onload = function(){


    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu li a');
    
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('open');
        hamburger.classList.toggle('open');


    });
  
    navLinks.forEach(link => {
        link.addEventListener('click', function() { 
            navMenu.classList.remove('open'); 
            hamburger.classList.remove('open'); 
        });
     });

}

