$(document).ready(function () {
  //init DateTimePickers
  // materialKit.initFormExtendedDatetimepickers();
  // // Sliders Init
  // materialKit.initSliders();

  displayVeille();
});

var Airtable = require('airtable');
var base = new Airtable({
  apiKey: 'keytZYVQpRMxi42zo'
}).base('appSirxoh9Jsjn57s');

function displayVeille() { //Afficher l'ensemble des Veilles//   
  base('Table 1').select({
    maxRecords: 1000,
    view: "Grid view"
  }).eachPage(function page(records, fetchNextPage) {
    records.forEach(function (record) {
      console.log("record", record);
      var veille =
        // '<div class="container" data-id="###veilleId###">' +
        // '<div class="card" style="width: 20rem;">' +
        // '<img class="card-img-top" src="###imageSrc###" alt="Card image cap">' +
        // '<div class="card-body">' +
        // '<div class="card-text date"> Date :</div>' +
        // '<div id="date">###date###</div><br>' +
        // '<div class="card-text sujet">Sujet :</div>' +
        // '<div id="sujet">###subject###</div><br>' +
        // '<div class="card-text synthese">Synthèse:</div>' +
        // '<div id="synthese">###synthese###</div><br>' +
        // '<div class="card-text commentaire">Commentaire :</div>' +
        // '<div id="commentaire">###commentaire###</div><br>' +
        // '<div class="card-text lien">Lien :</div>' +
        // '<div id="lien">###lien###</div><br>' +
        // '<a href="#0" class="btn btn-primary">Go somewhere</a>' +
        // '</div>' +
        // '</div>' +
        // '</div>' +
        // '<div id="returnButton" class="rounded-circle bg-warning fa fa-undo-alt" onclick="displayRetourAccueilVeille()"></div>';

        '<div class="container" data-id="###veilleId###">' +
        '<div class="card bg-dark text-white">'+
        '<img class="card-img" src="###imageSrc###" alt="Card image">'+
        '<div class="card-img-overlay">'+
        '<h5 class="card-title" id="sujet">Sujet :</h5>'+
        '<p class="card-text">###subject###</p>'+
        '<h5 class="card-title" id="sujet">Synthèse:</h5>'+
        '<p class="card-text">###synthese###</p>'+
        '<h5 class="card-title" id="sujet">Commentaire :</h5>'+
        '<p class="card-text">###commentaire###</p>'+
        '<h5 class="card-title" id="sujet">Lien :</h5>'+
        '<p class="card-text">###lien###</p>'+
        '</div>'+
        '</div>'+
         '</div>';
        var img = record.get("Image")
        img = img[0].url

      var allVeille = "";
      allVeille = veille.replace("###subject###", record.get("Subject"))
      allVeille = allVeille.replace("###date###", record.get("Date veille"))
      allVeille = allVeille.replace("###synthese###", record.get("Synthesis"))
      allVeille = allVeille.replace("###commentaire###", record.get("Comment"))
      allVeille = allVeille.replace("###lien###", record.get("Links"))
      allVeille = allVeille.replace("###imageSrc###", img)

      $("#veille").prepend(allVeille);
    });
    fetchNextPage();
  }, function done(err) {
    if (err) {
      console.error(err);
      return;
    }
  })
};



//         $("#img").find("img").attr("src",img);
//         $("#date").html(record.get("Date"));
//         $("#sujet").html(record.get("Subject"));
//         $("#synthese").html(record.get("Synthesis"));
//         $("#commentaire").html(record.get("Comment"));
//         $("#lien").html(record.get("Links")); 