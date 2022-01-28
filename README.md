# About this project

This project is used for Trakteer visual detailing test.
This app contain three card component, which can add more later.
This app created with react and create react app

# How To Install

make sure node JS installed on your machine. Fork this github repository and use command line bellow

```
npm install
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# Adding more card component

for adding more card component simply just adding more array of object in **users.json**. that file located in **src/JSON/users.json**.

The array of object containing this object:

```
{
    "id": number,
    "avatar_img": string,
    "cover_img": string,
    "name": string,
    "username": string,
    "bio": string,
    "follower_count": number,
    "followed_status": boolean,
    "category": string
}
```
