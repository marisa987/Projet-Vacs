$(document).ready(function () {
  
  setTimeout(function(){
    var monStockage = localStorage.getItem("id")
    displayRestiko(monStockage)
}, 1000);
    displayRestiko();
  });


  var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keytZYVQpRMxi42zo'}).base('appH5FRHk2Wsz2yCJ');

function displayRestiko(){
base('RESTIKO').select({
    maxRecords: 3000,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    records.forEach(function(record) {
        console.log('Retrieved', record.get('Date'));
        console.log("record", record);
        var restiko =
                '<div class="container" data-id="###restikoId###" style="background-color:green;">' +
                '<div class="card" style="background-color: rgb(135, 141, 161);">'+
                '<div class="card-header" style="text-align: left; font-size: 26px; font-weight: bold; background-color: rgb(102, 209, 215)" >###date###</div>'+
                '<div class="card-body">'+
                  '<h5 class="card-title">Ce que j\'\ai fait</h5>'+
                  '<p class="card-text">###fait###</p>'+
                  '<h5 class="card-title">Ce que j\'\ai appris </h5>'+
                  '<p class="card-text">###appris###</p>'+
                  '<h5 class="card-title">Ce que j\'\ai aimer</h5>'+
                  '<p class="card-text">###aimer###</p>'+
                  '<h5 class="card-title">Ce que j\'\ai utiliser de nouveaux</h5>'+
                  '<p class="card-text">###nouveau###</p>'+
                  '<h5 class="card-title">Problématique rencontrée</h5>'+
                  '<p class="card-text">###problématique###</p>'+
                  '<h5 class="card-title">Quels ont les objectifs</h5>'+
                  '<p class="card-text">###objectifs###</p>'+
                  '<h5 class="card-title">Qu\'\est ce qu\'\il m\'\a manquer</h5>'+
                  '<p class="card-text">###manquer###</p>'+
                  '<h5 class="card-title">Qu\'\est ce que je ferait à la place du formateur</h5>'+
                  '<p class="card-text">###formateur###</p>'+
                  '<h5 class="card-title">Objectif atteint ou pas</h5>'+
                  '<p class="card-text">###objectifsAtteint###</p>'+
                  '<div>'+
                  '<button type="button" class="btn btn-secondary" onclick="()">Modifier</button>'+
                  '<button type="button" class="btn btn-danger" onclick="deleteRestiko()">Supprimer</button>'+
                  '</div>'+
                '</div>'+
                '</div>'+
              '</div>';

        var allRestiko = "";
        allRestiko = restiko.replace("###date###", record.get("Date"))
        allRestiko = allRestiko.replace("###fait###", record.get("Ce que j'ai fait"))
        allRestiko = allRestiko.replace("###appris###", record.get("Ce que j'ai appris"))
        allRestiko = allRestiko.replace("###aimer###", record.get("Ce que j'ai aimé"))
        allRestiko = allRestiko.replace("###nouveau###", record.get("Ce que j'ai utilisé de nouveaux"))
        allRestiko = allRestiko.replace("###problématique###", record.get("Problématiques  rencontrées"))
        allRestiko = allRestiko.replace("###objectifs###", record.get("Quels sont les objectifs ?"))
        allRestiko = allRestiko.replace("###manquer###", record.get("Qu'est-ce qui m'a manqué ?"))
        allRestiko = allRestiko.replace("###formateur###", record.get("Qu'est-ce que tu ferais à la place du formateur ?"))
        allRestiko = allRestiko.replace("###objectifsAtteint###", record.get("Objectif atteint ou pas"))

        $("#details").prepend(allRestiko);
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { 
    console.error(err); 
    return; }
})
};