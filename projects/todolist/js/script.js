"use strict";
// ボタンを取得
let addBtn = document.getElementById("addBtn");

// animalの選択値をグローバル変数として保存
let selectedAnimal = null;

//ページが完全に読み込まれてから処理を実行する
window.onload = function () {
    let animal = prompt("1.ねこ　2.うさぎ　3.シマエナガ　の中から好きな動物を1,2,3の番号で選んでください　※半角数字で入力※");
    // 数値に変換
    selectedAnimal = Number(animal);

    let compImg = document.getElementById('comp_img');

    if (selectedAnimal === 1) {
        compImg.style.backgroundImage = "url('./img/cat1.png')";
    } else if (selectedAnimal === 2) {
        compImg.style.backgroundImage = "url('./img/rabbit1.png')";
    } else if (selectedAnimal === 3) {
        compImg.style.backgroundImage = "url('./img/simaenaga1.png')";
    }
};

// Todoリストの処理
addBtn.addEventListener("click", function () {
    // 入力フォームの値と空のtodoListを取得
    let todoText = document.getElementById("todoInput").value;
    let todoDate = document.getElementById("dateInput").value;
    let todoList = document.getElementById("todoList");
    let completedList = document.getElementById("completed"); // 完了リストのulを取得

    if (todoText !== "" && todoDate !== "") {
        // 新しいli要素を作成
        let li = document.createElement("li");

        // テキスト用のspan作成
        let textSpan = document.createElement("span");
        textSpan.textContent = `${todoText} - ${todoDate}`;

        // 削除ボタン作成
        let delBtn = document.createElement("button");
        delBtn.innerText = "削除";

        //削除ボタンを押したときの動作設定
        delBtn.addEventListener("click", function () {
            if (li.parentNode) {
                li.parentNode.removeChild(li); // 親要素から削除
            }

            //selectedAnimal の値に応じて元の画像を設定
            let compImg = document.getElementById("comp_img");
            compImg.classList.remove("comp_img2"); // comp_img2 クラスを削除

            // 削除ボタンを押したときに戻る画像の設定
            if (selectedAnimal === 1) {
                compImg.style.backgroundImage = "url('./img/cat1.png')";  // ねこ
            } else if (selectedAnimal === 2) {
                compImg.style.backgroundImage = "url('./img/rabbit1.png')";  // うさぎ
            } else if (selectedAnimal === 3) {
                compImg.style.backgroundImage = "url('./img/simaenaga1.png')";  // シマエナガ
            }
        });

        // 完了ボタンを作成
        let completeBtn = document.createElement("button");
        completeBtn.innerText = "完了";
        completeBtn.style.backgroundColor = "#5AB0B0";

        // ホバー時に色を変更
        completeBtn.addEventListener("mouseover", function () {
            completeBtn.style.backgroundColor = "#429999";
        });
        // マウスが外れたら元の色に戻す
        completeBtn.addEventListener("mouseout", function () {
            completeBtn.style.backgroundColor = "#5AB0B0";
        });

        //完了ボタンを押したときの動作設定
        completeBtn.addEventListener("click", function () {
            // 完了リストに移動
            completedList.appendChild(li);

            // todoListから削除（todoListに含まれている場合のみ）
            if (todoList.contains(li)) {
                todoList.removeChild(li);
            }
            // 完了ボタンを削除
            li.removeChild(completeBtn);

            // comp_img2じゃないときに変更する
            let compImg = document.getElementById("comp_img");
            if (!compImg.classList.contains("comp_img2")) {
                compImg.classList.add("comp_img2");
            }

            // selectedAnimalの値に応じて画像を変更
            if (selectedAnimal === 1) {
                compImg.style.backgroundImage = "url('./img/cat2.png')";
            } else if (selectedAnimal === 2) {
                compImg.style.backgroundImage = "url('./img/rabbit2.png')";
            } else if (selectedAnimal === 3) {
                compImg.style.backgroundImage = "url('./img/simaenaga2.png')";
            }
        });

        // li要素にテキスト、ボタンを追加
        li.appendChild(textSpan);
        li.appendChild(delBtn);
        li.appendChild(completeBtn);

        // ulに新しいli要素を追加
        todoList.appendChild(li);

        // 入力フィールドをクリア
        document.getElementById("todoInput").value = "";
        document.getElementById("dateInput").value = "";
    }
});
