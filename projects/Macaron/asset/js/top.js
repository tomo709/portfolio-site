"use strict";

//ボタンクリックするとハンバーガーメニューが出てくる設定
$(function () {
    $("#hamburger").on("click", function () {
        $(".g-nav").toggleClass("nav-active");
        $(".hamburger_line").toggleClass("hamburger-active");
        $(".hamburger_line").toggleClass("active");
        $(".hamburger_line").toggleClass("active2");
        // javascriptで擬似要素の切り替えをする
    });
});
$(function () {
    $(".g-nav li").click(() => {
        //linkをクリックしたらナビゲーション画面が消える
        $(".g-nav").removeClass("nav-active");
        $(".hamburger_line").removeClass("hamburger-active");
        $(".hamburger_line").removeClass("active");
        $(".hamburger_line").removeClass("active2");
    });
});

//スライドショーの設定
$(function () {
    $(".macaron_img").slick({
        dots: true,
    });
});

//ふわっと表示の設定
$(function () {
    $(".repeat-action").on("inview", function (event, isInView) {
        if (isInView) {
            $(this).stop().addClass("is-show");
        }
    });
});

//スクロールしたらtopに戻るボタンが出てくる
$(window).scroll(function () {
    let width = window.innerWidth;
    if (width > 800) {
        if ($(this).scrollTop() > 0) {
            $(".page_top").css("opacity", 1); // スクロールしたら表示される
        } else {
            $(".page_top").css("opacity", 0); // ページの最上部にいる場合は透明
        }
    }
});
