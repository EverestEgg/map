var map = L.map('map').setView([-37.837649, 144.872128], 16);

// Stes the map
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    minZoom: 17,
    maxZoom: 19,
    setMaxBounds:([[-37.83321, 144.86804],[-37.84122,144.87660]]),
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// The markers and ther popups
var rocks = L.marker([-37.838217, 144.873405], [title ='rocks']).addTo(map);
rocks.bindPopup("Rock Bridge <a href='Further/rock.html'><img src='contwent/inside.jpg'></a>  <audio controls src='contwent/217138__lonemonk__1964-chrysler-horn-honk-short.mp3' type=audio/mp3>");
// Single quotations for HTML

var entrance = L.marker([-37.839615, 144.871838]).addTo(map);
entrance.bindPopup("this is the entrance")