# Express and MySQL Spin Up
This is a skeleton repository to help you add Express to your capstone.  Copy the files below into your capstone.

## Set Up
**The following files are required to add Express and MySQL to an existing application**
1. `/.gitignore`
    * Updated .gitignore file for the project. 
2. `/project.env`
    * env file based off `/example.env`
    * Catastrophic failure if `/project.env` is pushed to github, get immediate instructor help.
3. `/docker-compose.yml`
    * Orchestration file for docker containers.
4. `/.dockerignore`
    * An ignore file for Docker. (Almost the same syntax as git ignore)
5. `/backend/src/apis/index.controller.ts`
    * This file initiates a generic API controller that returns a string message when hit
6. `/backend/src/apis/index.routes.ts`
    * This file initiates a generic API route to test the controller in index.controller
7. `/backend/src/App.ts`
    * This file sets up the server to run on the provided port (4200 as set in index.ts) or defaults to 4200. It also sets up routing and the middleware for handling JSON responses.
8. `/backend/src/utils/database.utils.ts`
    * This file sets up database connections.
9. `/backend/src/utils/interfaces/Status.ts` 
    *  Interface for ddc-fullstack response objects      
10. `/backend/src/index.ts`
    * This file instantiates the app. This is the entry point of the application.
11. `/backend/package.json`
    * package.json for the backend code base.
12. `/backend/tsconfig.json`
    * Configuration file for Typescript.
13. `/backend/Dockerfile`
    * File to create a custom node/express image. 
14. `/frontend` 
    * Existing react application.
15. `/sql/Dockerfile`
    * File to create a custom mysql image.
16. `/sql/project.sql`
    * This file should be named after **your project**
    * File containing create table statements to initialize the database.

## Run Project
1. `cd` into `/backend`
2. Run `npm i`
    * This creates `/backend/package-lock.json` Which is necessary to start docker 
3. Run `docker-compose up -d` to start the application
* Optional access a running container
    * `docker container exec -it CONTAINER_NAME /bin/bash` to gain shell
    access to a running container 
    
## Calling API (In Postman or Insomnia)
The routes are formed as follows:
http://`[url]`:`[port]`/api /`[object]`/`[how we want to get it]`/`[param]`
