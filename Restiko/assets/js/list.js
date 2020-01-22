// $(document).ready(function () {
  
//     listRestiko();
//   });
//   var Airtable = require('airtable');
// var base = new Airtable({apiKey: 'keytZYVQpRMxi42zo'}).base('appH5FRHk2Wsz2yCJ');

// function listRestiko(){
// base('RESTIKO').select({
//     maxRecords: 3000,
//     view: "Grid view"
// }).eachPage(function page(records, fetchNextPage) {
//     records.forEach(function(record) {
//         console.log('Retrieved', record.get('Date'));
//         console.log("record", record);

//         var list =
//         '<div class="mx-auto" style="width: 200px;" data-id="###restikoId###">'+
//         '<ul class="list-group list-group-horizontal-sm">'+
//         '<li class="list-group-item">###date###</li>'+
//         '<li class="list-group-item">###fait###</li>'+
//         '</ul>'+
//         '</div>';

//         var allRestiko2 = "";
//         allRestiko2 = list.replace("###date###", record.get("Date"))
//         allRestiko2 = allRestiko2.replace("###fait###", record.get("Ce que j'ai fait"))

//         $("#list").prepend(allRestiko2);
//     });
//     fetchNextPage();

// }, function done(err) {
//     if (err) { 
//     console.error(err); 
//     return; }
// })
// };
