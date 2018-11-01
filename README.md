# Talent Buyer Scraper (Artist Web-Scraping Microservice)


## Purpose of this Repo

This app (built with [Node.js](https://nodejs.org/en/)) acts as a small microservice component of the existing repositories:

**Talent Buyer API**

A RESTful JSON API built to serve as the backend for Talent Buyer Client: a tool for music talent buyers to schedule concerts, organize offers, review riders, and determine financial provisions required for an individual show.

* Repository hosted on: [Github](https://github.com/colinwarmstrong/talent-buyer-api)
* Code deployed to: [Heroku](https://talent-buyer-api.herokuapp.com/)

**Talent Buyer Client**

An organizational tool for music talent buyers to browse artists at all the major agencies, keep track of their venue's calendar and create and edit offers to send out to agents.

* Repository hosted on: [Github](https://github.com/GraySmith00/talent-buyer-client)
* Code deployed to: [Heroku](https://talent-buyer.herokuapp.com/)

Potential show buyers have a dashboard which displays dates they have an artist reserved, as well offers they have submitted, but have yet to be confirmed by the artist/agent thereof, and a watchlist of upcoming popular artists. 

![dashboard](https://i.imgur.com/Je4OJt6.png)

### Scraping Functionality

This scraper interacts only with the api, returning artist names from the [United Talent Agency (UTA)](https://music.utatouring.com/full-roster/') and the [Creative Artists Agency (CAA)](https://www.caa.com/entertainmenttalent/touring). Only these two larger Talent Agencies were selected due to constraints on number of lines of code maintained by Heroku. The scraper uses [Nightmare](http://www.nightmarejs.org/) to pull artist names from these agencies' respective websites:

### Posting to Talent Buyer API

The microservice also stores the name in a JSON file, which it uses to make calls to the Songkick and Spotify APIs: 

* [Songkick API - Documentation](https://www.songkick.com/developer/response-objects)
* [Spotify Web API - Documentation](https://developer.spotify.com/documentation/web-api/)

Both APIs are used to return information such as name, agency, popularity, spotify followers and images of the performers in question. 

This information is then uses a POST action on an endpoint in the Talent Buyer API to update existing or create new artists. Using the [Heroku Scheduler](https://elements.heroku.com/addons/scheduler) addon, the service will automatically conduct both of these actions within an hour. 


## Deployment

This service has been deployed to hosting site [Heroku](https://dashboard.heroku.com/apps/talentbuyer-scraper)

## Local Setup

Move into the desired folder and clone the repo

```
git clone https://github.com/GraySmith00/talent-buyer-scrape
```

Email gray.smith00@gmail.com for Private Keys

Run `npm install` from the root directory

Test the functionality of the files using the `node` command 


## Authors

* **Colin Armstrong**  
 	- [GitHub](https://github.com/colinwarmstrong)
 	- [LinkedIn](https://www.linkedin.com/in/colinwarmstrong/)

* **Tristan Bambauer**  
 	- [GitHub](https://github.com/TristanB17)
 	- [LinkedIn](https://www.linkedin.com/in/tristan-bambauer/)

* **Tim Fischer**  
 	- [GitHub](https://github.com/TFisch)
 	- [LinkedIn](https://www.linkedin.com/in/timrfischer/)

* **Gray Smith**  
 	- [GitHub](https://github.com/GraySmith00)
 	- [LinkedIn](https://www.linkedin.com/in/graysmith00/)


## Contributing

If you would like to contribute, feel free to reach out to any of the authors via email or LinkedIn.
