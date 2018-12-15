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

// Star Wars Characters (DATA)
// =============================================================
var characters = [
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
app.get("/servationInfo", function(req, res) {
  return res.json(characters);
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
/* app.post("/api/characters", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newcharacter = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

  console.log(newcharacter);

  characters.push(newcharacter);

  res.json(newcharacter);
}); */

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
