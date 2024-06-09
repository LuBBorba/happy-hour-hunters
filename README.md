Happy Hour Hunters
Happy Hour Hunters is an app that allows users to search for happy hour deals in Vancouver. Users can select the day of the week to find places and items with discounts.

Features
-Search for happy hour deals in Vancouver
-Filter results by the day of the week
-Display places and items based on user selection

Tech Stack
-Front-end: React, JavaScript, SCSS
-Back-end: Node, Express, MySQL
-Tools: Axios, React Router, npm

Setup and Installation
Node.js
npm (Node Package Manager)
MySQL

1 -Installation:
Clone the repository:
git clone https://github.com/your-username/happy-hour-hunters.git
cd happy-hour-hunters
npm install

2-Front-end Setup:
cd client
npm install
npm start

3-Backend Setup:
cd server
npm install
\*Setup MySQL database:
CREATE DATABASE happy_hour_hunters'
USE happy-hour-hunters;

4-Configure environment variables:
Create a '.env' file in the server directory with the following content:
DB_LOCAL_HOST=
DB_LOCAL_DBNAME=
DB_LOCAL_USER=
DB_LOCAL_PASSWORD=

5-Start the server:
npm start

Usage
Navigate to the home page (/)
Use the dropdown menu to select the day of the week
View the list of happy hour deals that match the selected criteria.

API Endpoint:
GET /deals
-Fetch happy hour deals based on selected day.
