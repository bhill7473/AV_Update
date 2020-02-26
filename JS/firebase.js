var config = {
  apiKey: apiKeyC,
  authDomain: authDomainC,
  databaseURL: databaseURLC,
  storageBucket: storageBucketC
};

firebase.initializeApp(config);

var contactData = firebase.database();

// 2. Populate Firebase Database with initial data (in this case, I did this via Firebase GUI)
// 3. Button for adding trains
$("#contactbtn").on("click", function(event) {
  // Prevent the default form submit behavior
  event.preventDefault()

    // Grabs user input
  var name = $("#name")
    .val()
    .trim();
  var email = $("#email")
    .val()
    .trim();
  var phone = $("#phone")
    .val()
    .trim();
      var brief = $("#brief")
    .val()
    .trim();
$('#myModal1').modal('hide');
if(name && email && phone&& brief){


  // Creates local "temporary" object for holding train data
  var newContact = {
    name: name,
    email: email,
    phone: phone,
    brief: brief
  };

  // Uploads train data to the database
  contactData.ref().push(newContact);

//   // Logs everything to console
  console.log(name);
  console.log(email);
  console.log(phone);
  console.log(brief);
  console.log(newContact.name);
console.log(newContact.email);

console.log(newContact.phone);
console.log(newContact.brief);

  // Alert
$('#myModal2').modal('toggle');

//   alert("We look forward to speaking with you soon!");

  // Clears all of the text-boxes
  $("#name").val("");
  $("#email").val("");
  $("#phone").val("");
  $("#brief").val("");

}else{
  $('#myModal3').modal('toggle');
}

});

// $("#contactbtn").on("click", function(event) {
//   // Prevent the default form submit behavior
//   event.preventDefault()

//   // Grabs user input
//   var name = $("#name")
//     .val()
//     .trim();
//   var email = $("#email")
//     .val()
//     .trim();
//   var phone = $("#phone")
//     .val()
//     .trim();
//       var brief = $("#brief")
//     .val()
//     .trim();

//   // Creates local "temporary" object for holding train data
//   var newContact = {
//     name: name,
//     email: email,
//     phone: phone,
//     brief: brief
//   };

//   // Uploads train data to the database
//   contactData.ref().push(newContact);

// //   // Logs everything to console
//   console.log(name);
//   console.log(email);
//   console.log(phone);
//   console.log(brief);
//   console.log(newContact.name);
// console.log(newContact.email);

// console.log(newContact.phone);
// console.log(newContact.brief);

//   // Alert
// $('#myModal').modal('toggle');
// //   alert("We look forward to speaking with you soon!");

//   // Clears all of the text-boxes
//   $("#name").val("");
//   $("#email").val("");
//   $("#phone").val("");
//   $("#brief").val("");
// });
$("#contacts1").on("click", function(event) {
     event.preventDefault()
$('#myModal1').modal('toggle');

});