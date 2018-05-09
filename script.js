$(document).ready((e) => {

  let name;
  let phone;
  let party;
  let addText;
  let table = {};

  $("#form").css("display", "none")
  $(".table-data").css("display", "none")

    $(".available").click(function(e){
      $("#form").fadeIn(1000);
      table = e.target;
    });

    $("#cancel-button").click(function(){
      $("#form").hide();
    });

    $("#submit-button").on("click", (event) => {
      name = $("#name").val();
      phone = $("#phone").val();
      party = $("#party").val();
      addText = $(".table-data").text();
      console.log(name, phone, party);
      $(table).attr("name", name).attr("phone", phone).attr("party", party);
      $(table).removeClass("available").addClass("reserved");
      $("#form").fadeOut(1000);

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


