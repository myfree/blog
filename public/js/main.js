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

})

console.log('Powered by hugo and Author by Nov8nana ⚡ date 2020.06.14 https://github.com/Nov8nana')
console.log('Your smile is like the sweetest bite in watermelon. 🍉 The person I like is called hb. ❤\n')
