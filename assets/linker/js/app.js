'use strict';


var module = angular.module('nrc', [
    'ui.router',
    'esi.ManageCardsCtrl'
]);

module.config(['$stateProvider', '$urlRouterProvider',
       function($stateProvider, $urlRouterProvider) {
            
    
    $urlRouterProvider.when('/home', '/');
    $urlRouterProvider.otherwise('/');
    
    
    
    
    $stateProvider
    
        // main navigation
        
        .state('home', {
            url: "/",
            templateUrl: "templates/home.html"
        })
        .state('manageLoyaltyCards', {
            url: "/manage-loyalty-cards",
            controller: "ManageCardsCtrl",
            templateUrl: "templates/manageLoyaltyCards.html",
            resource: "loyaltyCard"
        })
        .state('managePPCards', {
            url: "/manage-pp-cards",
            controller: "ManageCardsCtrl",
            templateUrl: "templates/managePPCards.html",
            resource: "ppcard"
        });
    
}]);





