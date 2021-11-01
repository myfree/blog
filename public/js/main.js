$(function () {
  // iframe自适应
  $('iframe').wrap('<p class="iframe"></p>')
  $('.post .markdown a').attr('target', '_blank')
  $('.post .markdown a').append('<i style="font-size:12px;" class="fa fa-share"></i>')

  setTimeout(function () {
    $('#status').fadeOut();
    $('#preloader').delay(100).fadeOut('slow');
  }, 200)

  // 手机端导航栏切换模式
  var i = 1;
  $('.nav-menu').click(function () {
    if (i == 1) {
      $(this).toggleClass('nav-menu-open');
      $('.header nav ul').toggleClass('nav-menu-ul')
    } else {
      $('.nav-menu').removeClass('nav-menu-open');
      $('.header nav ul').removeClass('nav-menu-ul')
    }
  });

  // 返回顶部平滑滚动
  $(".top-btn").click(function () {
    $("html,body").animate({
      scrollTop: '0px'
    }, 500);
  });
  // 当页面开始向下滑动时，返回顶部按钮已动画形式出现
  $(window).on("scroll", function () {
    if ($(window).scrollTop() >= 200) {
      $('.top-btn').addClass('top-btn-show')
    } else {
      $('.top-btn').removeClass('top-btn-show')
    }
  });

  // 点击文章目录，平滑跳转
  $('#autoMenu ul>li>a').click(function () {
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    return false;
  });

  $('.autoMenu>ul>li:nth-child(1)').before('<h4 class="mulu">TOC</h4>')

  // 点击标题下方评论按钮时，平时滚动到底部评论区
  $('#tocomment').click(function () {
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    return false;
  });

  if ($(window).width() <= 1228) {
    $('.post .post-header').after($('.autoMenu'))
  }

  // 首页公告 相关事件
  $('.fa-times').click(function () {
    $('.top-swiper').remove();
  })

  // 图片放大预览
  $('.post .markdown img').wrap('<a target="_blank" class="swipebox"></a>')
  var $i = $(".post .markdown img").attr("src")
  console.log($i);
  $('.post .markdown a.swipebox').attr('href',$i)

  var s1 = '2020-06-14';
  s1 = new Date(s1.replace(/-/g, "/"));
  s2 = new Date();
  var days = s2.getTime() - s1.getTime();
  var number_of_days = parseInt(days / (1000 * 60 * 60 * 24));
  document.getElementById('days').innerHTML = number_of_days;
})


var shuhan = `
  _    _      _ _        __          __        _     _ 
 | |  | |    | | |       \\ \\        / /       | |   | |
 | |__| | ___| | | ___    \\ \\  /\\  / /__  _ __| | __| |
 |  __  |/ _ \\ | |/ _ \\    \\ \\/  \\/ / _ \\| '__| |/ _\` |
 | |  | |  __/ | | (_) |    \\  /\\  / (_) | |  | | (_| |
 |_|  |_|\\___|_|_|\\___/      \\/  \\/ \\___/|_|  |_|\\__,_|                                                                                                                                                                                  
`
console.log(`%c${shuhan}`, 'color:#1e90ff')

// 我的悄悄话
console.log('Powered by hugo and Author by Nov8nana ⚡ date 2020.06.14 https://github.com/Nov8nana')
console.log('Your smile is like the sweetest bite in watermelon. 🍉 The person I like is called xx. ❤\n')


