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
  title: "Rock Bridge",
}).addTo(map);

rocks.bindPopup(
  "<h3>Rock Bridge</h3> <a class='pageshift' href='Further/rock.html'><img class='linkimg' src='Images/inside.jpg'></a> <br> <audio controls src='/audio/websiteadd.mp3' type=audio/mp3>",
  {
    maxWidth: 190,
  }
);
// Single quotations for HTML

var entrance = L.marker([-37.839615, 144.871838], {
  title: "Entrance"
}).addTo(map);

entrance.bindPopup(
  "<h3>Entrance</h3> <a class='pageshift' href='Further/rock.html'><img class='linkimg' src='Images/inside.jpg'></a> <br> <audio controls src='/audio/websiteadd.mp3' type=audio/mp3>",
    {
      maxWidth: 190,
    }
  );

  var BirdHide = L.marker([-37.836400, 144.873222], {
    title: "Bird Hide"
  }).addTo(map);

  BirdHide.bindPopup(
    "<h3>Bird Hide</h3> <a class='pageshift' href='Further/rock.html'><img class='linkimg' src='Images/inside.jpg'></a> <br> <audio controls src='/audio/websiteadd.mp3' type=audio/mp3>",
    {
      maxWidth: 190,
    }
  );

  var Quarry = L.marker([-37.8390195, 144.8746423], {
    title: "Quarry"
  }).addTo(map);

Quarry.bindPopup(
    "<h3>Quarry</h3> <a class='pageshift' href='Further/rock.html'><img class='linkimg' src='Images/inside.jpg'></a> <br> <audio controls src='/audio/websiteadd.mp3' type=audio/mp3>",
    {
      maxWidth: 190,
    }
  );

  var Tip = L.marker([-37.839938, 144.870513], {
    title: "Tip"
  }).addTo(map);

Tip.bindPopup(
    "<h3>Tip</h3> <a class='pageshift' href='Further/rock.html'><img class='linkimg' src='Images/inside.jpg'></a> <br> <audio controls src='/audio/websiteadd.mp3' type=audio/mp3>",
    {
      maxWidth: 190,
    }
  );

  var BushDance = L.marker([-37.838424, 144.871618], {
    title: "Bush Dance"
  }).addTo(map);

BushDance.bindPopup(
    "<h3>Bush Dance</h3> <a class='pageshift' href='Further/rock.html'><img class='linkimg' src='Images/inside.jpg'></a> <br> <audio controls src='/audio/websiteadd.mp3' type=audio/mp3>",
    {
      maxWidth: 190,
    }
  );

  var Fonl = L.marker([-37.8394858, 144.8724858], {
    title: "Friends of Newport Lakes"
  }).addTo(map);

Fonl.bindPopup(
    "<h3>Friends of Newport Lakes</h3> <a class='pageshift' href='Further/rock.html'><img class='linkimg' src='Images/inside.jpg'></a> <br> <audio controls src='/audio/websiteadd.mp3' type=audio/mp3>",
    {
      maxWidth: 190,
    }
  );

  var Swans = L.marker([-37.8366276, 144.8745820], {
    title: "Swans"
  }).addTo(map);

Swans.bindPopup(
    "<h3>Swans</h3> <a class='pageshift' href='Further/rock.html'><img class='linkimg' src='Images/inside.jpg'></a> <br> <audio controls src='/audio/websiteadd.mp3' type=audio/mp3>",
    {
      maxWidth: 190,
    }
  );

  var COVID = L.marker([-37.837640, 144.872962], {
    title: "COVID"
  }).addTo(map);

COVID.bindPopup(
    "<h3>COVID</h3> <a class='pageshift' href='Further/rock.html'><img class='linkimg' src='Images/inside.jpg'></a> <br> <audio controls src='/audio/websiteadd.mp3' type=audio/mp3>",
    {
      maxWidth: 190,
    }
  );


  var ps = L.marker([-37.836702, 144.871143], {
    title: "Primary School"
  }).addTo(map);

ps.bindPopup(
    "<h3>Primary School</h3> <a class='pageshift' href='Further/rock.html'><img class='linkimg' src='Images/inside.jpg'></a> <br> <audio controls src='/audio/websiteadd.mp3' type=audio/mp3>",
    {
      maxWidth: 190,
    }
  );
