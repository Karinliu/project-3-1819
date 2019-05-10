# Project 3 @cmda-minor-web · 2018-2019

### Live versie
Voor de live versie van de admin, kan de volgende link bekeken worden:
https://karin-cern.herokuapp.com/admin

Om de versie te bekijken als gewone gebruiker om tags toe te voegen, kan de volgende link bekeken worden:
https://karin-cern.herokuapp.com/


### Case
De case die is gekozen is als volgt: <br>

(O2B-90)
ALS Gebruiker WIL IK een simpele maar gebruiksvriendelijke manier om tags te maken en aan te passen
ZODAT Logs of threads gemakkelijker getagt kunnen worden en daarmee makkelijker te doorzoeken / filteren.


### Concept
Aangezien het bedachte concept voor over 10 jaar nog steeds bruikbaar moet zijn, is het volgende idee bedacht: <br>


##### Tags toevoegen
De tags die gebruikt en toegevoegd worden aan de logs en runs kunnen alleen gedaan worden door de beheerders/admins. De reden is zodat het meer overzichtelijker wordt voor zowel de werknemers als voor de admins van CERN.

Zij kunnen tags aanmaken en een kleur geven. Wanneer de tag is aangemaakt, komt dit terecht in een lijstje van alle aangemaakte tags. Ook kunnen zij de aangemaakte tags de namen aanpassen.


##### Overzicht tags
Het lijstje van alle tags die zijn aangemaakt kunnen door elke persoon gezien worden die toegang heeft tot de applicatie. Het idee is dat de gebruiker doormiddel van een drag en drop deze tags kunnen toevoegen aan een bepaalde log of run.

Wanneer er een tag is toevoegd, wordt dit vervolgens toegevoegd in het overzicht van de log/run. Zie hieronder de uitgewerkte schets:	<br>

![example1](https://user-images.githubusercontent.com/32538678/57493680-45b39980-72c6-11e9-9b89-b5a90204964e.png)


### Uitwerken concept

#### *Tags toevoegen*
Bij het uitwerken van het concept is er een functionaliteit geschreven waarin een admin tags kan toevoegen. Momenteel kan er een naam ingevuld worden met een kleur. 

##### Wat nog verbeterd kan worden
Voor het invoerveld kunnen er nog allemaal extra functionaliteiten worden toegevoegd. Bijv:
• De auteur die het heeft toegevoegd.
• Het aantal keren dat de hashtag wordt gebruikt (counter).
• De tijd wanneer de tag is aangemaakt.
• De tijd wanneer de hashtag is gebruikt.
• Invoeren van de kleurenvelden.

Voor de kleurenvelden heb ik nu een text input gebruikt. Maar wanneer een gebruiker bijvoorbeeld een spellingsfout maakt, wordt de kleur niet meer gelezen. Daarom zou een mogelijke verbetering zijn om een keuze te geven uit een aantal kleuren. Waardoor de admin alleen maar nog hoeft te klikken op een kleur.

##### Screenshot uitwerking
Zie hieronder de uitgewerkte prototype voor het toevoegen van hashtags.
<img width="1280" alt="Screenshot 2019-05-10 01 41 54" src="https://user-images.githubusercontent.com/32538678/57493913-531d5380-72c7-11e9-9c0a-476b3227a1a9.png">


#### *Tags toevoegen aan een log of run*
Voor het uitwerken van de logs of runs heb ik gekeken hoe de huidige indeling eventueel anders ingedeeld kon worden.

Ik heb gekeken of er misschien tabbladen waren die samengevoegd konden worden. Voor de vormgeving van de invoervelden zijn er niet veel aanpassingen gedaan. De reden hiervoor is om alles zo standaard en overzichtelijk te houden.

Bij het uitwerken van de applicatie kan de gebruiker een lijstje zien van alle beschikbare tags die zijn toegevoegd door de admins. Wanneer er een tag is gekozen, wordt dit verplaats naar een apparte overzichtsveld met "toegevoegde tags". Ook kunnen deze tags verwijderd worden uit het lijstje.

Ook is er een zoekbalk toegevoegd. Helaas werkt dit nog niet. Het idee hierachter is dat de gebruiker doormiddel van zoekwoorden kan zoeken naar tags. Ook was het idee wanneer gebruikers naar bepaalde onderwerpen zoeken, dat zij dan een suggestie daarvoor krijgen die horen bij de zoekresultaten.

##### Wat nog verbeterd kan worden
• Zoekfunctie moet nog werkend worden.
• Indeling kan misschien wat aantrekkelijker vormgegeven worden.

##### Screenshot uitwerking
Zie hieronder de uitgewerkte prototype
<img width="1280" alt="Screenshot 2019-05-10 01 41 48" src="https://user-images.githubusercontent.com/32538678/57494113-3897aa00-72c8-11e9-96ce-2f887c3257af.png">

