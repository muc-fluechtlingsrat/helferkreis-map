$(function(){

	var map = L.map('map').setView([48.13, 11.58], 10);

	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> &copy; <a href="http://mapbox.com">Mapbox</a>',
	attributionControl:false,
	tileSize: 512,
	zoomOffset: -1,
    maxZoom: 15,
	minZoom: 10,
	detectRetina: true,
    id: 'mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoiYmVybmhhcmR2b2dsZXIiLCJhIjoiY2lsZjFrMXE2MDAyeHc5bTQxa2Rob293ZCJ9.rzwxlAgOdr-6YhTwYfF-jA'
}).addTo(map);

	// Abruf des CSVs
	d3.csv("data/map_refugee_initiatives_munich.csv", function(data) {   	
	  	for (var i=0; i<data.length; i++) {

	  		if (data[i].long != '' && data[i].lat != '') {

                                // Portale haben Radius 2000  ... Ich weiss, implicit is bad
	  			if (parseInt(data[i].radius) == 2000) {
	  				var marker = L.circle([data[i].lat, data[i].long], {
	  				    color: '#ff9933',
	  				    fillColor: '#ecf9b9',
	  				    fillOpacity: 0.2,
						radius: data[i].radius
	  				}).addTo(map);
                                } else if (parseInt(data[i].radius) > 0) {
	  				var marker = L.circle([data[i].lat, data[i].long], {
	  				    color: '#ff9933',
	  				    fillColor: '#D9EB76',
						fillOpacity: 0.4,
						radius: data[i].radius
	  				}).addTo(map);
	  			} else {

					var marker = L.marker([data[i].lat, data[i].long]).addTo(map);
	  			}

	  			var popUpString = "";

	  			popUpString = "<h3>"+data[i].name+"</h3>"
	  			if (data[i].homepage != "") {
	  				popUpString += "<p><a href="+data[i].homepage+">Website</a></p>";
	  			} 

	  			marker.bindPopup(popUpString);
	  			
	  		}
	  	}
	});


	// Groesse anpassen
	//$('#map').height($(window).height()-$("header").outerHeight());

});
