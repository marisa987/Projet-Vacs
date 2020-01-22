function base(){
    $("#accueil").hide();
    $("#monter").hide();
    $("#haut").hide();
    $("#pttBout").hide();
    $("#tête").hide();
    $("#corps").hide();
    $("#base").show();
}
function monter(){
    $("#haut").hide();
    $("#pttBout").hide();
    $("#tête").hide();
    $("#corps").hide();
    $("#base").show();
    $("#monter").show();
}
function haut(){
    $("#pttBout").hide();
    $("#tête").hide();
    $("#corps").hide();
    $("#base").show();
    $("#monter").show();
    $("#haut").show();
}
function pttBout(){
    $("#tête").hide();
    $("#corps").hide();
    $("#base").show();
    $("#monter").show();
    $("#haut").show();
    $("#pttBout").show();
}
function tête(){
    $("#corps").hide();
    $("#base").show();
    $("#monter").show();
    $("#haut").show();
    $("#pttBout").show();
    $("#tête").show();
}
function corps(){
    $("#base").show();
    $("#monter").show();
    $("#haut").show();
    $("#pttBout").show();
    $("#tête").show();
    $("#corps").show();
}
function abandonner(){
    $("#monter").hide();
    $("#haut").hide();
    $("#pttBout").hide();
    $("#tête").hide();
    $("#corps").hide();
    $("#base").hide();
    $("#accueil").show();
}