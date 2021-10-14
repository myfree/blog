$(function () {
  $('iframe').wrap('<p class="iframe"></p>')

  $(".top-btn").click(function () {
    $("html,body").animate({
      scrollTop: '0px'
    }, 500);
  });

  $(window).on("scroll", function () {
    if ($(window).scrollTop() >= 200) {
      $('.top-btn').addClass('top-btn-show')
    } else {
      $('.top-btn').removeClass('top-btn-show')
    }
  });

  var i = 1;
  $('.nav-menu').click(function () {
    if (i == 1) {
      $(this).toggleClass('nav-menu-open');
      $('.aside-header .nav ul').toggleClass('nav-menu-ul')
    } else {
      $('.nav-menu').removeClass('nav-menu-open');
      $('.aside-header .nav ul').removeClass('nav-menu-ul')
    }
  });



})

console.log('Powered by hugo and Author by Nov8nana ⚡ date 2020.06.14 https://github.com/Nov8nana')
console.log('Your smile is like the sweetest bite in watermelon. 🍉 The person I like is called xx. ❤\n')
