function createTable() {
    var add = "";
    for (var zone = 1; zone <= 9; ++zone) {
        add += "<div class='zone' id='zone_" + zone + "'>"
        for (var row = 1; row <= 3; ++row) {
            for (var col = 1; col <= 3; ++col) {
                var newRow = Math.floor((zone - 1) / 3) * 3 + row;
                var newCol = Math.floor((zone - 1) % 3) * 3 + col;
                var id = newRow + "" + newCol;
                zoneMatrix[newRow][newCol] = zone;
                add += "<input type='text' class='square' id='square_" + id + "' oninput='changeInput(" + id + ")' onblur='resetCurrentPosition()' onfocus='changeCurrentPosition(" + newRow + ", " + newCol + ")' maxlength='2' value='0'>";
            }
        }
        add += "</div>";
    }
    document.getElementById("board").innerHTML = add;
}