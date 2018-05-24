'use strict';

import 'angular/angular.min'
import 'angular-route'
import 'angular-animate'
import 'angular-sanitize'
import 'ng-swiper'

import './app.config'
import './app.core'
import './app.routes'
import './app.services'

import * as Swiper from '../assets/js/swiper.min.js'
window.Swiper = Swiper

import '../components/navbar/navbar.ctrl'
import '../components/swiper/swiper.ctrl'
import '../components/fixedbanner/fixedbanner.ctrl'
import '../sections/home/home.ctrl'
import '../sections/aboutus/aboutus.ctrl'
import '../sections/solutions/solutions.ctrl'

angular.module('app', ['ngRoute', 'ngAnimate', 'ngSanitize', 'app.routes', 'app.core', 'app.services', 'app.config', 'ngSwiper']);

