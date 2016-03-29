# Architektur

1. Daten in öffentlich lesbarem Google Spreadsheet: https://docs.google.com/spreadsheets/d/1oIxVnHMl0VnEcy_Drmh5hJyXNpL1-am5zyD5ErrncbY/edit?alt=json#gid=0

2. Daten werden als CSV bei Google abgefragt und direkt mit D3.js in JSON konvertiert
d3.csv(url, callback)

3. Marker und Kreise werden mit Leaflet JS gezeichnet, basierend auf den Daten aus dem Google Spreadsheet. Die Kartenbasis ist von Mapbox. Radius = 0 generiert Marker, Radius > 0 generiert Kreise.