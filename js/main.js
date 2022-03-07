// Debug 
console.log('JS OK!')

// JS Hamburger
// const hamburger = document.querySelector(".close");

document.querySelector(".close").addEventListener('click',
    function () {
        console.log('HBG Clicked!');
        const hamburgerNav = document.querySelector('div.hamburger-menu');
        hamburgerNav.style.display = 'block'
    }
);    