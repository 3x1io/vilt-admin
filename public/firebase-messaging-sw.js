// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

try
{
// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyDPYDyslWIYWUcP83PNdAb_2MVoMf9pu9M",
    authDomain: "test-cff54.firebaseapp.com",
    databaseURL: "https://test-cff54-default-rtdb.firebaseio.com",
    projectId: "test-cff54",
    storageBucket: "test-cff54.appspot.com",
    messagingSenderId: "53388609499",
    appId: "1:53388609499:web:f15b6647e11ce7af9c89fe",
    measurementId: "G-JPW9TRZC0Q"
});


// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
    const messaging = firebase.messaging();

    messaging.onBackgroundMessage((payload) => {
        var audio = new Audio('https://devsuez.emalleg.net/storage/sound/notifications.mp3');
        audio.play();

        let options = {
            icon: "",
            image: "",
            body: "",
            tag: "alert",
        };

        if(payload.data.message){
            options.body = payload.data.message;
        }

        if(payload.data.image){
            options.icon = payload.data.image;
        }

        let notification = self.registration.showNotification(
            payload.data.title,
            options
        );

        if(payload.data.url){
            // link to page on clicking the notification
            notification.onclick = (payload) => {
                window.open(payload.data.url);
            };
        }

    });

}
catch(e) {
    console.log(e)
}
