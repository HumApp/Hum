const firebase = require('firebase');

// -- // -- // -- // Firebase Config // -- // -- // -- //
const config = {
  apiKey: 'AIzaSyAeIvTA7pcQQZ1i80667rYhX2a5oJhzaR4',
  authDomain: 'hum-app.firebaseapp.com',
  databaseURL: 'https://hum-app.firebaseio.com',
  projectId: 'hum-app',
  storageBucket: 'hum-app.appspot.com',
  messagingSenderId: '680274336951'
};
// -- // -- // -- // -- // -- // -- // -- // -- // -- //

// Initialize the app, but make sure to do it only once.
//   (We need this for the tests. The test runner busts the require
//   cache when in watch mode; this will cause us to evaluate this
//   file multiple times. Without this protection, we would try to
//   initialize the app again, which causes Firebase to throw.
//
//   This is why global state makes a sad panda.)
firebase.__bonesApp || (firebase.__bonesApp = firebase.initializeApp(config));

module.exports = firebase;
