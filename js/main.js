// Debug 
console.log('JS OK!')

// JS Hamburger
const hamburgerNav = document.querySelector('div.hamburger-menu');

const hamburgerIcon = document.querySelector(".fa-bars");

const closeIcon = document.querySelector(".close");

hamburgerIcon.addEventListener('click',
    function () {
        console.log('HBG Clicked!');
        // hamburgerNav.style.display = 'block';
        hamburgerNav.classList.add('active');
    }
);
closeIcon.addEventListener('click',
    function () {
        console.log('X Clicked!');
        // hamburgerNav.style.display = 'none';
        hamburgerNav.classList.remove('active');

    }
);    