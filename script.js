var map = L.map("map").setView([-37.837649, 144.872128], 15);

// Stes the map
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  minZoom: 15,
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
  title: "rocks",
}).addTo(map);

rocks.bindPopup(
  "<h3>Rock Bridge</h3> <a class='pageshift' href='Further/rock.html'><img class='linkimg' src='Images/inside.jpg'></a> <br> <audio controls src='contwent/websiteadd.mp3' type=audio/mp3>",
  {
    maxWidth: 190,
  }
);
// Single quotations for HTML

var entrance = L.marker([-37.839615, 144.871838]).addTo(map);
entrance.bindPopup("this is the entrance");
