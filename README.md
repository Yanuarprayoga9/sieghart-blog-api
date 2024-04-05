# API SPEC
# BASE URL = https://sieghart-blog-api.vercel.app/

## Register User API


Endpoint : POST /

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
  "Signup successful"
}
```

Response Body Error :

```json
{
"Error: User Already registered<br> &nbsp; &nbsp;at errorHandler"
}
```
