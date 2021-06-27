# Firehouse Pizza Shop
## An eCommerce platform built with the MERN stack & Redux.
## [Live Application](https://firehousepizza.herokuapp.com/)
![image](https://user-images.githubusercontent.com/19238216/123558702-824df200-d7b9-11eb-9722-82f50116b94e.png)


## ✨Technology Used

### Front-end: 
- React Js
- Bootstrap
- React Router
- Redux
- Framer Motion

### Back-end:
- Express JS
- MongoDB
- JWT Authentication

## ✨Features
- Fully functional Cart
- Product Details, user review and ratings
- JWT authentication
- Product Search
- User profile create/update
- User order management
- Admin role with authorization
- Admin product management
- Admin Order management
- Admin user management
- Admin Order details page
- Mark order as delivered option
- Checkout feature
- Payment gateway integration

## ✨Usage
I have used ECMAScript Modules in the backend. Make sure to have at least Node v14.6+ or you will need to add the "--experimental-modules" flag. Also, when importing a file (not a package), be sure to add .js at the end or you will get a "module not found" error.


## ✨Project Setup
## Env Variables
Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 5500
MONGO_URI = your mongodb uri
JWT_SECRET = 'xpiredbrain'
PAYPAL_CLIENT_ID = your paypal client id
```
## Install Dependencies
```
npm i
cd client
npm i
```

## Run
```
# Run frontend (:3000) & backend (:5500)
npm run dev

# Run backend only
npm run server
```

## Seed Database
``` 
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```
```
Sample login credentials:

shahnewaztamim@gmail.com (Admin)
123456

faruque@gmail.com
123456
```



