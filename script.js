 $(document).ready(() => {
  $("#form").css("display", "none")


  $(".dot").click(function(){
    $("#form").show();
  });

  $("#cancel-button").click(function(){
    $("#form").hide();
  });

  $("#table-container").hover(function() {
    $(this).css('cursor','pointer');
      
  });


});  