function next() {
  window.location.href = "../map/map.html";
  //pls work
}
function about() {
  window.location.href = "../map/about.html";
}
function credits() {
  window.location.href = "../map/credit.html";
}

//MAP STUFF
var map = L.map("map").setView([-37.837649, 144.872128], 15);

// Stes the map
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  minZoom: 13,
  maxZoom: 20,
  setMaxBounds: [
    [-37.83321, 144.86804],
    [-37.84122, 144.8766],
  ],
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// The markers and ther popups
var rocks = L.marker([-37.838217, 144.873405], {
  title: "Rock Bridge",
}).addTo(map);

rocks.bindPopup(
  "<h3>Rock Bridge</h3> <a class='pageshift' href='Further/rock.html'><img class='linkimg' src='Images/rockbridge_frount.jpg'></a> <br> <audio controls src='/audio/rock12.53.mp3' type=audio/mp3>",
  {
    maxWidth: 190,
  }
);
// Single quotations for HTML

var entrance = L.marker([-37.839615, 144.871838], {
  title: "Entrance",
}).addTo(map);

entrance.bindPopup(
  "<h3>Entrance</h3> <a class='pageshift' href='Further/entrance.html'><img class='linkimg' src='Images/Entrane_Frount.jpg'></a> <br> <audio controls src='/audio/entrance1.25.mp3' type=audio/mp3>",
  {
    maxWidth: 190,
  }
);

var BirdHide = L.marker([-37.8364, 144.873222], {
  title: "Bird Hide",
}).addTo(map);

BirdHide.bindPopup(
  "<h3>Bird Hide</h3> <a class='pageshift' href='Further/birds.html'><img class='linkimg' src='Images/inside.jpg'></a> <br> <audio controls src='/audio/bird12.21.mp3' type=audio/mp3>",
  {
    maxWidth: 190,
  }
);

var Quarry = L.marker([-37.8390195, 144.8746423], {
  title: "Quarry",
}).addTo(map);

Quarry.bindPopup(
  "<h3>Quarry</h3> <a class='pageshift' href='Further/quarry.html'><img class='linkimg' src='Images/inside.jpg'></a> <br> <audio controls src='/audio/quarry1.06.mp3' type=audio/mp3>",
  {
    maxWidth: 190,
  }
);

var Playground = L.marker([-37.839938, 144.870513], {
  title: "Playground",
}).addTo(map);

Playground.bindPopup(
  "<h3>Playground</h3> <a class='pageshift' href='Further/playground.html'><img class='linkimg' src='Images/park_frount.jpg'></a> <br> <audio controls src='/audio/playground11.45.mp3' type=audio/mp3>",
  {
    maxWidth: 190,
  }
);

var BushDance = L.marker([-37.838424, 144.871618], {
  title: "Bush Dance",
}).addTo(map);

BushDance.bindPopup(
  "<h3>Bush Dance</h3> <a class='pageshift' href='Further/Bushdance.html'><img class='linkimg' src='Images/Bushdance_fround.jpg'></a> <br> <audio controls src='audio/BushDance_12.5.mp3' type=audio/mp3>",
  {
    maxWidth: 190,
  }
);

var Fonl = L.marker([-37.8394858, 144.8724858], {
  title: "Friends of Newport Lakes",
}).addTo(map);

Fonl.bindPopup(
  "<h3>Friends of Newport Lakes</h3> <a class='pageshift' href='Further/fnl.html'><img class='linkimg' src='Images/fnl_frount.jpg'></a> <br> <audio controls src='/audio/fnl1.18.mp3' type=audio/mp3>",
  {
    maxWidth: 190,
  }
);

var Swans = L.marker([-37.8366276, 144.874582], {
  title: "Swans",
}).addTo(map);

Swans.bindPopup(
  "<h3>Swans</h3> <a class='pageshift' href='Further/swans.html'><img class='linkimg' src='Images/Swan_Frount.jpg'></a> <br> <audio controls src='/audio/swans12.29.mp3' type=audio/mp3>",
  {
    maxWidth: 190,
  }
);

var COVID = L.marker([-37.83764, 144.872962], {
  title: "COVID",
}).addTo(map);

COVID.bindPopup(
  "<h3>COVID</h3> <a class='pageshift' href='Further/covid.html'><img class='linkimg' src='Images/inside.jpg'></a> <br> <audio controls src='/audio/covid12.10.mp3' type=audio/mp3>",
  {
    maxWidth: 190,
  }
);

var Tip = L.marker([-37.836702, 144.871143], {
  title: "Tip",
}).addTo(map);

Tip.bindPopup(
  "<h3>Tip</h3> <a class='pageshift' href='Further/tip.html'><img class='linkimg' src='Images/inside.jpg'></a> <br> <audio controls src='/audio/dog11.56.mp3' type=audio/mp3>",
  {
    maxWidth: 190,
  }
);
