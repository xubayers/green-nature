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

// navs hover animation
const items = document.querySelectorAll('nav>ul>li');
const marker = document.querySelector('.marker');

function indicator(e){
    marker.style.width = e.offsetWidth+'px';
    marker.style.left = e.offsetLeft+'px';
}
items.forEach(item => {
    item.addEventListener('mouseover', (e) => {
        indicator(e.target)
    })
    item.addEventListener('mouseout', () => {
        marker.style.width = 100+'px';
        marker.style.left = 0+'px';
    })
});

// nav bar scroll and fixed after some time or distance
window.addEventListener('scroll', function() {
    const navBar = document.querySelector('header');
    if (window.scrollY > 350) {
        navBar.classList.add('fixed')
    }
    else {
        navBar.classList.remove('fixed')
    }
})