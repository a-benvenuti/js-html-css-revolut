$(
  function(){
// ------------eventi all'hover-----------------
    $('.dropdown_principale').hover(function(){
      $('.dropdown').hide();
      $(this).children('ul').show();
    });
// ------------/eventi all'hover-----------------
//--------------eventi al click------------------
    $(document).click(function(){
      $(".dropdown").hide();
    });
//--------------/eventi al click------------------
  }
);
