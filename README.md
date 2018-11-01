# Talent Buyer Scraper (Artist Web-Scraping Microservice)

This app is currently deployed at [http://general-alley.surge.sh/](http://general-alley.surge.sh/)

This app was coded by [Tristan Bambauer](https://github.com/TristanB17) and [John Roemer](https://github.com/jtrtj)

## Purpose of this Repo

This app was designed as a small calorie tracking program for an individual user. The user has a list of foods, which can be viewed on the endpoint '/api/foods'. 

![Settings Window](https://i.imgur.com/fEvs9aI.png)

A user is also able to add a food to the database with a name and a calorie amount. Once created, the food can also be edited and/or removed from the database using the small dropdown menu on the right of all listed foods (_pictured below_). 

![Settings Window](https://i.imgur.com/WFS2jFz.png)

A meals page is also visible, and can have foods (both existing and added from the foods page) added to or removed from it.

![Settings Window](https://i.imgur.com/DTKitrt.png)

Users can also go to the recipes page, wherein they can check existing foods off a table and then receive recipies which include those selected foods as ingredients. This was achieved by making a fetch call to the [yummly API](https://developer.yummly.com/)

![Settings Window](https://i.imgur.com/ESwQsHp.png)

## Functionality

**This app was designed with the following goals in mind:**

1. CRUD foods to a database

2. Establish a database relation between foods and meals

3. Compare calories to goals (meal and total)

4. View calorie calculations in diary

5. Create an app that the user can navigate through without having the page refreshed 

6. Consume the same endpoints that built in an Express server (also made by the two authors of this project)

7. Use fetch to retrieve a response from an API

8. To manipulate JSON objects

## Initial Setup

1. Clone this repo into the desired folder with the command

  ```shell
  git clone git@github.com:TristanB17/quantified-self-fe
  ```
2. Change into the `quantified-self-fe` directory

3. Install the dependencies of the starter kit

  ```shell
  npm install
  ```
  
## Running the Server Locally

This project uses data seeded from [this Express API](https://github.com/jtrtj/qs-api-express). To run the code locally, use the command:

```shell
npm start
```

Once the server is running, enter this address:

* `http://localhost:8080/` into a browser to run your application.

## Deployment

* The page can also be viewed using the hosting site [Heroku]()

## Built With

* [JavaScript](https://www.javascript.com/)
* [jQuery](https://jquery.com/)

## Tested with
* [Mocha](https://mochajs.org/)
* [Chai](https://chaijs.com/)
