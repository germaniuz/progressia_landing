function getForm(){
  var name = document.getElementById('name').value;
  var phone = document.getElementById('phone').value;
  var email = document.getElementById('email').value;
  if (name != '' && phone != '' && email != ''){
    var dataString = 'name=' + name + '&phone=' + phone + '&email=' + email;

    $.ajax({
      type: 'post',
      url: 'mailer.php',
      data: dataString,
      cache: false,
      success: function(html){
        $('#get-form').fadeOut();
        $('#msg').html(html);
        $('#msg').fadeIn(html);
      }
    });
    return false;
  } else {

  }
};
function callBack(){
  var name = document.getElementById('name1').value;
  var phone = document.getElementById('phone1').value;

  if (name != '' && phone != ''){
    var dataString = 'name=' + name + '&phone=' + phone;

    $.ajax({
      type: 'post',
      url: 'mailer.php',
      data: dataString,
      cache: false,
      success: function(html){
        $('#callback-form').fadeOut();
        $('#msg1').html(html);
        $('#msg1').fadeIn();
      }
    }); 
    return false;
  } else {

  }
};