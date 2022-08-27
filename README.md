Welcome to TWEETSCAN 

Tweetscan is an applicaton that allows you to find twitter
results and stats based off any given search term. 

The application works by pulling the latest 2000 tweets via
the twitter API and given search term. The app then processes
all the tweets returning the most frequently used words, the most
liked and retweeted tweets. This is then displayed by the app 
frontend.

The application frontend is written in React. All frontend 
development code is located in the /src directory. Frontend
build code is in the /build directory.

The application backend is wrirtten in Python using the Flask
framework. All backend code is located in /sever directory. 





DEVELOPMENT TIPS:

- Clone the repository to the local machine

- Run "npm install" to install the required packages

- Run "python3 -m venv tweetscan-env" to create a python
virtual env located at /tweetscan-env

- Run "source tweetscan-env/bin/activate" to activate the 
virtual environment

- Run "python -m pip install -r requirements.txt" to install 
python packages

- Set environemnet variable [$TWITTER_BEARER_TOKEN] as a valid 
twitter bearer token

- Run the following to start the server: python run_server.py





DEPLOYMENT TIPS:

The application has been deployed on the Heroku platform. 

https://tweetscan1.herokuapp.com/

Steps to deploy: 

- Execute "npm run build". This create the build directory with
the production build of the front end

- Ensure Procfile is present with line 
[web: gunicorn 'run_server:create_app()'] . This tells Heroku
to execute the run_server file

- Upload to Heroku via Heroku CLI see below link for 
full details: https://devcenter.heroku.com/articles/git