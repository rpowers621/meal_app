
# Spoonacular API web app with Google Login

## Description

This README.md explains how to take Spoonacular web API and use them to create a web application. This app will display different meals based on calories, ingredients, cuisines, and diets while also linking the recipes to the respective meal. It also incorporates Google OAuth2.0 logic for Google sign in/out. 

## Clone this repository to your person machine
	  
1.	In your home directory, execute the following: `git clone https://github.com/rpowers621/meal_app.git`
2.	Change directories (cd) into the cloned directory to see all the files loaded onto your machine. 
3.	Next, connect your directory to your personal repository: `git remote set-url origin https://www.github.com/{your-username}/{your-repo-name} `
4.	To push your local repository to your remote repository, execute: git push origin main

## Sign up for Google API, Spoonacular API, and Heroku accounts

### Spoonacular
1.	Sign up for Spotify at https://spoonacular.com/food-api. Follow the prompts to create your account.
2.	Once logged in navigate to https://spoonacular.com/food-api/console#Profile . This is the developer page. You may need to login again.
3.	The necessary API Key is already generated and is hidden. You can click on 'Show / Hid API Key' button to see your key and hide it. 

### Google API
1.	Sign up for a Google account at https://accounts.google.com/signup. Follow the prompts to create your account. 
2.	 Once logged in go to https://console.cloud.google.com/projectselector2/apis/dashboard?supportedpurview=project to create a new API project. Input app name. Authorized Javascript origin and Redirect URI are necessary for our web application. For this project, the origin and Redirect should both contain which port Flask and React runs on (e.g. localhost:5000, localhost:3000).
3.	All you’ll need from this page is to set up both the origin and the URI. This information will be important for further step up see (Setup for more directions) 

### Heroku
1.	Sign up for Heroku at https://signup.heroku.com/. Follow the prompts to create your account. 

> We will need to use your email and password to login into Heroku via your terminal in section 'Deploy to Heroku'



## Install Requirements
> Please install the following if you do not already have them installed on your machine.

1.	pip install python-dotenv 
> this will be used when accessing your private variables in your .env file
2.	pip install requests 
> this is utilized to make RESTful API calls
3.	pip install flask
> Use this link to assit in setting up Flask environment variables. https://flask.palletsprojects.com/en/2.0.x/installation/
4. pip install Flask-sqlalchemy
5. pip install Flask-login
6. npm install
> this will allow you to use the command `npm run build`
7. pip install coverage
> this will allow you to run test coverage on your unit tests
8. npm install --save-dev @testing-library/jest-dom
> installs jest
9. npm install react-dom
10. npm i react-router-dom@5.2.0
> installs React Routing version 5.2.0 
11. npm i react-google-login
> install required library for Google Login logic




## Setup

1.	Create a .env file in the project directory you created.
2.	In the .env file input: 
`REACT_APP_clientId={your client id from Google API enclosed in quotations, without curly braces}
export API_KEY = {your client id from Google API enclosed in quotations, without curly braces}
export DATABASE_URL = {your postgresql or postgres URI for Heroku App}
3.	The .env file has sensitive information that you do not want to share. To hide this information you’ll need to add your .env file to .gitignore file.
4.	Create .gitignore in your projects directory. Inside this file input: `.env`
This will prevent uploading your .env to GitHub when committing your files. 
> DO NOT COMMIT FILES TO GITHUB BEFORE ADDING .ENV TO .GITIGNORE FILE
5.	Next, we will need to create two files, requirements.txt and Procfile, to able deploy our app to Heroku. These files need to be in your project file.
6.	In the requirements.txt include:
`Flask = {the version of your flask}
requests = {the version of your requests}
python-dotenv = {the version of your python-dotenv}
flask_sqlalchemy = (the version of your flask_sqlalchemy)
psycopg2-binary = (the version of your psycopg2-binary)`
> This communicates to Heroku which imports to use and their respective versions.

7.	In the Procfile (NOTE: this file has no extension. The file should just be called Procfile) include the startup command for app.py:
`web: python3 app.py` (or python app.py depending on your version of python)  


## NPM/ Build 
> For your react app to build you will need to utilize npm
1. To begin you will need to run `npm run build`
> this will create a build folder which is the basis of how your react app will run
2. The above command will also create a `node_modules` folder. Be sure to add `node_modules` to your `.gitignore` file. This is not required, but is recommended as this folder's size is very large and does not need to be uploaded to your own GitHub. 
3. To create the server connection you will also need to run the command `npm start`

## Create Postgres Database and Deploy to Heroku

1.	Install Heroku to your terminal: `sudo snap install –classic Heroku`
2.	Commit all your files to GitHub and then login into Heroku in your terminal.
3.	To login:` Heroku login -i` (you will be prompted to enter your email and password from Heroku)
4.	Now we need to create your Heroku app, execute the following: `heroku create` (This command will create the URL for your app)
5.  To create the Postgres database: `heroku addons:create heroku-postgresql:hobby-dev -a {your-app-name}` (you do not need to include curly braces)
6.  Now go to Heroku and find the DATABASE_URL key stored under Config Vars. Use this key and store in your .env folder under `DATABASE_URL `(if the URL starts with `postgres:` please replace this with `postgresql:`)
8.  Add nodejs buildpack: `heroku buildpacks:add --index 1 heroku/nodejs`
9.	Push your code to Heroku: `git push heroku main` (this will push your code to Heroku)
10.	Now we need to input your client id/secret/access keys to Heroku, as your `.env` file will not be pushed to Heroku.
11.	Navigate to https://dashboard.heroku.com/apps, click the app name that was created in step 4. Then go the settings tab. Inside settings click on Reveal Config Vars. This is where you’ll input the variables stored inside the `.env` file. Make sure the Config vars are spelled the exact same way that they are inside the .env.
12.	Now we can run our app by executing: `Heroku open`
13. To setup CLI in heroku execute the following in the command line `curl https://cli-assets.heroku.com/install.sh | sh`

> This concludes how to setup this app on your personal machine. 

## App Demo

Click the link to see a demo of this app!

https://fierce-meadow-64401.herokuapp.com/




