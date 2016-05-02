'use strict';

var app = angular.module('testTwo', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/html/home.html',
            controller: 'homeCtrl'
        })
        .state('Products', {
            url: '/Products',
            templateUrl: '/html/products.html',
            controller: 'productCtrl'
        })
        .state('detail', {
            url: '/detail/:name',
            templateUrl: '/html/detail.html',
            controller: 'detailCtrl',
            resolve: {
                name: function(Product, $stateParams) {
                    return Product.getByName($stateParams.name);
                }
            }
        })
        .state('stat', {
            url: '/stat',
            templateUrl: '/html/stat.html',
            controller: 'statCtrl'
        })

    $urlRouterProvider.otherwise('/');
});
