# Zielsetzung

Menschen, die Flüchtlinge unterstützen wollen, sollen einen Helferkreis in ihrer Nähe finden. Helferkreise sind dezentral organisiert, ein Überblick ist schwierig.

Viele Helferkreise haben keine Adresse. Deshalb wählen wir zur Darstellung der Helferkreise - Kreise.

# Architektur

1. Daten in öffentlich lesbarem Google Spreadsheet: https://docs.google.com/spreadsheets/d/1oIxVnHMl0VnEcy_Drmh5hJyXNpL1-am5zyD5ErrncbY/edit?alt=json#gid=0
   Wir füllen erstmal nur: name	lat	long	radius	homepage

2. Daten werden derzeit als CSV bei Google manuell exportier und mit D3.js in JSON konvertiert d3.csv(url, callback)

3. Marker und Kreise werden mit Leaflet JS gezeichnet, basierend auf den Daten aus dem Google Spreadsheet. Die Kartenbasis ist von Mapbox. Radius = 0 generiert Marker, Radius > 0 generiert Kreise.

# Daten 

Wir stellen die Daten zusammen aus http://muenchner-fluechtlingsrat.de/ueber-uns/vernetzung/ und anderen öffentlichen Quellen sowie Korrekturen, die bei uns eingehen.

Es werden nur Initiativen aufgenommen, die für eine oder mehrere Unterkünfte ein breites Spektrum anbieten - typischerweise Deutschkurse, Begleitung bei Behördengängen, Kleidung und Ähnliches. Spezialisierte Organisationen mit größerem Wirkungskreis, etwa für Rechtsberatung, Schwangere oder einzelne Länder, würden den Rahmen sprengen. 

# Datenkorrekturen und -ergänzungen

bitte an elsenheimer_internetzugang@gmx.de

# Bugs

Bugs oder Anforderungen bitte auf github

# Ähnliche Projekte

http://www.fluechtlingshilfemuenchen.de/mithelfen/
https://www.proasyl.de/ehrenamtliches-engagement/


