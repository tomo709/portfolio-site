"use strict";

// ローディング
$(window).on("load", function () {
    $("#splash").delay(1500).fadeOut("slow"); //ローディング画面を1.5秒（1500ms）待機してからフェードアウト
    $("#splash_logo").delay(1500).fadeOut("slow"); //ロゴを1.5秒（1500ms）待機してからフェードアウト
});

//ボタンクリックするとハンバーガーメニューが出てくる設定
$(function () {
    $("#g-nav_btn").on("click", function () {
        //
        $(".g-nav").toggleClass("nav-active");
        $("#g-nav_btn").toggleClass("g-nav_btn2");
        $("#link-text").toggleClass("link-text2");
    });
});
$(function () {
    $(".nav-item").click(() => {
        $(".g-nav").removeClass("nav-active");
    });
});

// スクロールに応じて背景画像の透明度を変更

$(document).ready(function () {
    $(window).scroll(function () {
        let width = window.innerWidth; // ウィンドウの幅を取得

        if (width > 800) {
            // ｐCサイズ
            if ($(this).scrollTop() > 0) {
                // ページをスクロールした場合に実行
                $("#header").css("opacity", 0.8); // スクロールしたら透明度0.8
            } else {
                $("#header").css("opacity", 1); // ページの最上部にいる場合は不透明
            }
        }
    });
});
