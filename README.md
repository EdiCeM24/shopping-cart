# Simple Shopping Cart

## Lessons

1. Create react app
    1. npx create-react-app
    2. remove extra files
2.  Create website layout
    1. add Header, main and Basket component
    2. style component  
3.  Create Main Component
    1. create data.js
    2. render product items 
4.  Create Product Component
    1. create product divs
    2. pass props to product component  
5. Implement Cart
    1. add and remove items from the cart   
6. Create basket component
    1. list items in cartItems
    2. calculate sub total
    3. show checkout button 
7. Save Cart Items In Local Storage
    1. save items in local storage on add and remove
    2. use useEffect to get items in local storage.   
8. Use useTransition and useDeferedValue // react 2018(Es18)
    1. read items in local storage using useTransition
    2. change cartItems.length to transition effect
9. Deploy website on github pages
    1. login to github account
    2. push code to github
    3. npm install gh-pages --save-dev
    4. package.json "homepage": "https://github_name.github.io/webapp_name",
    5. add deployment script: "predeploy": "npm run build", "deploy": "gh-pages -d build",
    6. npm run deploy.