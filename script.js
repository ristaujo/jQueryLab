 $(document).ready(() => {
  $("#form").css("display", "none")


  $(".available").click(function(){
    $("#form").show();
  });

  $("#cancel-button").click(function(){
    $("#form").hide();
  });

  $(".available").hover(function() {
    $(this).css('cursor','pointer');
      
  });

  $("#submit-button").click(function(){
    $("#form").hide();
  });



});  