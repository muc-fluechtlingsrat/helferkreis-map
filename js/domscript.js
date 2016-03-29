$(function(){

	var map = L.map('map').setView([48.13, 11.58], 11);

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYmVybmhhcmR2b2dsZXIiLCJhIjoiY2lsZjFrMXE2MDAyeHc5bTQxa2Rob293ZCJ9.rzwxlAgOdr-6YhTwYfF-jA'
}).addTo(map);

	// Abruf des CSVs
	d3.csv("https://docs.google.com/spreadsheets/d/1oIxVnHMl0VnEcy_Drmh5hJyXNpL1-am5zyD5ErrncbY/pub?gid=0&single=true&output=csv", function(data) {
	  	
	  	for (var i=0; i<data.length; i++) {

	  		if (data[i].long != '' && data[i].lat != '') {

	  			if (parseInt(data[i].radius) > 0) {
	  				var marker = L.circle([data[i].lat, data[i].long], data[i].radius, {
	  				    color: 'red',
	  				    fillColor: '#f03',
	  				    fillOpacity: 0.5
	  				}).addTo(map);
	  			} else {
	  				console.log(data[i]);

					var marker = L.marker([data[i].lat, data[i].long]).addTo(map);
	  			}

	  			var popUpString = "";

	  			popUpString = "<h3>"+data[i].name+"</h3>"+
	  				"<p>"+data[i].desc+"</p>"+
	  				data[i].street + " " + data[i].number;
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
	console.log($(window).height()-$("header").outerHeight());
	$('#map').height($(window).height()-$("header").outerHeight());
});