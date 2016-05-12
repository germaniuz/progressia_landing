$(document).ready(function(){
  $('.open-btn').click(function(e){
    $('.pop-bg').fadeIn(300);
    $('.pop-box').fadeIn(300);
    e.preventDefault();
    return false;
  })
  $('.close-btn').click(function(e){
    $('.pop-bg').fadeOut(300);
    $('.pop-box').fadeOut(300);
    e.preventDefault();
    return false;
  })
  $('.pop-bg').click(function(){
    $('.pop-bg').fadeOut(300);
    $('.pop-box').fadeOut(300);
  })

});