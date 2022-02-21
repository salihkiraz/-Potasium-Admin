$(".animate-card .animatecss").on("click",function(){
    var animate = $(this).attr("data-animate");
    $(this).closest('div').find('img').addClass(animate);
    window.setTimeout(function(){$(".animated-image").removeClass(animate);}, 1000);
  });