// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Reservation and Waitlist (DATA)
// =============================================================
var reservations = [
  {
    reservedId: "A15",
    name: "Louis",
    email: "louis.h.trinh@gmail.com",
    phone: "5103309192",
  },
  {
    reservedId: "B16",
    name: "Eli",
    email: "e.l.i@gmail.com",
    phone: "4080808080",
  },
  {
    reservedId: "C17",
    name: "Richard",
    email: "richardluong127@gmail.com",
    phone: "5100105050",
  },
  {
    reservedId: "C17",
    name: "Tina",
    email: "trantiinaa@gmail.com",
    phone: "6105103102",
  }
  
  
];

var waitlist = [
  {
    name: "Josh",
    email: "joshmckenney@gmail.com",
    phone: "911922933944",
  }
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/makeReservation", function(req, res) {
  res.sendFile(path.join(__dirname, "/public/form.html"));
});

app.get("/viewReservation", function(req, res) {
  res.sendFile(path.join(__dirname, "/public/view.html"));
});

// Generate all reservation info an endpoint
app.get("/reservationInfo", function(req, res) {
  return res.json(reservations);
});

// Generate all reservation info an endpoint
app.get("/waitlistInfo", function(req, res) {
  return res.json(waitlist);
});

// Displays a single character, or returns false
// app.get("/api/characters/:character", function(req, res) {
//   var chosen = req.params.character;

//   console.log(chosen);

//   for (var i = 0; i < characters.length; i++) {
//     if (chosen === characters[i].routeName) {
//       return res.json(characters[i]);
//     }
//   }

//   return res.json(false);
// });

// Make new reservation
app.post("/reservationInfo", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newCustomer = req.body;

  if (reservations.length<5){
    reservations.push(newCustomer);
    console.log("New reservation added")
  } else {
    waitlist.push(newCustomer);
    console.log("No more reservation spots. New customer added to waitlist")
  }
  res.json(newCustomer);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
