function changeValue(row, col, val) {
    frequency.zone[zoneMatrix[row][col]][table[row][col]]--;
    frequency.row[row][table[row][col]]--;
    frequency.col[col][table[row][col]]--;
    if (table[row][col] == 0) {
        zeroCount--;
    }
    table[row][col] = val;
    frequency.zone[zoneMatrix[row][col]][table[row][col]]++;
    frequency.row[row][table[row][col]]++;
    frequency.col[col][table[row][col]]++;
    if (table[row][col] == 0) {
        zeroCount++;
    }
    changeSolveButton();
}

function changeSolveButton() {
    if (checkValidity() != 0) {
        if (81 - zeroCount >= 16) {
            document.getElementById("solveButton").setAttribute("onclick", "solveTable(1, 1);");
            document.getElementById("solveButton").title = "Solve the table";
            document.getElementById("solveButton").style.filter = "grayscale(0%)";
            document.getElementById("solveButton").style.cursor = "pointer";
        }
        else {
            document.getElementById("solveButton").setAttribute("onclick", "");
            document.getElementById("solveButton").title = "Your table must have at least 16 non-null values";
            document.getElementById("solveButton").style.filter = "grayscale(35%)";
            document.getElementById("solveButton").style.cursor = "default";
        }
    }
    else {
        if (81 - zeroCount >= 16) {
            document.getElementById("solveButton").setAttribute("onclick", "");
            document.getElementById("solveButton").title = "Your table is invalid";
            document.getElementById("solveButton").style.filter = "grayscale(35%)";
            document.getElementById("solveButton").style.cursor = "default";
        }
        else {
            document.getElementById("solveButton").setAttribute("onclick", "");
            document.getElementById("solveButton").title = "Your table is invalid and has less than 16 non-null values";
            document.getElementById("solveButton").style.filter = "grayscale(35%)";
            document.getElementById("solveButton").style.cursor = "default";
        }
    }
}

function renderSquare(row, col) {
    document.getElementById("square_" + row + col).value = table[row][col];
}

function renderTable() {
    for (var row = 1; row <= 9; ++row) {
        for (var col = 1; col <= 9; ++col) {
            renderSquare(row, col); 
        }
    }
}

function changeInput(id) {
    var id = parseInt(id, 10);
    var row = id / 10;
    row = Math.floor(row);
    var col = id % 10;
    col = Math.floor(col);
    var squareValue = document.getElementById("square_" + id).value;
    
    firstValue = squareValue[0] - '0';
    secondValue = squareValue[1] - '0';
    if (firstValue != table[row][col]) {
        [firstValue, secondValue] = [secondValue, firstValue];
    }
    if (secondValue >= 0 && secondValue <= 9) {
        changeValue(row, col, secondValue);
    }
    else {
        if (firstValue >= 0 && firstValue <= 9) {
            changeValue(row, col, firstValue);
        }
        else {
            changeValue(row, col, 0);
        }
    }
    renderSquare(row, col);
    validTable = checkValidity();
}
