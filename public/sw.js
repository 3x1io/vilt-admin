importScripts('./pusher.worker.min.js');


const pusher = new Pusher('a16a249ecabcf981c7a0',  {
    cluster: "eu",
});

Pusher.logToConsole = true;

const pusherChannel = pusher.subscribe('push-notifications');

pusherChannel.bind('Modules\\Notifications\\Events\\PushNotification', function(data) {
    let notification =  self.registration.showNotification(data.title, {
        body: data.description, // content for the alert
        icon: data.image // optional image url
    });

    // link to page on clicking the notification
    notification.onclick = (data) => {
        window.open(data.url);
    }
});
