var myMap = L.map("map", {
    center: [33.861168, -118.266263],
    zoom: 15
});

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 20,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

var locations = [{
  location: [33.864384, -118.260845],
  name: "Dignity Health Sports Park"
},
{
  location: [33.857097, -118.268473],
  name: "Victoria Park"
},
];

for (var i = 0; i < locations.length; i++) {
  var marker = locations[i];
  L.marker(marker.location)
    .bindPopup("<h7>" + marker.name + "</h7>")
    .addTo(myMap);
}