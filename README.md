# Welcome to Zappy!

**Zappy** is a simple project to help your team fetch some tweets in your by detecting a specific keyword in the beginning of the message sent by anyone in any specific channel in your slack work-space  ..

## Tech used
Hi! This project is built using **MEAN stack** (Node -v 8.10 , Express framework -v 4.0.0, Angular -v 6) with unit testing using Mocha & Chai

## Live Demo
you can find a sample angular site hosted on Firebase :

> https://zappy-2be57.firebaseapp.com

## Before starting!
You need to have a working (and approved) developer account on Slack and Twitter

## Getting started

 1. First of all clone our repository by running the following command:
> git clone https://github.com/bishoymelek/zappy-slack-twitter
2.  Then inside the 'backend' folder , We will create a file '.env' with some variables like this :
> PORT=THE PORT YOU WANT TO USE , LIKE : 5500  
> Twitter_API_key=YOUR TWITTER DEVELOPER ACCOUNT API KEY  
> Twitter_API_secret_key=YOUR TWITTER DEVELOPER ACCOUNT API SECRET KEY  
> Twitter_Account_Screen_Name=THE TWITTER ACCOUNT YOU WANT TO FETCH TWEETS FROM  

 3. Then we will be using **Docker** in running the project by running the following commands :
 > docker-compose up -d mongo  
 > docker-compose up node
 4. After that we will use Ngrok to help us have a public ip address in order to integrate with Slack from localhost , download it from here first:
 > https://ngrok.com/download
 5. Then we will run ngrok on the same port we defined in the .env file in step 2 .. so let's run the following command in the same folder of the ngrok app :
 > ./ngrok http 5500
 6. Now ngrok is pointing our local server instance for the node app to a public IP to let us use while integrating with slack 'Outgoing WebHooks' feature
 7. In the 'Outgoing WebHooks' section in Slack App you linked to the work-space you will use , edit the following fields:
	- **Channel** : the channel you will use to detect messages
	- **Trigger Word** : the word you want to detect
	- **URL** : the base url which you got from ngrok console and add to it '/slack/keyword-detected' to make it like : 'https://google.com/slack/keyword-detected'
 8. Sign in to the Slack work-space ... and go the channel you mentioned already to use in detecting the word and try writing any message started with the word you mentioned already in step 7 above
 9. You should get a message : 'Thanks for your 'Go' sentence!'
 10. If you got this message , that means the process is done correctly! and the tweets already fetched for the twitter user you mentioned in step 2 above in the .env file 'Twitter_Account_Screen_Name'
 11. Now head to the 'frontend' folder and edit src/app/vars.ts file .. you will have to edit the value for the 'baseUrl' property to make it point to the PORT you mentioned in step 2 above , to let the url end with 5500 for example.
 12. run the following commands in the 'frontend' folder:
 > npm i  
 > ng serve
 13. You should now open the url displayed on the console now in the browser so you can find the fetched tweets in a simple table.

## Contributing! B-)
You are more than welcome to add new features to the project and make a pull request and I will be so happy to see your contributions and ideas!
```
