console.log("connected")
var map;
var infowindow;

function initMap() {
  var pyrmont = {lat: 33.867, lng: -97.195};

  map = new google.maps.Map(document.getElementById('map'), {
    center: pyrmont,
    zoom: 5
  });

  infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch({
    location: pyrmont,
    radius: 500,
    type: ['store']
  }, callback);
}

function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}

/////////
function searchBandsInTown(artist) {
  var artist = "peppers"
  var queryURL = "https://tastedive.com/api/similar?k=299673-experime-45QCLZTD&q=red+hot+chili+"+artist;
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

    // Printing the entire object to console
    console.log(response);


  });
}
searchBandsInTown("peppers")







