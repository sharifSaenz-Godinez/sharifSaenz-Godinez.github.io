var map
var infowindow


function createMarker(lat, lon, content) {
  var latLng = new google.maps.LatLng(lat, lon)

 
  var markerImage = new google.maps.MarkerImage('images/Gym_symbol.png',
                new google.maps.Size(150, 150),
                new google.maps.Point(15, 15),
                new google.maps.Point(30, 30));

    var icon = {
    url: "images/Gym_symbol.png", // url
    scaledSize: new google.maps.Size(50, 50), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
};



  var marker = new google.maps.Marker({
    position: latLng,
    scaledSize: new google.maps.Size(50, 50),
    animation:google.maps.Animation.BOUNCE ,
    icon: icon,
    optimized: false,
    map: map
  });

  google.maps.event.addListener(marker, 'click', function(){
    infowindow.setContent("<div class='content'>" + content + "</div>");
    infowindow.open(map,marker);
  })

}


function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
    center:  {lat: 36.9837, lng: 138.987},
    zoom: 4
  })
  
  infowindow = new google.maps.InfoWindow({
    content: "placeholder"
  })
  

  
//sinnoh
    createMarker( 44.47 , 142.68, "snowpoint gym, sinnoh <br><img src='images/icicle.jpg' class='mapimg'><br> run by <a href='https:bulbapedia.bulbagarden.net/wiki/Candice'>Candice</a>")
    createMarker( 43.71 , 142.39, "eterna gym, sinnoh <br><img src='images/forest.png' class='mapimg'><br> run by <a href='https:bulbapedia.bulbagarden.net/wiki/Roark'>Roark</a>")
    createMarker( 42.98 , 142.55, "oreburgh gym, sinnoh <br><img src='images/coal.png' class='mapimg'><br> run by <a href='https:bulbapedia.bulbagarden.net/wiki/Gardenia'>Gardenia</a>")
    createMarker( 43.90 , 144.99, "vielstone gym, sinnoh <br><img src='images/cobble.png' class='mapimg'><br> run by <a href='https:bulbapedia.bulbagarden.net/wiki/Maylene'>Maylene</a>")
    createMarker( 43.02 , 144.02, "pastora gym, sinnoh <br><img src='images/fen.png' class='mapimg'><br> run by <a href='https:bulbapedia.bulbagarden.net/wiki/Crasher_Wake'>Crasher Wake</a>")
    createMarker( 43.22 , 143.02, "hearthstone gym, sinnoh <br><img src='images/relic.png' class='mapimg'><br> run by <a href='https:bulbapedia.bulbagarden.net/wiki/Fantina'>Fantina</a>")
    createMarker( 43.05 , 140.90, "canalave gym, sinnoh <br><img src='images/mine.png' class='mapimg'><br> run by <a href='https:bulbapedia.bulbagarden.net/wiki/Bryon'>Bryon</a>")
    createMarker( 43.30 , 145.56, "sunyshore gym, sinnoh <br><img src='images/beacon.png' class='mapimg'><br> run by  <a href='https:bulbapedia.bulbagarden.net/wiki/Volkner'>Volkner</a>")

  //unova
      createMarker(  40.67, -73.92, "Satraiton gym, unova <br><img src='images/trio.png' class='mapimg'><br> run by  <a href='https:bulbapedia.bulbagarden.net/wiki/Striaton_Gym'>triplets</a>")
      createMarker(  40.69, -73.96 , "Nacrene gym, unova <br><img src='images/basic.png' class='mapimg'><br> run by  <a href='https:bulbapedia.bulbagarden.net/wiki/Lenora'>Lenora</a>")
      createMarker( 40.70 , -74.09 , "Aspertia gym, unova <br><img src='images/basic.png' class='mapimg'><br> run by  <a href='https:bulbapedia.bulbagarden.net/wiki/Cheren'>Cheren</a>")
      createMarker( 40.73 , -74.09 , "Virbank  gym, unova <br><img src='images/toxic.png' class='mapimg'><br> run by  <a href='https:bulbapedia.bulbagarden.net/wiki/Roxie'>Roxie</a>")
      createMarker( 40.70 , -74.01 , "Castelia gym, unova <br><img src='images/insect.png' class='mapimg'><br> run by  <a href='https:bulbapedia.bulbagarden.net/wiki/Burgh'>Burgh</a>")
      createMarker( 40.76 , -73.97 , "Nimbasa gym, unova <br><img src='images/bolt.png' class='mapimg'><br> run by  <a href='https:bulbapedia.bulbagarden.net/wiki/Elesa'>Elesa</a>")
      createMarker( 40.78 , -74.03 , "Driftveil gym, unova <br><img src='images/quake.png' class='mapimg'><br> run by  <a href='https:bulbapedia.bulbagarden.net/wiki/Clay'>Clay</a>")
      createMarker( 40.85 , -74.02 , "Mistralton gym, unova <br><img src='images/jet.png' class='mapimg'><br> run by  <a href='https:bulbapedia.bulbagarden.net/wiki/Skyla'>Skyla</a>")
      createMarker( 40.87 , -73.96 , "Icirrus gym, unova <br><img src='images/freeze.png' class='mapimg'><br> run by  <a href='https:bulbapedia.bulbagarden.net/wiki/Brycen'>Brycen</a>")
      createMarker( 40.84 , -73.89 , "Opelucid gym, unova <br><img src='images/legend.png' class='mapimg'><br> run by  <a href='https:bulbapedia.bulbagarden.net/wiki/Drayden'>Drayden </a> & <a href='https:bulbapedia.bulbagarden.net/wiki/Iris'>Iris</a>")
      createMarker( 40.83 , -73.75 , "Humilau  gym, unova <br><img src='images/wave.png' class='mapimg'><br> run by  <a href='https:bulbapedia.bulbagarden.net/wiki/Marlon'>Marlon</a>")

  
}

