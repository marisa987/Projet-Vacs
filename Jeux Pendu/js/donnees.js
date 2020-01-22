var Airtable = require('airtable');
var base = new Airtable({
    apiKey: 'keyV3yJvN7T4rdlhW'
}).base('apphy8Mmd20q9vwul');

var tab1 = [];

var templateRestiko = 
'<div class="row">' +
                        '<div class="card bg-light shadow w-100">' +
                            '<div class="card-body">' +
                                '<h5 class="card-title mb-3"><b>Nom</b> Prénom</h5>' +
                               '<h2 style="text-align: center;">Mes Restiko</h2>' +
                            '</div>' +
                        '</div>' +
                      '<div class="card" style="width: 18rem;">' +
                            '<div class="card-body">' +
                          '<h5 class="card-title">Date:</h5>' +
                          '<p class="card-text">Ce que j'ai fais:</p>' +
                          '<p class="card-text">Ce que j'ai appris:<p>' +
                          '<p class="card-text">Ce que j'ai aimée:</p>' +
                          '<p class="card-text">Ce que j'ai utiliser de nouveau:</p>' +
                            '</div>'+
                        '</div>' +
                '</div>' +
;

function sumbmitDocument() {
    var nomClient = $("#clientParticulierNom").val(); //nommer la variable nomClient pr id clientParticulierNom

    base('').create([{
            "fields": {
                "client_nom": nomClient,
            }
        },
    ], 
    );
    
    var nouveauRestiko = templateRestiko.replace("###clientNuméro###", nomClient);
    nouveauRestiko = nouveauRestiko.replace("###prenomClient###", prenomClient);

  $("#templateRestiko").append(nouveauRestiko);
}
function retrieveData() {
    base('Client').select({
        // Selecting the first 50 records in Grid view:
        maxRecords: 50,
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
        // This function (page) will get called for each page of records.

        records.forEach(function (record) {
            console.log('Retrieved', record.get('id'));
            var nomClient = record.get("nom_Client");

            var nouveauRestiko = templateRestiko.replace("###nomClient###",nomClient);
            nouveauRestiko = nouveauRestiko.replace("###prenomClient###", prenomClient );
          
            $("#cardNouveuRestiko").append(nouveauRestiko);
            tab1.push(record.get("colis_Client"));
            console.log(tab1);

            

        });