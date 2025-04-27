// ローディング
$(window).on("load", function () {
    $("#splash").delay(1500).fadeOut("slow"); //ローディング画面を1.5秒（1500ms）待機してからフェードアウト
    $("#splash_logo").delay(2000).fadeOut("slow"); //ロゴを2秒（2000ms）待機してからフェードアウト
});
