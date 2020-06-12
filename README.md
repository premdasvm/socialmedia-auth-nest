# Google & Facebook OAuth Integration To NestJS


#### Google
- Find the Config file under the Google Module Folder.
- Change the `GOOGLE_CLIENT_ID` & `GOOGLE_SECRET` With the new credential of your app. From google developers console.
- Import the Google Module on to the `app.module.ts` of your project.


#### Facebook
- Find the `config.ts` file under the Facebook Module Folder
- Change the `FACEBOOK_APP_ID` & `FACEBOOK_SECRET` With the new credentials of your app, From the facebook Developers Console.
- Import the Facebook Module on to the `app.module.ts` file.


### Installation 
###### Development
#
```sh
$ npm install
$ nest start --watch
```
#
##### Production
#
```sh
$ npm install
$ nest build
````
