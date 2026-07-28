// 〇✕ゲームのロジック

// 勝利パターンの組み合わせ
const WINNING_COMBINATIONS = [
    [0, 1, 2], // 横
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // 縦
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // 斜め
    [2, 4, 6]
];

// ゲームの状態変数
let currentPlayer = "〇";
let boardState = ["", "", "", "", "", "", "", "", ""];
let isGameActive = true;

// DOM要素の取得
const statusDisplay = document.querySelector("#status");
const cells = document.querySelectorAll(".cell");
const resetButton = document.querySelector("#reset-btn");

// マスがクリックされた時の処理
function handleCellClick(event) {
    const clickedCell = event.target;
    const cellIndex = parseInt(clickedCell.getAttribute("data-index"));

    // 既に選択されているマスか、ゲームが終了している場合は処理しない
    if (boardState[cellIndex] !== "" || !isGameActive) {
        return;
    }

    // 盤面状態の更新と画面描画
    boardState[cellIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;
    
    if (currentPlayer === "〇") {
        clickedCell.classList.add("circle");
    } else {
        clickedCell.classList.add("cross");
    }

    // 判定処理
    checkResult();
}

// 勝敗・引き分けの判定処理
function checkResult() {
    let roundWon = false;

    for (let i = 0; i < WINNING_COMBINATIONS.length; i++) {
        const winCondition = WINNING_COMBINATIONS[i];
        let a = boardState[winCondition[0]];
        let b = boardState[winCondition[1]];
        let c = boardState[winCondition[2]];

        if (a === "" || b === "" || c === "") {
            continue;
        }

        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        statusDisplay.textContent = `プレイヤー ${currentPlayer} の勝利！🎉`;
        isGameActive = false;
        return;
    }

    // 引き分け判定
    let isDraw = !boardState.includes("");
    if (isDraw) {
        statusDisplay.textContent = "引き分けです！";
        isGameActive = false;
        return;
    }

    // プレイヤーの交代
    currentPlayer = currentPlayer === "〇" ? "✕" : "〇";
    statusDisplay.textContent = `${currentPlayer} の番です`;
}

// ゲームのリセット処理
function resetGame() {
    currentPlayer = "〇";
    boardState = ["", "", "", "", "", "", "", "", ""];
    isGameActive = true;
    statusDisplay.textContent = `${currentPlayer} の番です`;

    cells.forEach(cell => {
        cell.textContent = "";
        cell.classList.remove("circle", "cross");
    });
}

// イベントリスナーの設定
cells.forEach(cell => cell.addEventListener("click", handleCellClick));
resetButton.addEventListener("click", resetGame);