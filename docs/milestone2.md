# API
/Login A GET endpoint that allow the user to send username and password to the server and server will examine the password and the username and return whether or not the user has successfully join

/Register A POST endpoint that allows the user to send username and password to the server for later login in

/getPC/:component A GET endpoint that sends in the user's preference and the server will return corresponding output that matches

/addtoShoppingCart/:user A POST endpoint that allows the user to add to the user's shopping cart

/getShoppingCart/:user A GET endpoint that return the shopping cart of the user


# screenshots
![1636236879(1)](https://user-images.githubusercontent.com/89880421/140625269-058cc0b0-7b5d-457f-8e51-b8fe1a2528ad.png)
This page allow the user to perform the /Login API, which once you enter the username and password and click login, the client will sent a request to server, and the server will response wether or not the username and password is valid

![1636237086(1)](https://user-images.githubusercontent.com/89880421/140625321-6c21b860-90aa-4dcb-b712-7421da441f5d.png)
This page allow the user to sign up an account, unpon valid username and password, the client will send the username and password to server, the server use it to create the account, which will be use for furture login

![1636237430(1)](https://user-images.githubusercontent.com/89880421/140625433-21ad6039-e762-45af-bb24-d0e3df74da3a.png)
This page will display the PC we get from the server after the client sents a GET request with the user preference, and if the user wish to add a component to cart, the client will sent a post request to the server, which will update the component, if there already one in the cart, or create a new one

![1636237788(1)](https://user-images.githubusercontent.com/89880421/140625565-81003fdc-f440-48a3-ba2e-167f5b66a54d.png)
This page will display the shopping cart the user had by sending request with the username to the server, the server will send each of the corresponding component, the user can also delete the component they wish to, and the client will then delete the component in the server.

# Heroku
https://git.heroku.com/team-tau.git


# Division of labor:
Hang Zheng: API planning, /addtoShoppingCart, Login and Output page

Guanxu: /Login and /getPC/:component, homepage and select page

Yuchen: /register and /getShoppingCart, Sign up and shopping cart

