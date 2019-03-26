$(document).ready(function() {

  $(".btn").click(function() {
    $(".discription").hide();
      var sentid =  event.target.id;
      var discrip = "#" + sentid.replace("btn", "txt")
      $(discrip).fadeIn();
      $(".btn").removeClass("btn-dark");
      $("#" + sentid).addClass("btn-dark");
  });
});
