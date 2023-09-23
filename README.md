
# Proyecto de backend para un juego infantil

Este proyecto implementa un backend para un juego infantil que permite a los niños seleccionar un personaje y crear un atuendo para él.


## Instalación

#### Instala las dependencias

```bash
  npm install
```

#### Crea una base de datos MongoDB

```bash
  mongod --dbpath /path/to/database
```

#### Inicia el servidor

```bash
  node index
```

    
## Endpoints
### Login

#### Request

`POST /login`

    curl -i -H 'Accept: application/json' http://localhost:5000/login
    Headers:
    {
      "content-length": "43",
      "accept-encoding": "gzip, deflate, br",
      "Accept": "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/json"
    }
    Body:
    {
      "username": "username",
      "pin": 0000
    }

#### Response

    {
        "token": "token"
    }

### Get characterizations

#### Request

`GET /characterizations`

    curl -i -H 'Accept: application/json' http://localhost:5000/characterizations?limit=5&skip=15
    Headers:
    {
      "auth-token": "token",
      "accept-encoding": "gzip, deflate, br",
      "Accept": "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)"
    }

#### Response

    [
      {
        "_id": "650ce729545e1d5f26853e60",
        "type": "bottom",
        "url": "https://www.example.com/bottom2.png"
      },
      {
        "_id": "650ce735545e1d5f26853e61",
        "type": "bottom",
        "url": "https://www.example.com/bottom3.png"
      },
      {
        "_id": "650ce741545e1d5f26853e62",
        "type": "bottom",
        "url": "https://www.example.com/bottom4.png"
      },
      {
        "_id": "650ce74f545e1d5f26853e63",
        "type": "shoes",
        "url": "https://www.example.com/shoes2.png"
      },
      {
        "_id": "650ce75e545e1d5f26853e64",
        "type": "shoes",
        "url": "https://www.example.com/shoes3.png"
      }
    ]

### Get last 5 characters

#### Request

`GET /characters`

    curl -i -H 'Accept: application/json' http://localhost:5000/characters
    Headers:
    {
      "accept-encoding": "gzip, deflate, br",
      "Accept": "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)"
    }

#### Response

    [
      {
        "_id": "650d170ea17254276aa4c1a0",
        "name": "pepe2",
        "face": {
          "_id": "65012173c1ea1e729ae8fca6",
          "type": "face",
          "url": "https://www.example.com/face1.png"
        },
        "top": {
          "_id": "65012208c1ea1e729ae8fca7",
          "type": "top",
          "url": "https://www.example.com/top1.png"
        },
        "bottom": {
          "_id": "65012257c1ea1e729ae8fca8",
          "type": "bottom",
          "url": "https://www.example.com/bottom1.png"
        },
        "shoes": {
          "_id": "650122b2c1ea1e729ae8fca9",
          "type": "shoes",
          "url": "https://www.example.com/shoes1.png"
        },
        "createdAt": "2023-09-22T04:24:46.201Z",
        "updatedAt": "2023-09-22T04:24:46.201Z"
      }
    ]

### Get character by id

#### Request

`GET /characters/:id`

    curl -i -H 'Accept: application/json' http://localhost:5000/characters/650d170ea17254276aa4c1a0
    Headers:
    {
      "auth-token": "token",
      "accept-encoding": "gzip, deflate, br",
      "Accept": "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)"
    }

#### Response

    {
      "_id": "650d170ea17254276aa4c1a0",
      "name": "pepe2",
      "face": {
        "_id": "65012173c1ea1e729ae8fca6",
        "type": "face",
        "url": "https://www.example.com/face1.png"
      },
      "top": {
        "_id": "65012208c1ea1e729ae8fca7",
        "type": "top",
        "url": "https://www.example.com/top1.png"
      },
      "bottom": {
        "_id": "65012257c1ea1e729ae8fca8",
        "type": "bottom",
        "url": "https://www.example.com/bottom1.png"
      },
      "shoes": {
        "_id": "650122b2c1ea1e729ae8fca9",
        "type": "shoes",
        "url": "https://www.example.com/shoes1.png"
      },
      "createdAt": "2023-09-22T04:24:46.201Z",
      "updatedAt": "2023-09-22T04:24:46.201Z"
    }

### Get characters by user id

#### Request

`GET /users/:id/characters`

    curl -i -H 'Accept: application/json' http://localhost:5000/users/64fe2961b06316a9fec158dd/characters
    Headers:
    {
      "auth-token": "token",
      "accept-encoding": "gzip, deflate, br",
      "Accept": "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)"
    }

#### Response

    [
      {
        "_id": "650d170ea17254276aa4c1a0",
        "name": "pepe2",
        "face": {
          "_id": "65012173c1ea1e729ae8fca6",
          "type": "face",
          "url": "https://www.example.com/face1.png"
        },
        "top": {
          "_id": "65012208c1ea1e729ae8fca7",
          "type": "top",
          "url": "https://www.example.com/top1.png"
        },
        "bottom": {
          "_id": "65012257c1ea1e729ae8fca8",
          "type": "bottom",
          "url": "https://www.example.com/bottom1.png"
        },
        "shoes": {
          "_id": "650122b2c1ea1e729ae8fca9",
          "type": "shoes",
          "url": "https://www.example.com/shoes1.png"
        },
        "createdAt": "2023-09-22T04:24:46.201Z",
        "updatedAt": "2023-09-22T04:24:46.201Z"
      }
    ]

### Create character

#### Request

`POST /characters`

    curl -i -H 'Accept: application/json' http://localhost:5000/characters
    Headers:
    {
      "auth-token": "token",
      "accept-encoding": "gzip, deflate, br",
      "Accept": "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)"
    }
     Body:
    {
      "name": "otrotro",
      "face":"65012173c1ea1e729ae8fca6",
      "top": "65012208c1ea1e729ae8fca7",
      "bottom": "65012257c1ea1e729ae8fca8",
      "shoes": "650122b2c1ea1e729ae8fca9"
    }

#### Response

    {
      "name": "otrotro",
      "face": "65012173c1ea1e729ae8fca6",
      "top": "65012208c1ea1e729ae8fca7",
      "bottom": "65012257c1ea1e729ae8fca8",
      "shoes": "650122b2c1ea1e729ae8fca9",
      "_id": "650e6460de2b688598b826a8",
      "createdAt": "2023-09-23T04:06:56.905Z",
      "updatedAt": "2023-09-23T04:06:56.905Z"
    }

### Update character

#### Request

`PUT /characters/:id`

    curl -i -H 'Accept: application/json' http://localhost:5000/characters/650e6460de2b688598b826a8
    Headers:
    {
      "auth-token": "token",
      "accept-encoding": "gzip, deflate, br",
      "Accept": "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)"
    }
     Body:
    {
      "name": "otro5",
      "face":"65012173c1ea1e729ae8fca6",
      "top": "65012208c1ea1e729ae8fca7",
      "bottom": "65012257c1ea1e729ae8fca8",
      "shoes": "650122b2c1ea1e729ae8fca9"
    }

#### Response

    {
      "_id": "650e6460de2b688598b826a8",
      "name": "otro5",
      "face": "65012173c1ea1e729ae8fca6",
      "top": "65012208c1ea1e729ae8fca7",
      "bottom": "65012257c1ea1e729ae8fca8",
      "shoes": "650122b2c1ea1e729ae8fca9",
      "createdAt": "2023-09-23T04:06:56.905Z",
      "updatedAt": "2023-09-23T04:41:16.597Z"
    }
