# The country API

The country API provides you information about countries from all over the world. You can use it in your own projects. It is free and open source.

See the API's [documentation](https://documenter.getpostman.com/view/11408750/UUy37Qxv).

## Technologies used

- Node.js
- Express
- MongoDB with Mongoose

## How to use it

### System Requirements

* Globally installed [Node](https://nodejs.org/en/)
* Globally installed [MongoDB](https://www.mongodb.com/) (optionl)

### Run

On the command prompt run the following commands


```sh
git clone https://github.com/SarathKannan/countries_api.git

cd countries_api

npm install

node src
```
Please Note : 
- Create a file called .env in the root folder. 
- Then copy and paste content in the .env.example file.
- Replace the value with yours 


## Connect to the database
- You can either use local database or create a new database in moongoDB atlas.
if you want to use atlas database then replace the mongo uri with your own in .env file.

### Add data to the database

* Run the following command to add data to the database
```sh
node src
```
Open the browser and go to https://still-brushlands-70439.herokuapp.com/api/v2/country/all?full=true

Copy the data and follow the instructions.

```js
Open postman and hit the following url : 

    url : "http://localhost:2222/api/v2/country"

    method: "POST"

    body: {
        "array": the copied data // willbe [{},{},{}]
    }
```

## Directory structure

### Overview

You can customize the `src` directory.

```
src/
├─ api/
│  ├─ country/
│  │  ├─ controller.js
│  │  ├─ index.js
│  │  ├─ model.js
│  └─ index.js
├─ services/
│  ├─ express/
│  ├─ mongoose/
│  └─ response/
├─ app.js
├─ config.js
└─ index.js
```

### Available endpoints

- `GET /api/v2/country/all`
- `GET /api/v2/country?name={name}`
- `GET /api/v2/country/flag?name={IN}&size={128}`

- See the API's [documentation](https://documenter.getpostman.com/view/11408750/UUy37Qxv).


## Data sources

- Flag images are taken from [World countries](https://github.com/stefangabos/world_countries#world-countries-).
