$(document).ready(function(){
  $("#blanks form").submit(function(event) {
    var form1Input = $("input#form1").val();
    $(".form1").text(form1Input);

    $("#letter").show();

    event.preventDefault();
  });
});
