Group 22\
Bryant Huynh, Maryann Tran, Richard Phong, Peter John Mendoza

**Set Up**

1. Installing Node.js

If you do not already have Node.js installed follow the link provided below and download the LTS version.

https://nodejs.org/en/

2. Installing MongoDB

-- For Mac Users: -- 

- You will need homebrew installed. If you do not have homebrew installed follow the instructions at the link below.

https://brew.sh/#install

- Once homebrew is installed paste these 3 commands into your terminal in their respective order.
```shell
brew tap mongodb/brew
```
```shell
brew update
```
```shell
brew install mongodb-community@7.0
```

<br>
-- For Window Users: -- 

Follow the link provided below in order to install MongoDB

https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/


3. Install mongoose

Once you have MongoDB installed run the following code in your terminal.

```shell
npm install mongoose
```
<br>
<br>

**Start Up of Project**

-- Backend Server -- 

To start and run the backend server open a terminal in the "FuelQuoteServer" directory and run the following command in your terminal.

```shell
node server.js
```

If everything works out properly, you should see the following messages.

```shell
Server is running on port: 5000
Successfully connected to MongoDB.
```

-- Front End Web Applicaton -- 

To run the web application, you will first need to open a new terminal under the client directory.

Run this command in your terminal.

```shell
npm start
```
