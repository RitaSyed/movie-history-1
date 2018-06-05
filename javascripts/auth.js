const {getAllMoviesEvent,} = require('./events');
const {setUID,} = require('./firebaseApi');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setUID(user.uid);
      $('#myMovies').removeClass('hide');
      $('#search').addClass('hide');
      $('#authScreen').addClass('hide');
      $('#mine, #navSearch, #logout').removeClass('hide');
      $('#authenticate').addClass('hide');
      // call the getMoviesEvent
      getAllMoviesEvent();
      // User is signed in.
    } else {
      // No user is signed in.
      $('#myMovies').addClass('hide');
      $('#search').addClass('hide');
      $('#authScreen').removeClass('hide');
      $('#mine, #navSearch, #logout').addClass('hide');
      $('#authenticate').removeClass('hide');
    }
  });
};
module.exports = {
  checkLoginStatus,
};
