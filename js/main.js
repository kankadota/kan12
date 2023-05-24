'use strict';

{
    const btn = document.querySelector('.toggle_btn');
    const nav = document.getElementById('navi');
    const mask = document.getElementById('mask'); 
    
    
    btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    nav.classList.toggle('open')
    mask.classList.toggle('open')
    });
}

