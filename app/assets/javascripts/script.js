function myMap() {
var mapProp= {
	//mapProp sert à définir les propriétés de la carte.
    center:new google.maps.LatLng(35.6668475, 139.6575207),
    //center permet de centrer la carte (en utilisant les coordonnées de latitude et de longitude).
    zoom:5,
    
};
var myCenter = new google.maps.LatLng(35.6668475, 139.6575207);
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
// permet de créer une carte dans la <div> qui a pour id = "googleMap", en utilisant les paramètres qui sont passés (mapProp).
var marker = new google.maps.Marker({position: myCenter});

marker.setMap(map);

// Zoomer en cliquant sur le Marker.
  google.maps.event.addListener(marker,'click',function() {
    map.setZoom(9);
    map.setCenter(marker.getPosition());
  });
}


 