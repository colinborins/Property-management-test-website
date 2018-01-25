var config =
    {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    storageBucket: "",
    messagingSenderId: ""
    };

firebase.initializeApp(config);
var storage = firebase.storage();
var storageRef = storage.ref();
var tangRef = storageRef.child('client1/client1.jpg');

firebase.auth().signInAnonymously().then(function() {

  tangRef.getDownloadURL().then(function(url)                             {
    document.querySelector('img').src = url;
    
  }).catch(function(error) {
    console.error(error);
  });
});