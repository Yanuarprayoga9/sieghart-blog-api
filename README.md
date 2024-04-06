# PREREQUISITE 
node js 21.x.
npm 10.xx


# INSTAL
clone project
```json
"git clone =https://github.com/Yanuarprayoga9/sieghart-blog-api.git"
```
setup .env
```json
"PORT=5555"
"MONGO_DB_URL="
"JWT_SECRET="
```


# DATABASE DOCUMENTATION
no sql database

### https://drive.google.com/file/d/1ut7GntsVowLVtHwsDnuhmxDXfZ2hbI8R/view?usp=sharing



# API SPEC
### BASE URL = https://sieghart-blog-api.vercel.app/v1

## AUTHENTICATION

### Signup 

Endpoint : POST /auth/signup

Request Body :

```json
{
  "username": "yanuar ganteng",
  "email": "yanuarprayoga@gmail.com",
  "password": "yanuar123"
}
```

Response Body Success :

```json
{

    "user": {
        "_id": "660f708fa058ee8749c0a65f",
        "username": "yanuar ganteng",
        "email": "yanuarprayoga@gmail.com",
        "profilePicture": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
        "isAdmin": false,
        "createdAt": "2024-04-05T03:31:27.266Z",
        "updatedAt": "2024-04-05T03:31:27.266Z",
        "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MGY3MDhmYTA1OGVlODc0OWMwYTY1ZiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE3MTIyODkxMDF9.qTZTyeAK6DEjCmekBEU2_n7Kg5JmW_pGS1l3e-gR0Zg"
}
```

Response Body Error :

```json
{
"Error: User Already registered<br> &nbsp; &nbsp;at errorHandler"
}
```


### SignIn 


Endpoint : POST /auth/signin

Request Body :

```json
{
  "email": "yanuarprayoga@gmail.com",
  "password": "yanuar123"
}
```

Response Body Success :

```json
{

    "user": {
        "_id": "660f708fa058ee8749c0a65f",
        "username": "yanuar ganteng",
        "email": "yanuarprayoga@gmail.com",
        "profilePicture": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
        "isAdmin": false,
        "createdAt": "2024-04-05T03:31:27.266Z",
        "updatedAt": "2024-04-05T03:31:27.266Z",
        "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MGY3MDhmYTA1OGVlODc0OWMwYTY1ZiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE3MTIyODkxMDF9.qTZTyeAK6DEjCmekBEU2_n7Kg5JmW_pGS1l3e-gR0Zg"
}
```

Response Body Error :

```json
{
"Error: User Not Found or invalid password"
}
```

### google 


Endpoint : POST /auth/google

Request Body :

```json
{
  "email": "yanuarprayoga@gmail.com",
  "password": "yanuar123",
  "googlePhotoUrl":""
}
```

Response Body Success :

```json
{
{
    "user": {
        "_id": "660f708fa058ee8749c0a65f",
        "username": "yanuar ganteng",
        "email": "yanuarprayoga@gmail.com",
        "profilePicture": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
        "isAdmin": false,
        "createdAt": "2024-04-05T03:31:27.266Z",
        "updatedAt": "2024-04-05T03:31:27.266Z",
        "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MGY3MDhmYTA1OGVlODc0OWMwYTY1ZiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE3MTIyODkxMDF9.qTZTyeAK6DEjCmekBEU2_n7Kg5JmW_pGS1l3e-gR0Zg"
}}
```

Response Body Error :

```json
{
"Error: "
}
```
