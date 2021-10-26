//判断网址,防止访客网址不写http和https
function wangzhi(e) {
  http = e.slice(0, 4)
  https = e.slice(0, 5)
  if (http == "http" || https == "https") {
    return e
  } else if (e == "" || e == null || e == undefined) {
    return e
  } else {
    e = 'http://' + e
    return e
  }
}

//调用twikoo最新评论主函数
function newcomment() {
  twikoo.getRecentComments({
    envId: 'shuxhan-2gcz5b7m7f845ec3', // 环境 ID
    pageSize: 5, // 获取多少条，默认：10，最大：100
    includeReply: true, // 是否包括最新回复，默认：false
  }).then(function (res) {
    console.log(res);
    var hotComments = $("#hot-comments");
    for (var i = 0; i < res.length; i++) {
      if (i === 0) {
        console.log(res[0]);
      }
      var nick = res[i].nick; //访客姓名
      var content = res[i].commentText; //评论内容
      var newcontent = content.substring(0, 50); //字数截取后评论内容
      var url = res[i].url; //文章链接
      // var avatar = res[i].avatar; //评论者头像
      var link = wangzhi(res[i].link); //评论者网址
      var updatedAt = res[i].relativeTime; //评论时间
      var commentId = '#' + res[i].id; //评论id
      hotComments.append(
        '<li><div><div class="name" title="' +
        nick + '"><a target="_blank" rel="noopener external nofollow noreferrer" href="' + link + '">' +
        nick + '</a><span>' + updatedAt +
        '</span></div> <a class="content" href="' + url + commentId + '">' +
        newcontent + '</a></div></li>');
    }
  }).catch(function (err) {
    console.error(err);
  });
}

$(function () {
  newcomment(); //调用newcomment
});
twikoo.init({
  envId: 'shuxhan-2gcz5b7m7f845ec3',
  el: '#tcomment',
  path: 'window.location.pathname',
  lang: 'zh-CN',
})