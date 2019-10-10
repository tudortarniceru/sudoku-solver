table = [];
solvedTable = [];
zoneMatrix = [];
for (var row = 1; row <= 9; ++row) {
    table[row] = [];
    solvedTable[row] = [];
    zoneMatrix[row] = [];
    for (var col = 1; col <= 9; ++col) {
        table[row][col] = 0;
        solvedTable[row][col] = 0;
        zoneMatrix[row][col] = 0;
    }
}