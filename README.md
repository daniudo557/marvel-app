# Marvel-App
This is a project to consult Marvel's comics using [Marvel api](https://developer.marvel.com/).

## Technologies
It was created using:
- [React](https://github.com/facebook/react)
- [SCSS](https://github.com/sass/sass)
- [Axios](https://github.com/axios/axios)
- [Redux](https://github.com/reduxjs/redux) - to save user comic list
- [React-multi-carousel](https://github.com/YIZHUANG/react-multi-carousel) - to display comics in carousel on the home page
- [React-fontawesome](https://github.com/FortAwesome/react-fontawesome) - to use customs icons in navbar
- [React-loading](https://github.com/fakiolinho/react-loading) - to display beautiful spinner while loading
- [React-router](https://github.com/ReactTraining/react-router) - to manage application routes

## Quickstart

1- Download the source code
`git clone https://github.com/daniudo557/marvel-app`

2- Install all the dependencies
`npm install`

3 - Create account on [Marvel api](https://developer.marvel.com/)

4 - Create `.env` file on root folder of project and include this two lines:
```
REACT_APP_API_KEY:<YOUR_API_KEY>
REACT_APP_HASH:<YOUR_HASH>
```

3- Run project
`npm start`

## Demo
This is a [Demo](https://daniudo557.github.io/marvel-app/) of project. Feel free to test and use

## Backend
This application uses [Marvel-app-backend](https://github.com/daniudo557/marvel-app-backend), a simple backend to send emails.
