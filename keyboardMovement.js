var currentRow = 0;
var currentCol = 0;

function resetCurrentPosition() {
    currentRow = 0;
    currentCol = 0;
}

function changeCurrentPosition(row, col) {
    currentRow = row;
    currentCol = col;
}

document.onkeydown = keyboardListener;

function keyboardListener(key) {
    if (key.code == "ArrowLeft" || key.code == "ArrowRight" || key.code == "ArrowUp" || key.code == "ArrowDown") {
        if (currentRow != 0 && currentCol != 0) {
            if (key.code == "ArrowLeft") {
                if (currentCol > 1) {
                    currentCol--;
                }
            }
            else if (key.code == "ArrowRight") {
                if (currentCol < 9) {
                    currentCol++;
                }
            }   
            else if (key.code == "ArrowUp") {
                if (currentRow > 1) {
                    currentRow--;
                }
            }
            else if (key.code == "ArrowDown") {
                if (currentRow < 9) {
                    currentRow++;
                }
            }
            document.getElementById("square_" + currentRow + currentCol).focus();
        }
    }
    else if (key.code == "Backspace") {
        if (currentRow != 0 && currentCol != 0) {
            document.getElementById("square_" + currentRow + currentCol).value = 0;
        }   
    }
}

