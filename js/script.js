const btn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

btn.addEventListener('click',toggleMenuBtn);

function toggleMenuBtn(){
    btn.classList.toggle('open');
    mobileMenu.classList.toggle('flex');
    mobileMenu.classList.toggle('hidden');
}