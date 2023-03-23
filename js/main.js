$(document).ready(function(){
    $('.burger-menu').click(function(event){
      $('.burger-menu , .menu-list , .logo__header').toggleClass('active');
      $('body').toggleClass('lock');
    })
  })
  $('.menu-list').click(function(event) {
    $('.burger-menu , .menu-list , .logo__header').removeClass('active');
    $('body').removeClass('lock');
  })