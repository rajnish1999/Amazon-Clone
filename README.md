# Amazon_Clone

## Description 
It is a replica of amazon website.

## Live Demo
[Click here to open the live demo](https://clone-ca516.web.app/)

## Key features
- **Homepage:** Here user can see all the products present in the store.

![homepage](https://github.com/rajnish1999/Amazon-Clone/blob/master/public/images_for_github/Landing_Page.jpeg)
<br><br>

- **SignIn page:**

![signIn](https://github.com/rajnish1999/Amazon-Clone/blob/master/public/images_for_github/Sign_In.jpeg)
<br><br>

- **Shopping Basket page:** Here user can see their total amount and the stuff they added in their cart.

![basket](https://github.com/rajnish1999/Amazon-Clone/blob/master/public/images_for_github/Shopping_Basket.jpeg)
<br><br>

- **Checkout page** Here user can pay their bill by filling card details.

![Checkout](https://github.com/rajnish1999/Amazon-Clone/blob/master/public/images_for_github/Checkout1.jpeg)
<br><br>
![Checkout](https://github.com/rajnish1999/Amazon-Clone/blob/master/public/images_for_github/Checkout2.jpeg)
<br><br>

- **List of orders page:** Here user can see the list of all the orders they have ordered.

![orders](https://github.com/rajnish1999/Amazon-Clone/blob/master/public/images_for_github/Final_Order.jpeg)
<br><br>

## Usage
1. Fork the repo and then clone it or download it.
2. First install all dependencies:
```bash
    # with npm
    npm install
    
    # or with yarn
    yarn
 ```
3. Open firebase and configure it for setting up authentication and database(cloud firestore).

4. Create a `.env` file and insert the following code. Replace values with yours!!

```javascript
REACT_APP_API_KEY = API_KEY
REACT_APP_AUTH_DOMAIN = AUTH_DOMAIN
REACT_APP_PROJECT_ID = PROJECT_ID
REACT_APP_STORAGE_BUCKET = STORAGE_BUCKET
REACT_APP_MESSAGE_SENDERID = MESSAGE_SENDERID
REACT_APP_APP_ID = APP_ID 
REACT_APP_MEASUREMENT_ID = MEASUREMENT_ID
```
5. Start the server
```javascript
npm start [OR] yarn start
```
6. Now run the app
  ```javacript
  localhost:[PORT] (PORT=defined in .env)
  ```

## Libraries used
- React.js
- Firebase(for authentication, storage and deployment)
- Node.js
- Express.js(for server)
- Stripe(for dummy payment)

# Contribute
Show your support by 🌟 the project!!




