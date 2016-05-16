$(function(){

	var map = L.map('map').setView([48.13, 11.58], 10);

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    detectRetina: true,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYmVybmhhcmR2b2dsZXIiLCJhIjoiY2lsZjFrMXE2MDAyeHc5bTQxa2Rob293ZCJ9.rzwxlAgOdr-6YhTwYfF-jA'
}).addTo(map);

	// Abruf des CSVs
	d3.csv("data/map_refugee_initiatives_munich.csv", function(data) {   	
	  	for (var i=0; i<data.length; i++) {

	  		if (data[i].long != '' && data[i].lat != '') {

	  			if (parseInt(data[i].radius) > 0) {
	  				var marker = L.circle([data[i].lat, data[i].long], data[i].radius, {
	  				    color: '#ff9933',
	  				    fillColor: 'yellow',
	  				    fillOpacity: 0.2
	  				}).addTo(map);
	  			} else {

					var marker = L.marker([data[i].lat, data[i].long]).addTo(map);
	  			}

	  			var popUpString = "";

	  			popUpString = "<h3>"+data[i].name+"</h3>"
	  			if (data[i].homepage != "") {
	  				popUpString += "<p><a href="+data[i].homepage+">Website</a></p>";
	  			} else {
	  				"<p>Kontakt: "+ data[i].number+data[i].contact+"</p>"
	  			}

	  			marker.bindPopup(popUpString);
	  			
	  		}
	  	}
	});


	// Groesse anpassen
	//$('#map').height($(window).height()-$("header").outerHeight());

});
