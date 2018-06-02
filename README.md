# Donor Explorer
## Repos
Front-end: [https://github.com/jasonptoups/donor-explorer](https://github.com/jasonptoups/donor-explorer)  
Back-end: [https://github.com/jasonptoups/donor-explorer-backend](https://github.com/jasonptoups/donor-explorer-backend)  

## Assignment
I made this for my final project at General Assembly. The assignment was to make an app in 1 week using any technologies we wish. I was able to build this app with no instructor-help, instead relying on many, many Google searches.

## Purpose
Donor Explorer uses the Federal Election Commission API to make it easier to explore donors and their relationships. Users can use the Search tab to search for any donors, provided they give a first name, last name, and city location. The resulting table will fill in with donors that match.  

At the bottom of the page, a table of calculated fields will appear. These show overall characteristics for the donor, such as max donation, typical donation, average donation, and percent to a single party. These statistics are not provided by the FEC. Below that table, there is a button to save the donor information. You must be logged in to do so. 

## Examples
If you want to try out the app, I suggest looking up some of the following:
```
First name: Barry
Last name: Nalebuff
City: New Haven

First name: Sheryl
Last name: Silverman
City: Chevy Chase

First name: John
Last name: Isaacson
City: Cambridge
```
These are just a few donors that are contained in the FEC database.  

Please note, if you search someone that has many results, it can sometimes take a long time for the FEC API to return data. This is because I am using a trial developer API key, not a full production API key from FEC. I am in the process of obtaining a full API from the FEC.

## Installation
You can access the deployed website at [https://jasonptoups.github.io/donor-explorer/](https://jasonptoups.github.io/donor-explorer/).  

Alternatively, you can fork and clone this repo and view it locally. After cloning, open your command line:
```bash
$ cd donor-explorer
# cd into the react directory

$ npm install
# install all the dependencies

$ npm run start
# launch the app
```

## Technologies
### Front-end
* Javascript
* HTML
* CSS from Materialize
* React (create-react-app)
* React Router
* JWTs authentication
* Axios (npm package)
* Lodash (npm package)  
Note: I initially started building this app using redux, but I soon ran into problems. I taught myself how to use JWT authentication in this app, and I struggled to integrate that into my rudimentary understanding of Redux. Now that I have a deeper understanding of JWTs, I would like to go back an implement a redux store for this app. 

### Back-end
* Python
* PostgreSQL
* Django
* Django REST Framework
* Django REST Framework Simple JWTs

### Deployment
The deployed front-end is on github pages while the backend is on Heroku. I am using the free sandbox version of Heroku, so the server sleeps in between frequent use. If you are accessing the deployed version for the first time in a while, please allow a longer wait time after your first API call. 

## Future improvements
There is a lot more that can be improved! The current version is the product of 1 week of work, and I would like to put in more time to really improve it. Some additional features and updates I would like to make:  
* Allow logged in users to delete their saved donors
* Find a way to wrap text in the react-table I am using
* Allow for .csv download from the Saved Donor table
* Require authentication to access more of the backend API routes

## Acknowledgements
Thank you to my instructors and classmates at General Assembly for pushing and inspiring me every day.  

Thank you to everyone who has contributed to the many open-source projects that made this possible  

Thank you to the photographers and designers whose content I used:  
* Magnifying Glass by SimpleScott from the Noun Project
* Photo by Jomar on Unsplash
* Photo by Brandon Mowinkel on Unsplash


