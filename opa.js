window.addEventListener( "scroll", function() {
    var scrollOpacity = 1 - Math.sqrt(window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight));
    scrollOpacity = Math.pow(scrollOpacity,3);

    console.log(scrollOpacity);
    console.log($(".vtr").css("opacity"));
    $(".vtr").css("opacity", scrollOpacity);
});