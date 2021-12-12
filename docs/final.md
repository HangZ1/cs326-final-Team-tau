## Heroku link:
https://team-tau.herokuapp.com/

## Title:
Team-tau

## Subtitle:
PC Building Helper

## Semester:
Fall 2021

## Overview:
Our app will provide a algorith that will return a list of PC component based on the user's preference, which will be collected on the select page, the user can then add those returned componenet to their shopping cart, and manage their shopping cart by deleting component they don't want anymore. Our application is innovative because our application  will provide some tips on our recommendation

## Team Members:
Guanxu Zhou(MikaIcarus), Hang Zheng(HangZ1), Yuchen Liu(3TH4NL)

## User Interface:
Home page: The first page the user will see when opening the app, the user can click on "lets do it" to continue and choose their preference, or click on the upper left to go to their shopping cart, or click on the upper right to login
![image](https://user-images.githubusercontent.com/89880421/145690683-90c3f059-7d71-430d-8efd-2cd794820f5e.png)

Signin page: The page where the user can type in their username and password, if it match the one from the database, the user will be signin
![image](https://user-images.githubusercontent.com/89880421/145690745-6e263197-88dc-4732-9436-e1ebecd920cd.png)

Signup page: The page where the user can sign up an accound
![image](https://user-images.githubusercontent.com/89880421/145690760-9e2f74b8-bfac-4d35-b2b1-8494f2943b0c.png)

Selection page: The page where the user can chose their preference
![image](https://user-images.githubusercontent.com/89880421/145690782-8fac34e7-e003-41ba-8630-b12f0fb80a60.png)

Output page: A list of PC component based on the user choice on selection page 
![image](https://user-images.githubusercontent.com/89880421/145691495-0eb0f962-a618-46d3-9ec0-63db3b2839a2.png)

Shopping cart page: A page where the component the user select will be stored, different user will have different cart based on their choice
![image](https://user-images.githubusercontent.com/89880421/145691628-22f092a5-afd6-4b18-ae3a-966e5bf216a1.png)

## API:
GET /Login: Send username and password to the server and server will examine the password and the username and return whether or not the user has successfully join

POST /Register: Send username and password to the server for later login in

POST /addShoppingCart: Send all the component in the request body to the server specific to the user

POST /addUserCPU, /addUsercooler, /addUserGPU, /addUserMemory, /addUserMoterboard, /addUserPCcase, /addUserPower, /addUserStorage: Send the specific component to the server

GET /getShoppingCart: Get the shopping cart of a user

UPDATE /updateCPU, /updateCPUcooler, /updateGPU, /updateMemory, /updateMotherBoard, /updatePcCase, /updatePowerSupply, /updateStorage: update the specific component

DELETE /removeCPU, /removeCooler, /removeGPU, /removeMemory, /removeMotherBoard, /removeCase, /removePower, /removeStorage: delete the specific component from the databse

## Database: 
#### PCComponentData's collection:
CPU, Cpu Cooler, GPU, Memory, MotherBoard, Pc Case, Power Supply, Storage: This is the database contain all the component, each as a collection, we use them to calculate the ideal output for the user

#### ID&password:
ID&password: This is the database contain all the user id and password pair, a data can be added through signing up

#### UserPerference:
CPU, Cpu Cooler, GPU, Memory, MotherBoard, Pc Case, Power Supply, Storage: This is the data base containing all the user's shopping cart

## URL Routes/Mappings:
https://team-tau.herokuapp.com/ This is the homepage of the app. This page is accessible to everyone

https://team-tau.herokuapp.com/Signin_page.html: This is the sign in page, the user can use this page to sign in to their accound. This page is accessible to everyone

https://team-tau.herokuapp.com/SignUp_page.html: This is the sign up page, the user can use this page to sign up for an accound. This page is accessible to everyone

https://team-tau.herokuapp.com/Select.html: This is the select page, the user can chose their ideal feature for the pc. This page is only accessible if the user is sign in

https://team-tau.herokuapp.com/Output_page.html: This is the outout page, this page will diplay a list of component return by the server base on the choice they make on select page. This page is only accessible if the user is sign in

https://team-tau.herokuapp.com/ShoppingCart.html: This is the shopping cart page, the user can add component they like to their shopping cart and it will be display on this page. This page is only accessible if the user is sign in 


## Authentication/Authorization:
The user is asked to sign in to an accound before they can experience any feature of the app, and each user will have their own private shopping cart that they can modify.

## Division of Labor: 
#### For the front end: 
Guanxu Zhou is responsible for Homepage and seclect page 
Hang Zheng is responsible for sign-in and the output page. 
Yuchen Liu is responsible for sign-up page and shopping cart page.

#### For the back end: 
Guanxu Zhou is responsible for  /Login, /addShoppingCart, and api that get each component
Hang Zheng is responsible for /addShoppingCart, and all the update and delete api
Yuchen Liu is responsible for /register and /getShoppingCart, and api that add each component

#### For the final submission:
Guanxu Zhou and Yuchen liu will be recording the video because Hang Zheng have issue with mic, so Hang Zheng will be writing the final.md

## Conclusion:
Hang: personally I learned alot thourght out the project, it help me better understand the content of the lecture by using them to make a the real world application.
Yuchen: I think HTML part especially bootstrap is interesting for me, that give me chance to make my own beautiful web. 
Guanxu: The thing I learn here is that if I build the website based on a developer's mind , the user would get confused on it.


# Rubric 

### CRUD &emsp; &emsp; &emsp; &emsp; &emsp; ___ / 10 pts
- Create 
  - User ID & password
  - PC compoent in the shopping cart
- Read
  - User ID & password
  - PC component in the shopping cart
  - PC component used for the algorithm
- Update
  - Update PC component in the shopping cart
- Delete
  - Delete PC component in the shopping cart

### Final submission &emsp; &emsp; &emsp; &emsp; &emsp; ___ / 10 pts
- A working heroku deployment 
- Clear and concise video demo

### General &emsp; &emsp; &emsp; &emsp; &emsp; ___ / 15 pts
- Authentication
  - Successfully create a user through sign up
  - Successfully login a user
  - Only able to view the details of the inner pages if you are a user
    - When attempting to load pages when youre not signed in, the user will be redireced to the signin page
  - The user can sign out at any time
- Routing
- Linting/ code style

### Selecting page &emsp; &emsp; &emsp; &emsp; &emsp; ___ / 20 pts
- Can successfully make selection of the ideal pc feature
- Will be redirect to the output page

### Output result &emsp; &emsp; &emsp; &emsp; &emsp; ___ / 20 pts
- The result will match the choice the user make in the previous page
- Can successfully add each or all component to the shopping cart

### Shopping cart &emsp; &emsp; &emsp; &emsp; &emsp; ___ / 25 pts
- Can successfully get component the user added
- Can successfully delete each componenet
- Can successfully dipslay the cart associate with the user
