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
        // '<div class="card mb-1">'+
        //   '<img class="card-img-top" src="###imageSrc###" alt="Card image cap">'+
        //   '<div class="card-body">'+
        //     '<h4 class="card-title" id="sujet">###subject###</h4>'+
        //     '<a href="#0" class="btn btn-primary" onclick="displayConsulter()">Voir</a>' +
        //   '</div>'+
        // '</div>'+
        // '</div>';

        // '<div class="container" data-id="###veilleId###">' +
        // '<div class="card">'+
        //     '<div class="card-body">'+
        //     '<h4 class="card-title" id="sujet">###subject###</h4>'+
        //     '<a href="#consulter" class="btn btn-primary button1" onclick="displayConsulter()">Voir</a>' +
        // '</div>'+
        //      '<img class="card-img-bottom" src="###imageSrc###" alt="Card image cap"/>'+
        // '</div>'+
        // '</div>';

        '<div class="container" data-id="###veilleId###">' +
        '<div class="card bg-dark text-white">'+
        '<img class="card-img" src="###imageSrc###" alt="Card image">'+
        '<div class="card-img-overlay">'+
            '<h4 class="card-title" id="sujet">###subject###</h4>'+
            '<p class="card-text">Last updated 3 mins ago</p>'+
            '<a href="#" class="btn btn-primary button1" onclick="displayConsulter()">Voir</a>' +

        '</div>'+
        '</div>'+
         '</div>';

          var img = record.get("Image")
          img = img[0].url
  
        var allVeille = "";
        allVeille = veille.replace("###subject###", record.get("Subject"))
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