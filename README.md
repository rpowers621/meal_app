
# Spotify and Genius API web app

## Description

This README.md explains how to take both Spotify and Genius web APIs and use them to create a web application. This app will display music artist information fetched from Spotify while also linking Genius lyrics to the respective artist. 

## Clone this repository to your person machine

1.	Create your own repository  
2.	In your directory of choice execute the following: `git clone https://github.com/csc4350-f21/project1-002-03-2762`
3.	Change directories (cd) into the cloned directory to see all the files loaded onto your machine. 
4.	Next, connect your directory to your personal repository: `git remote set-url origin https://www.github.com/{your-username}/{your-repo-name} `
5.	To push your local repository to your remote repository, execute: git push origin main

## Sign up for Spotify, Genius, and Heroku accounts

### Spotify
1.	Sign up for Spotify at https://www.spotify.com/us/signup/. Follow the prompts to create your account.
2.	Once logged in navigate to https://developer.spotify.com/dashboard . This is the developer page. You may need to login again.
3.	Click “Create an App”.
4.	Input app name and app description. Agree to the Terms of Service and click create.
5.	You’ll now be on a page that shows your Client ID and Client Secret (click on client secret to see code). This information will be important for further step up (see Setup for more directions) 

### Genius
1.	Sign up for a Genius account at https://genius.com/signup. Follow the prompts to create your account. 
2.	 Once logged in go to https://genius.com/api-clients/new to create a new API client. Input app name. Icon URL and Redirect URI are optional and not necessary for our web application. For app website URL you may put any website, dummy websites like https//example.com are acceptable.
3.	You will be rerouted to the API Clients page. All you’ll need from this page is the Client Access token. This information will be important for further step up see (Setup for more directions) 

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
8. npm install eslint —-save-dev
> installs eslint
9. npm install eslint-config-airbnb —-save-dev
> this install the airbnb style guide
10. npm install --save-dev @testing-library/react
> installs testing library for unit tests
11. npm install --save-dev @testing-library/jest-dom
> installs jest


## Setup

1.	Create a .env file in the project directory you created.
2.	In the .env file input: 
`export CLIENT_SECRET = {your client secret from Spotify enclosed in quotations, without curly braces}
export CLIENT_ID = {your client id from Spotify enclosed in quotations, without curly braces}
export G_ACCESS_TOKEN = {your client access token from Genius enclosed in quotations, without curly braces}`
3.	The .env file has sensitive information that you do not want to share. To hide this information you’ll need to add your .env file to .gitignore file.
4.	Create .gitignore in your projects directory. Inside this file input: `.env`
This will prevent uploading your .env to GitHub when committing your files. 
> DO NOT COMMIT FILES TO GITHUB BEFORE ADDING .ENV TO .GITIGNORE FILE
5.	Next, we will need to create two files, requirements.txt and Procfile, to able deploy our app to Heroku. These files need to be in your project file.
6.	In the requirements.txt include:
`Flask = {the version of your flask}
requests = {the version of your requests}
python-dotenv = {the version of your python-dotenv}
flask_login = (the version of your flask_login)
flask_session = (the version of your flask_session)
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
7.  Before you run your code be sure to comment out the Artists DB. You first need to run only the UserApp DB so that the foreign in Artists can be recognized. Now uncomment and run both DBs.
8.  Add nodejs buildpack: `heroku buildpacks:add --index 1 heroku/nodejs`
9.	Push your code to Heroku: `git push heroku main` (this will push your code to Heroku)
10.	Now we need to input your client id/secret/access keys to Heroku, as your `.env` file will not be pushed to Heroku.
11.	Navigate to https://dashboard.heroku.com/apps, click the app name that was created in step 4. Then go the settings tab. Inside settings click on Reveal Config Vars. This is where you’ll input the variables stored inside the `.env` file. Make sure the Config vars are spelled the exact same way that they are inside the .env.
12.	Now we can run our app by executing: `Heroku open`
13. To setup CLI in heroku execute the following in the command line `curl https://cli-assets.heroku.com/install.sh | sh`

> This concludes how to setup this app on your personal machine. 

## App Demo

Click the link to see a demo of this app!
### Milestone 1 & 2

https://blooming-bayou-24729.herokuapp.com/

### Milestone 3

http://glacial-shelf-28074.herokuapp.com/


## Milestone 1 Q & A

### 1.	What are at least 3 technical issues you encountered with your project? How did you fix them?
	
- I had an initial problem with accessing the preview_url for certain artists. I noticed when I test printed the preview_url the result would be 'None' even though when checking the JSON passed the preview_url contained a valid url. After some research I found that adding in the 'market' parameter following our country code solved this problem for some of my test cases.  
   
- I had a problem accessing elements from my song_data variable. I was passing them as a map list, as I was following an example from the NYTimes lecture. I found that instead of storing my data in a map list, storing them in an array was much easier to access once the values were passed into my function in app.py

- I had a technical issue using the command pip freeze > requirements.txt, an example that was shown in class. When attempting to push my app to Heroku, this process crashed due to unused imports that were inserted after executing the pip command. To resolve this I simply deleted all unused imports and I was then able to push my app to Heroku. 
    
### 2.	What are known problems (still existing), if any, with your project? 

- At this time, I do not have any known problems with my project. All my features work as expected and none of my test cases have failed. Upon refreshing my app page, I have had 100% success in dynamically fetching artists and in fetching Genius lyrics.

### 3.	What would you do to improve your project in the future? 

- I would like to improve the overall appearance of my audio player. I would also like to have an animated backgroud, possibly moving to the beat of the song preview when played





## Milestone 2 Q & A

### What are at least 3 technical issues you encountered with your project? How did you fix them? 

- My first problem was connecting my database to heroku. My environment variable didnt save correctly when I exported it so I ended up having to add my DATABASE_URL to my .env file.

- Another problem of mine stemmed from when a new user would add in their first artist ID. My page did not refresh. This problem wasa to due to me not using the correct user variable. Once I used the session user variable I was able to fix this problem.

- I also had a problem with passing certain data to my user page. This was caused by how I passed data in milestone 1. We hard coded the artist ID and their name so this time I had to use the artist ID to provide the name before passing it to my user page.

### What would you do to improve your project in the future? 

- I would have my login and signup page include a password for authenication

### How did your experience working on this milestone differ from what you pictured while working through the planning process? What was unexpectedly hard? Was anything unexpectedly easy?

- Constructing the database was harder than I thought. Going through trial and error I had to delete and recreate my DB multiple times to finally get it to work. Once I was able to connect to a correct DB the rest of the project was pretty easy due to the fact I already did so much in milestone 1. 


## Milestone 3 Q & A

### What are at least 3 technical issues you encountered with your project? How did you fix them?

- My first technical issue in milestone three was getting my login.html and signup.html pages to render with css. To solve this problem I added the css in a style tag in the head tag. This way I did not need to convert these two pages to react pages.

- Another technical issue that I had was dynamically updating my User's saved artists list upon adding a new artist. To solve this issue I used `useState` to set the state of an artist array upon adding new artists. This way I was able to iterate through this artist array through `.map` and it would update dynamically. 

- My last issue was the UI when a new user logged in without having any artists saved. At first when the user pressed the save button the new artist ID would not populate. This also ment that the artist info and genius link would not populate as well. To fix this I added a refresh function to my fetch call response, so that once the user saves the artist ID the page will automatically refresh.

### What part of the stack do you feel most comfortable with? What part are you least comfortable with?

- I feel most comfortable working on the backend, server side. Even though I'm new to python I feel that my experience really shines through with my backend logic. With that said working in React/JS was a challenge. I am not as familiar with front-end logic so it was definitely a learning experience.


