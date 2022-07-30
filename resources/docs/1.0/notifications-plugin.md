- [Notifications Plugin](#notifications-plugin)
    - [Install Notifications Plugin](#install-notifications-plugin)
    - [Use Database Base Menu](#use-database-base-menu)

<a name="notifications-plugin" />
# Notifications Plugin

we are build a full notification system for you with mutli provider like `mail`, `firebase` and open the way to add more all of this working on queue and have a lot of helpers to make it easy to use this notification on your system

<hr>
<a name="install-notifications-plugin" />
## [Install Notifications Plugin](#install-notifications-plugin)

to install the notifications plugin by run this command

```bash
php artisan notifications:install
```

it will generate roles and permissions for notifications

after that we must get a firebase service file and attach the path to `FIREBASE_CREDENTIALS` on `.env` and generate a firebase database and set the url to `FIREBASE_DATABASE_URL` on `.env` to connect the firebase for realtime actions
