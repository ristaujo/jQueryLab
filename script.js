$(document).ready((e) => {

  let name;
  let phone;
  let party;
  let addText;

  $("#form").css("display", "none")
  $(".table-data").css("display", "none")

  $(document).click((e) => {

    $(".available").click(function(){
      $("#form").fadeIn(1000);
    });

    $("#cancel-button").click(function(){
      $("#form").hide();
    });

    $("#submit-button").on("click", (event) => {
      name = $("#name").attr("name");
      addText = $(".table-data").text();
      $("#name").text(name);
      $("#form").hide();
      $(e.target).removeClass("available").addClass("reserved");
      $("#form").fadeOut(1000);

      }); 
  });

  /*if((".dot").hasClass("reserved")) {
    $(".dot").hover(() => {
      $(".table-data").show();
    }); 
  }*/

  $(".available").hover(function() {
    $(this).css('cursor','pointer');
      
  });


});  


