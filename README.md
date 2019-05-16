# README

The Sacred Sage <br><br>
Welome to The Sacred Sage! A place where you can take participate in a quiz and, over the span of 7 questions, receive an analysis of what you're soul is searching for. We also offer product recommendations - please enjoy! 

Models and Associations<br><br>
In this application, we have a user, result and product bundle model. They are associated in the following way:

- A user has many results
- A result belongs to a user and product bundle
- A product bundle has many results

Getting Started<br><br>
Fork and clone this repository to your local machine. Before you run the application, make sure you run bundle and npm install first in your terminal to install all the gems required in the Gemfile, then you can start running the program!

Running the application<br><br>
We've set up the migrations in the db/migrate directory to create the user, result, and product bundle table. In db/migrate directory, we've also set up some data in the seeds file for you to play around with.

Contributor's Guide<br><br>

Program Structure<br><br>
Database connection and files connection are set up in environment file in config/environment.rb
You can find database schema and data in db, and models in app/models

DEMO VIDEO - https://drive.google.com/file/d/1A-SHBp2uIuC02jt6WK3xvgnKvTHpHQNE/view?usp=sharing
