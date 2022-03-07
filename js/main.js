// Debug 
console.log('JS OK!')

// JS Hamburger
document.querySelector(".fa-bars").addEventListener('click',
    function () {
        console.log('HBG Clicked!');
        const hamburgerNav = document.querySelector('div.hamburger-menu');
        hamburgerNav.style.display = 'block';
    }
);
document.querySelector(".close").addEventListener('click',
    function () {
        console.log('X Clicked!');
        const hamburgerNav = document.querySelector('div.hamburger-menu');
        hamburgerNav.style.display = 'none';
    }
);    