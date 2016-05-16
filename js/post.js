function getForm(){
  var name = document.getElementById('name').value;
  var name = document.getElementById('phone').value;
  var email = document.getElementById('email').value;
  var dataString = 'name=' + name + '&phone=' + phone + '&email=' + email;

  $.ajax({
    type: 'post',
    url: 'mailer.php',
    data: dataString,
    cache: false,
    success: function(html){
      $('#msg').html(html);
      $('#get-form').fadeOut();
    }
  }); 
  return false;
};

function callBack(){
  var name = document.getElementById('name1').value;
  var email = document.getElementById('email1').value;
  var dataString = 'name=' + name + '&email=' + email;

  $.ajax({
    type: 'post',
    url: 'mailer.php',
    data: dataString,
    cache: false,
    success: function(html){
      $('#msg').html(html);
      $('#callback-form').fadeOut();
    }
  }); 
  return false;
};