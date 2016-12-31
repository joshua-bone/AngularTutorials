var app = angular.module("mainApp", ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'home.html',
            controller: 'customerController'
        })
        .when('/viewCustomers', {
            templateUrl: 'viewCustomers.html',
            controller: 'customerController'
        })
        .otherwise({
            redirectTo: '/home'
        });
});

app.controller('customerController', function($scope) {
    $scope.customers = [
        {name: 'Jane Stewart', city:'San Francisco'},
        {name: 'Sam Jenkins', city:'Moscow'},
        {name: 'Mark Andrews', city:'New York'},
        {name: 'Maria	Guzman', city:'Orlando'},
        {name: 'Clara	Wolfe', city:'Atlanta'},
        {name: 'Adrienne Kelly', city:'London'},
        {name: 'Tanya	Harvey', city:'Florence'},
        {name: 'Jana Maxwell', city:'Dallas'},
        {name: 'Ada	Manning', city:'Los Angeles'},
        {name: 'Tara Curry', city:'Sydney'},
        {name: 'Archie Harmon', city:'Prague'},
        {name: 'Ted	Hammond', city:'Denver'},
        {name: 'Lee	Barber', city:'Seattle'}
    ];












    $scope.message = "Click the link to view the customers list.";
});
