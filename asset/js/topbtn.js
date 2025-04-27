"use strict";

//スクロールしたらtopに戻るボタンが出てくる
$(window).scroll(function () {
    let width = window.innerWidth;
    if ($(this).scrollTop() > 0) {
        $(".page_top").css("opacity", 1); // スクロールしたら表示される
    } else {
        $(".page_top").css("opacity", 0); // ページの最上部にいる場合は透明
    }
});
