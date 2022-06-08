$(document).ready(function(){

  $('.fa-bars').click(function(){

    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
  });

  $('.navbar').click(function(){

    $(this).removeClass('nav-toggle');
    $('.fa-bars').removeClass('fa-times');
  });

  $('.dot1').click(function(){
    
    $('.vid1').css('display','block');
    $('.vid2').css('display','none');
    $('.vid3').css('display','none');
  });

  $('.dot2').click(function(){
    
    $('.vid1').css('display','none');
    $('.vid2').css('display','block');
    $('.vid3').css('display','none');
  });

  $('.dot3').click(function(){
    
    $('.vid1').css('display','none');
    $('.vid2').css('display','none');
    $('.vid3').css('display','block');
  });

});