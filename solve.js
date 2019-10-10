var frequency = {zone: [], row: [], col: []};
frequency.zone = [];
frequency.row = [];
frequency.col = []
for (var i = 1; i <= 9; ++i) {
    frequency.zone[i] = [9];
    frequency.row[i] = [9];
    frequency.col[i] = [9];
    for (var j = 1; j <= 9; ++j) {
        frequency.zone[i][j] = 0;
        frequency.row[i][j] = 0;
        frequency.col[i][j] = 0;
    }
}

var zeroCount = 81;
var validTable = 1;
var solved = 0;

function changeSquareColor(color) {
    var list = document.getElementsByClassName("square");
    for (var square = 0; square < list.length; ++square) {
        list[square].style.color = color;
    }
}

function checkValidity() {
    for (var i = 1; i <= 9; ++i) {
        for (var j = 1; j <= 9; ++j) {
            if (frequency.zone[i][j] > 1 || frequency.row[i][j] > 1 || frequency.col[i][j] > 1) {
                changeSquareColor("#b64201");
                document.getElementById("validButton").style.backgroundColor = "#b64201";
                document.getElementById("validButton").innerHTML = '<i class="fas fa-times"></i>';
                document.getElementById("validButton").title = "The board configuration is invalid";
                return 0;
            }
        }
    }
    if (zeroCount > 0) {
        changeSquareColor("rgb(59, 59, 59)");
        document.getElementById("validButton").style.backgroundColor = "#db8200";
        document.getElementById("validButton").innerHTML = '<i class="fas fa-check"></i>';
        document.getElementById("validButton").title = "The board configuration is valid";
        return 1;
    }
    changeSquareColor("#508104");
    document.getElementById("validButton").style.backgroundColor = "#508104";
    document.getElementById("validButton").innerHTML = '<i class="fas fa-check"></i>';
    document.getElementById("validButton").title = "The board is solved";
    return 2;
}

function solveTable() {
    if (validTable == 1) {
        backtrack(1, 1);
        if (zeroCount > 0) {
            document.getElementById("validButton").style.backgroundColor = "#b64201";
            document.getElementById("validButton").innerHTML = '<i class="fas fa-check"></i>';
            document.getElementById("validButton").title = "The board can't be solved";
        }
    }
}

function backtrack(row, col) {
    if (validTable != 2) {
        if (row > 9) {
            solved++;
            renderTable();
            validTable = checkValidity();
        }
        else {
            var nextRow = row;  
            var nextCol = col + 1;
            if (nextCol > 9) {
                nextRow++;
                nextCol = 1;
            }
            if (table[row][col] == 0) {
                if (validTable != 2) {
                    for (var val = 1; val <= 9; ++val) {
                        if (validTable != 2) {
                            changeValue(row, col, val);
                            if (checkValidity() != 0) {
                                backtrack(nextRow, nextCol);
                            }
                        }
                    }
                    if (validTable != 2) {
                        changeValue(row, col, 0);
                    }
                }
            }
            else {
                backtrack(nextRow, nextCol);
            }
        }
    }
}