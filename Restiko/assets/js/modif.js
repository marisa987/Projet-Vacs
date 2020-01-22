var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keytZYVQpRMxi42zo'}).base('appH5FRHk2Wsz2yCJ');

function recup(){
    base('RESTIKO').find(function(){
    
    $("#date").val(record.get("Date"));
    $("#fais").val(record.get("Ce que j'ai fait"));
    $("#appris").val(record.get("Ce que j'ai appris"));
    $("#aimer").val(record.get("Ce que j'ai aimé"));
    $("#utiliser").val(record.get("Ce que j'ai utilisé de nouveaux"));
    $("#probleme").val(record.get("Problématiques  rencontrées"));
    $("#objectif").val(record.get("Quels sont les objectifs"));
    $("#manque").val(record.get("Qu'est-ce qui m'a manqué ?"));
    $("#fomateur").val(record.get("Qu'est-ce que tu ferais à la place du formateur ?"));
    $("#objectifAtteint").val(record.get("Objectif atteint ou pas"));
    }
    );
}

function modif(){
    var restikoId = localStorage.getItem("id");
    console.log("")
  
    };

base('RESTIKO').update([
  {
      "id": restikoId,
    "fields": {
        "Date": $("#date").val(),
        "Ce que j'ai fait": $("#fais").val(),
        "Ce que j'ai appris": $("#appris").val(),
        "Ce que j'ai aimé":  $("#aimer").val(),
        "Ce que j'ai utilisé de nouveaux": $("#utiliser").val(),
        "Problématiques  rencontrées": $("#probleme").val(),
        "Quels sont les objectifs ?": $("#objectif").val(),
        "Qu'est-ce qui m'a manqué ?": $("#manque").val(),
        "Qu'est-ce que tu ferais à la place du formateur ?": $("#fomateur").val(),
        "Objectif atteint ou pas": $("#objectifAtteint").val(),
}}
], function(err, records) {
  if (err) {
    console.error(err);
    return;
  }
  records.forEach(function(record) {
    console.log(record.get('Date'));
  });
});