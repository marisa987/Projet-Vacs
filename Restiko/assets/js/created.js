var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keytZYVQpRMxi42zo'}).base('appH5FRHk2Wsz2yCJ');

var tab1 = [];

var templateRestiko =
'<div class="container" data-id="###restikoId###">' +
                '<div class="card">'+
                '<div class="card-header">###date###</div>'+
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
                '</div>'+
                '</div>' +
              '</div>';
function created(){
  console.log("")

  var nouveauRestiko = {
    date : $("#date").val(),
    fait : $("#fais").val(),
    apprendre : $("#appris").val(),
    aimer : $("#aimer").val(),
    utiliser : $("#utiliser").val(),
    probleme : $("#probleme").val(),
    objectif : $("#objectif").val(),
    manque : $("#manque").val(),
    formateur : $("#fomateur").val(),
    objectifAtteint : $("#objectifAtteint").val(),

  };
  console.log("nouveauRestiko", nouveauRestiko)
  base('RESTIKO').create([
    {
  
      "fields": {
        "Date": nouveauRestiko.date,
        "Ce que j'ai fait": nouveauRestiko.fait,
        "Ce que j'ai appris": nouveauRestiko.apprendre,
        "Ce que j'ai aimé": nouveauRestiko.aimer,
        "Ce que j'ai utilisé de nouveaux": nouveauRestiko.utiliser,
        "Problématiques  rencontrées": nouveauRestiko.probleme,
        "Quels sont les objectifs ?": nouveauRestiko.objectif,
        "Qu'est-ce qui m'a manqué ?": nouveauRestiko.manque,
        "Qu'est-ce que tu ferais à la place du formateur ?": nouveauRestiko.formateur,
        "Objectif atteint ou pas": nouveauRestiko.objectifAtteint,
      }
    }
  ],
  );

  var nouveauRestiko1 = templateRestiko.replace("######date###",nouveauRestiko.date);
  nouveauRestiko1 = nouveauRestiko1.replace("###fait###",nouveauRestiko.fait);
  nouveauRestiko1 = nouveauRestiko1.replace("###appris###",nouveauRestiko.apprendre);
  nouveauRestiko1 = nouveauRestiko1.replace("###aimer###",nouveauRestiko.aimer);
  nouveauRestiko1 = nouveauRestiko1.replace("###nouveau###",nouveauRestiko.utiliser);
  nouveauRestiko1 = nouveauRestiko1.replace("###problématique###",nouveauRestiko.probleme);
  nouveauRestiko1 = nouveauRestiko1.replace("###objectifs###",nouveauRestiko.objectif);
  nouveauRestiko1 = nouveauRestiko1.replace("###manquer###",nouveauRestiko.manque);
  nouveauRestiko1 = nouveauRestiko1.replace("###formateur###",nouveauRestiko.formateur);
  nouveauRestiko1 = nouveauRestiko1.replace("###objectifsAtteint###",nouveauRestiko.objectifAtteint);

  $("restiko").append(nouveauRestiko1);
  setTimeout(function () {
    document.location.reload(true);
  }, 500);
}

function nul(err, records) {
    if (err) {
      console.error(err);
      return;
    }
    records.forEach(function (record) {
      console.log(record.getId());
    });
  };