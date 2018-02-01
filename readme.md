##Consensys Test

The app uses React, Redux and Saga to list few video suggestions from YouTube. It also displays the video detail of the selected video.

In order to run the application, follow these steps:
1. `npm run install`
2. `npm run dev`(for dev build). This starts a webpack dev server.
3. Navigate to `localhost:8080` to view the app.

Initial no list or detail is displayed. Start typing in the search box to view some results.

The app is also configured for a production build using webpack. Run the command `npm run prod` to build the app in production mode. A dist folder is created with the production build which can be served on a suitable server