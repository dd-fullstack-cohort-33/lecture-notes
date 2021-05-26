# Data downloaders & Seed Data

## High level overview
* You need some way to get data into your database so that your application can use it.
* If you are using somebody else's data (i.e. an API) you will use a **data downloader** to copy data to your database
* If you are planning on using user-contributed data, you need to create your own **seed data** to initially populate your database

## Creating a data downloader or seed data

### API = Application Programming Interface
- A software intermediary that allows two applications to communicate with one another and transfer data
- APIs define the classes, methods, functions and variables your application needs to carry out
  a desired task

### What?
- **Data downloader**: a process built to ping an API to grab and format necessary information for an application.
- **Data seeder**: usually a file built to automate the initial seeding of a database with information necessary for testing

### Why?
- **Data downloader**: you don’t have to store massive amounts of moving (and unnecessary) data for your application.
- **Data seeder**: Nobody wants to waste time manually building objects for your database for testing.

### Necessary components:
- API key
- Endpoint URL
- Somewhere to display or store the output
    - [browser, database, insomnia (which is kinda basically like a browser)]