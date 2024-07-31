const bars = document.querySelector('.bars');
const menuBar = document.querySelector('.fa-bars');
const xmark = document.querySelector('.fa-xmark');
const navs = document.querySelector('.nav');

let toggle = false;
bars.addEventListener("click", function(){
    if (toggle) {
        navs.style.display = 'none';
        xmark.style.display = 'none';
        menuBar.style.display = 'block';
        toggle = false;
    }
    else {
        menuBar.style.display = 'none';
        xmark.style.display = 'block';
        navs.style.display = 'flex';
        toggle = true;
    }
})