// $(document).ready(function(){});
$(function(){
  $('.Login').show();

  $('.loginBtnLogin').click(function (){
    alert('click login btn');
  });

  $('.loginBtnJoin').click(function (){
    $(".Join").show();
    $(".Login").hide();
  });

  $(".joinBtnJoin").click(function() {
    var id = $('.joinTxtId').val();
    var pw = $('.joinTxtPw').val();
    var pwc = $('.joinTxtPw2').val();

    if(!id) { alert('input your ID plz'); return false; }
    if(!pw) { alert('input your PW plz'); return false; }
    if(!pwc) { alert('confirm your PW plz'); return false; }
    if(pw!=pwc) { alert('check your pw plz'); return false; }

    $.ajax({
      url: "http://www.google.com/",
      data: { // id=id&&pw=pw 오토파싱!
        id: id,
        pw: pw
      },
      method: 'GET',
      success: function(data){
        alert(data);
      },
      error: function(){}
    });

  });

  $('.joinBtnCancel').click(function(){
    if(confirm('do you want to cancel?')) {
      $(".Join").hide();
      $(".Login").show();
    }
  });


});

// $(document).ready(function() {
//   $('.Join').show();
//
// });
