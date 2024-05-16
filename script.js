var navbar = document.querySelector('.navbar');

navbar.addEventListener('click', function() {

    var menuContent = document.querySelector('.menu-content');

    menuContent.style.display = (menuContent.style.display === 'block') ? 'none' : 'block';
});