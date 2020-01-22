var currentPlayer;
var gameStarted = false;
var gameGrid = [
    ["","",""],
    ["","",""],
    ["","",""]
];

function initGameGrid() {
    gameGrid = [
        ["","",""],
        ["","",""],
        ["","",""]
    ];
}

function startGame() {
    gameStarted = true;
    currentPlayer = "X";
    initGameGrid();
    $(".signed").html("");
    $(".bg-success").removeClass("bg-success text-white");
    $("#playButton").hide();
    $("#currentPlayer").html("Joueur " + currentPlayer);
}

function updateGameGrid(indexa, indexb) {
    gameGrid[indexa][indexb] = currentPlayer;
}

function checkIfWin() {
    var win = false;
    
    if(gameGrid[0][0] == currentPlayer && gameGrid[0][1] == currentPlayer && gameGrid[0][2] == currentPlayer){
        win = true;
        $("#signed00").addClass("bg-success text-white");
        $("#signed01").addClass("bg-success text-white");
        $("#signed02").addClass("bg-success text-white");
    } else if(gameGrid[1][0] == currentPlayer && gameGrid[1][1] == currentPlayer && gameGrid[1][2] == currentPlayer){
        win = true;
        $("#signed10").addClass("bg-success text-white");
        $("#signed11").addClass("bg-success text-white");
        $("#signed12").addClass("bg-success text-white");
    } else if(gameGrid[2][0] == currentPlayer && gameGrid[2][1] == currentPlayer && gameGrid[2][2] == currentPlayer){
        win = true;
        $("#signed20").addClass("bg-success text-white");
        $("#signed21").addClass("bg-success text-white");
        $("#signed22").addClass("bg-success text-white");
    } else if(gameGrid[0][0] == currentPlayer && gameGrid[1][0] == currentPlayer && gameGrid[2][0] == currentPlayer){
        win = true;
        $("#signed00").addClass("bg-success text-white");
        $("#signed10").addClass("bg-success text-white");
        $("#signed20").addClass("bg-success text-white");
    } else if(gameGrid[0][1] == currentPlayer && gameGrid[1][1] == currentPlayer && gameGrid[2][1] == currentPlayer){
        win = true;
        $("#signed01").addClass("bg-success text-white");
        $("#signed11").addClass("bg-success text-white");
        $("#signed21").addClass("bg-success text-white");
    } else if(gameGrid[0][2] == currentPlayer && gameGrid[1][2] == currentPlayer && gameGrid[2][2] == currentPlayer){
        win = true;
        $("#signed02").addClass("bg-success text-white");
        $("#signed12").addClass("bg-success text-white");
        $("#signed22").addClass("bg-success text-white");
    } else if(gameGrid[0][0] == currentPlayer && gameGrid[1][1] == currentPlayer && gameGrid[2][2] == currentPlayer){
        win = true;
        $("#signed00").addClass("bg-success text-white");
        $("#signed11").addClass("bg-success text-white");
        $("#signed22").addClass("bg-success text-white");
    } else if(gameGrid[0][2] == currentPlayer && gameGrid[1][1] == currentPlayer && gameGrid[2][0] == currentPlayer){
        win = true;
        $("#signed02").addClass("bg-success text-white");
        $("#signed11").addClass("bg-success text-white");
        $("#signed20").addClass("bg-success text-white");
    } else win = false;
    
    return win;
}

$(".signed").on("click", function(){
    if(gameStarted) {
        $(this).html(currentPlayer);
        var indexa = $(this).attr("data-indexa");
        var indexb = $(this).attr("data-indexb");
        updateGameGrid(indexa, indexb);
        if(checkIfWin()) {
            $("#currentPlayer").html("Joueur " + currentPlayer + " a gagné");
            $("#playButton").html("Rejouer").show();
        } else {
            currentPlayer = (currentPlayer == "X") ? "O" : "X";
            $("#currentPlayer").html("Joueur " + currentPlayer);
        }
    } else {
        alert("Cliquez sur le bouton JOUER!");
    }
})