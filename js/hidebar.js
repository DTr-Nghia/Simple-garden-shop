// const hamburger = document.querySelector('.nav-icon');
// const background = document.querySelector('.background-tab-menu');
// const tabmenu = document.querySelector('.tab-menu');

// hamburger.addEventListener('click', function(){
//     tabmenu.classList.add('active');
//     background.classList.add('active');
// })
// background.addEventListener('click', function(){
//     tabmenu.classList.remove('active');
//     background.classList.remove('active');
// })
$(document).ready(function(){
    $('.hamburger').click(function(){
        $('.background-tab-menu').addClass('active');
        $('.tab-menu').addClass('active');
    })
    $('.login-btn').click(function(){
        $('.background-tab-menu').addClass('active');
        $('.login-form').addClass('active');
    })
    $('.background-tab-menu').click(function(){
        $('.background-tab-menu').removeClass('active');
        $('.tab-menu').removeClass('active');
        $('.login-form').removeClass('active');
    })
    $('.search-btn').click(function(){
        $('.bg_search_box').addClass('active');
        $('.search-container').addClass('active');
    })
    $('.close-search-btn').click(function(){
        $('.bg_search_box').removeClass('active');
        $('.search-container').removeClass('active');
    })
})