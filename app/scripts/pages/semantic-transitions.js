$(".transitioneffect").on("click", function() {
    var transition = $(this).data("transition");
    $(".transition.demo .image").transition({
      animation: transition,
      reverse: 'auto',
      duration  : 800,
      interval  : 200,
      onComplete: function() {
        $(".transition.demo .image").removeClass("hidden");
      }
    });
  });
  $(".sui-transition").on("click", function() {
    var transition = $(this).data("animate");
    var text = $(this).html();
    $(this).parent(".card-block").children("img")
      .transition({
        animation: transition,
        reverse: false,
        interval: 200,
        onComplete: function() {
          //ss$(".transition.demo .image").removeClass("hidden");
        }
      });
  });
  