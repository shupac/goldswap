import angular from 'angular';
import uiRouter from 'angular-ui-router';
import config from './main/app.config';
import run from './main/app.run';
import appController from './main/app.controller';
import './main/app.styl';
import components from './components/components';
import login from './login/login';

angular.module('app',
    [
        uiRouter,
        components.name,
        login.name
    ])
    .controller('appController', appController)
    .config(config)
    .run(run);
