- [Create Notification](#create)
- [Use Notification Event](#use)

# Notifications
our framework has a realtime notifications ready to use by Pusher but we are make it more usable by using **[Laravel Websocket](https://github.com/beyondcode/laravel-websockets)** this package generate a websocket server inside your server without any need to use Pusher. 

<hr>

<a name="create">
## Create Notification
</a>

to create a new notification form anywhere on your app, it's very easy by using this event.
```php
event(new PushNotifcation($title, $message, $icon, $image, $url,$type, $authId))
```
it's take some params 
1. $title `Title Of Notification`
2. $message `The Message Of Notification`
3. $icon `Font Awesome Icon like fa-user`
4. $url `url of onclick event`
5. $image `image for WebPushNotification`
6. $type `Type of Notification [all, user]`
7. $authId `Selected User ID` <small>Optional if type User</small>

this helpers trigger event PushNotification and this event use WebSocket Server to send notification to the client side  
<hr>

<a name="use">
## Use Notification
</a>

to show notification on your client side you have 2 options, the first one by using our helpers and view it by PHP like this 
```php
get_notifications()
```
this function get current auth admin user notification and return it as a collection.

the other way it by listing to the event by using pusherjs, to do that you must include pusherjs lib at the end of `</body>`
```html
<script src="https://js.pusher.com/7.0/pusher.min.js"></script>
```

and after that use this script to listing and push the notification to desktop notification and web notification

```js
var pusher = new Pusher('12345', {
    wsHost: '3x1.test',
    wsPort: 6001,
    wssPort: 6001,
    disableStats: true,
    // encrypted: true,
    authEndpoint: '{{ url(request()->path().'/auth') }}',
    auth: {
        headers: {
            'X-CSRF-Token': "{{ csrf_token() }}",
            'X-App-ID': this.app.id
        }
    },
    enabledTransports: ['ws', 'flash', 'wss'],
});
Pusher.logToConsole = false;
var channel = pusher.subscribe('push-notifications');
channel.bind('App\\Events\\PushNotification', function(data) {
    console.log(data);
    if(data.type === 'all' || authId == data.authId){
        Notification.requestPermission( permission => {
            let notification = new Notification(data.title, {
                body: data.message, // content for the alert
                icon: data.image // optional image url
            });

            // link to page on clicking the notification
            notification.onclick = (data) => {
                window.open(data.url);
            };
        });

        //Push To Notification
        $('#not-empty').remove();
        $('#not-area').append('<a href="'+data.url+'" class="dropdown-item"><i class="fa '+data.icon+' text-success"></i> '+data.title+'</a>');
        let current_value = $('#not-count').text();
        current_value++;
        $('#not-count').text(current_value);
    }
});
```
and your must change `3x1.test` with your domain name

to make this notification working you must up your websocket server by use this command

```bash
php artisan websockets:serve
```

<hr>
