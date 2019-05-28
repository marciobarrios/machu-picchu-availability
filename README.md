# Machu Picchu Availability API

Small API to get all the available tickets for Machu Picchu for a given month in an specific route.

## Why?

Because with this small API it's easier to search for Machu Picchu available tickets, the information is taken in real time from the official website (https://www.machupicchu.gob.pe) so it's reliable.

This is a personal project, my plan is to use this API to create a small mobile-first web app to show Machu Picchu tickets availablity. So this API is not really meant for other to use, in any case you can use it sporadically without problems.

## Usage

A simple example to get Machu Picchu availability tickets for next December for the default route:

`https://machu-picchu-availability.now.sh/?month=11`


## API

| Name | Method | Description |
| --- | --- | --- |
| https://machu-picchu-availability.now.sh/ | GET | Retrieve Machu Picchu availability tickets for different a route within an specific month |

## Query string parameters

All of these parameters expect a number identifier.

| Name | Description |
| --- | --- |
| route | Route identifier, by default is route 0. Check the different routes below the table |
| year | By default uses the current year |
| month | A month identifier, from 0 to 11 |

Possible routes identifiers for `route` parameter:
- 0: Machupicchu - A partir de las 6:00
- 1: Machupicchu - A partir de las 7:00
- 2: Machupicchu - A partir de las 8:00
- 3: Machupicchu - A partir de las 9:00
- 4: Machupicchu - A partir de las 10:00
- 5: Machupicchu - A partir de las 11:00
- 6: Machupicchu - A partir de las 12:00
- 7: Machupicchu - A partir de las 13:00
- 8: Machupicchu - A partir de las 14:00
- 9: Machupicchu con montaña Waynapicchu - A partir de las 6:00
- 10: Machupicchu con montaña Waynapicchu - A partir de las 7:00
- 11: Machupicchu con montaña Waynapicchu - A partir de las 8:00
- 12: Machupicchu con montaña Machupicchu - A partir de las 6:00
- 13: Machupicchu con montaña Machupicchu - A partir de las 7:00
- 14: Machupicchu con montaña Machupicchu - A partir de las 8:00

