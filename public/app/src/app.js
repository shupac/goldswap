import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularFire from 'angularfire';
import config from './main/app.config';
import run from './main/app.run';
import appController from './main/app.controller';
import './main/app.styl';

import components from './components/components';
import login from './login/login';
import home from './home/home';
import upload from './upload/upload';
import month from './month/month';
import profile from './profile/profile';

angular.module('app',
    [
        uiRouter,
        angularFire,
        components.name,
        login.name,
        home.name,
        upload.name,
        month.name,
        profile.name,
    ])
    .constant('FIREBASE_URL', 'https://goldswap.firebaseio.com')
    .controller('appController', appController)
    .config(config)
    .run(run);
