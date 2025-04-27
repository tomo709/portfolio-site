"use strict";

// DOMの読み込みが完了したら実行
document.addEventListener("DOMContentLoaded", () => {
    // HTML要素の取得
    const cookStartButton = document.getElementById("cookStartButton");
    // 「調理を始める！」ボタン
    const questionText = document.getElementById("question");
    // 質問を表示する要素
    const resultText = document.getElementById("result");
    // 結果を表示する要素
    const ansButton1 = document.getElementById("answerButton1");
    // 選択肢ボタン1
    const ansButton2 = document.getElementById("answerButton2");
    // 選択肢ボタン2
    const ansArea = document.getElementById("ansArea");
    // 選択肢エリア
    const ending = document.getElementById("Ending");
    // 結果表示エリア
    const resultArea = document.getElementById("resultArea");
    // 結果メッセージエリア

    // 完成したクッキーの画像の取得
    const planeCookie = document.getElementById("planeCookie");
    const cocoaChocolate = document.getElementById("cocoaChocolate");
    const chocolateChip = document.getElementById("chocolateChip");
    const matcha = document.getElementById("matcha");

    // 「もう一度調理する」ボタンの作成
    const restartButton = document.createElement("button");
    restartButton.textContent = "もう一度調理する";
    restartButton.id = "restartButton";
    restartButton.classList.add("cookStartButton"); // CSS適用
    restartButton.style.display = "none"; // 最初は非表示
    ending.appendChild(restartButton);

    // 全部のクッキー画像を非表示
    const cookieInvisible = () => {
        planeCookie.style.display = "none";
        cocoaChocolate.style.display = "none";
        chocolateChip.style.display = "none";
        matcha.style.display = "none";
    };

    // 初期設定（選択肢エリアと結果エリアを非表示）
    ansArea.style.display = "none";
    ending.style.display = "none";
    resultArea.style.display = "none";
    cookieInvisible();

    // 調理を始めるボタンを押したらゲーム開始
    window.ansStart = () => {
        cookStartButton.style.display = "none";
        // 開始ボタンを非表示
        ansArea.style.display = "block";
        // 選択肢エリアを表示
        ending.style.display = "none";
        restartButton.style.display = "none";
        cookieInvisible();

        // 最初の質問
        setQuestion("チョコチップを入れますか？", "入れる", "入れない", "cocoa", "plainCookie");
    };

    // 質問と選択肢を設定
    const setQuestion = (question, option1, option2, next1, next2) => {
        questionText.textContent = question; // 質問文を表示
        ansButton1.textContent = option1;
        ansButton2.textContent = option2;

        // ボタンイベントの設定
        ansButton1.onclick = () => selection(next1);
        ansButton2.onclick = () => selection(next2);
    };

    // 選択肢で質問と結果が変わる設定
    const selection = (next) => {
        if (next === "plainCookie") {
            displayResult(planeCookie, "プレーンクッキーが完成！");
        } else if (next === "chocoChipCookie") {
            displayResult(chocolateChip, "チョコチップクッキーが完成！");
        } else if (next === "cocoaChocoCookie") {
            displayResult(cocoaChocolate, "ココアチョコチップクッキーが完成！");
        } else if (next === "matchaChocoCookie") {
            displayResult(matcha, "抹茶チョコチップクッキーが完成！");
        } else if (next === "cocoa") {
            setQuestion("ココアを入れますか？", "入れる", "入れない", "cocoaChocoCookie", "matcha");
        } else if (next === "matcha") {
            setQuestion("抹茶パウダーを入れますか？", "入れる", "入れない", "matchaChocoCookie", "chocoChipCookie");
        }
    };

    // クッキーの結果を表示
    const displayResult = (cookieType, message) => {
        ansArea.style.display = "none";
        // 選択肢エリアを非表示
        ending.style.display = "block";
        // 結果エリアを表示
        resultArea.style.display = "block";
        // 結果メッセージエリアを表示
        cookieInvisible(); // 全部のクッキー画像を非表示
        cookieType.style.display = "block";
        // 完成したクッキーを表示
        resultText.textContent = message;
        // 結果のメッセージを表示
        restartButton.style.display = "block";
        // 「もう一度調理する」ボタンを表示
    };

    // ゲームをリセット
    const resetGame = () => {
        cookStartButton.style.display = "block";
        // 調理開始ボタンを再表示
        ansArea.style.display = "none";
        // 質問エリアを非表示
        ending.style.display = "none";
        // 結果エリアを非表示
        resultArea.style.display = "none";
        // 結果表示エリアを非表示
        restartButton.style.display = "none";
        // もう一度調理ボタンを非表示
        cookieInvisible();
        // クッキー画像をすべて非表示
    };

    // もう一度調理するボタンにリセットを追加
    restartButton.addEventListener("click", resetGame);
    // 調理を始めるボタンにイベントをセット
    cookStartButton.addEventListener("click", ansStart);
});
