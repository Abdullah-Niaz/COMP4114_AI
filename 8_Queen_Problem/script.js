const boardElement = document.getElementById('board');
const solveBtn = document.getElementById('solveBtn');
const resetBtn = document.getElementById('resetBtn');

let board = Array(8).fill(null).map(() => Array(8).fill(0));

// Create Chessboard
function createBoard() {
    boardElement.innerHTML = '';
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.classList.add((i + j) % 2 === 0 ? 'white' : 'black');
            cell.dataset.row = i;
            cell.dataset.col = j;
            boardElement.appendChild(cell);
        }
    }
}

// Place Queens on Board
function renderBoard() {
    createBoard();
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const cell = boardElement.querySelector(`[data-row='${i}'][data-col='${j}']`);
            cell.textContent = board[i][j] === 1 ? '♛' : '';
            cell.classList.remove('conflict');
        }
    }
    highlightConflicts();
}

// Check conflicts for CSP
function highlightConflicts() {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (board[i][j] === 1) {
                for (let k = 0; k < 8; k++) {
                    if (k !== j && board[i][k] === 1) boardElement.querySelector(`[data-row='${i}'][data-col='${k}']`).classList.add('conflict');
                    if (k !== i && board[k][j] === 1) boardElement.querySelector(`[data-row='${k}'][data-col='${j}']`).classList.add('conflict');
                }
                for (let k = -7; k <= 7; k++) {
                    if (i + k >= 0 && i + k < 8 && j + k >= 0 && j + k < 8 && k !== 0 && board[i + k][j + k] === 1)
                        boardElement.querySelector(`[data-row='${i + k}'][data-col='${j + k}']`).classList.add('conflict');
                    if (i + k >= 0 && i + k < 8 && j - k >= 0 && j - k < 8 && k !== 0 && board[i + k][j - k] === 1)
                        boardElement.querySelector(`[data-row='${i + k}'][data-col='${j - k}']`).classList.add('conflict');
                }
            }
        }
    }
}

// Solve 8-Queens using backtracking (CSP style)
function solveQueens(col = 0) {
    if (col >= 8) return true;
    for (let row = 0; row < 8; row++) {
        if (isSafe(row, col)) {
            board[row][col] = 1;
            if (solveQueens(col + 1)) return true;
            board[row][col] = 0; // backtrack
        }
    }
    return false;
}

// Check if placing a queen is safe
function isSafe(row, col) {
    for (let i = 0; i < col; i++) {
        if (board[row][i] === 1) return false;
    }
    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] === 1) return false;
    }
    for (let i = row, j = col; i < 8 && j >= 0; i++, j--) {
        if (board[i][j] === 1) return false;
    }
    return true;
}

// Button Events
solveBtn.addEventListener('click', () => {
    board = Array(8).fill(null).map(() => Array(8).fill(0));
    solveQueens();
    renderBoard();
});

resetBtn.addEventListener('click', () => {
    board = Array(8).fill(null).map(() => Array(8).fill(0));
    renderBoard();
});

// Initial board
createBoard();

