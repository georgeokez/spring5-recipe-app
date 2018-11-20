'use strict';

angular.module('myApp').controller('MockUserController', ['$scope', '$log', 'UserService', function($scope, $log, UserService) {

    var userList = [
        {
            id : 1,
            firstName: 'George',
            lastName: 'Okez',
            email: 'georgeokez@gmail.com',
            age: 30
        },
        {
            id : 2,
            firstName: 'Tobi',
            lastName: 'Abram',
            email: 'tobiabram@gmail.com',
            age: 28
        },
        {
            id : 3,
            firstName: 'Damola',
            lastName: 'Asiyanbola',
            email: 'andrewdamz@gmail.com',
            age: 26
        }
    ];

    $scope.user = {id:null, firstName:'', lastName:'', email:'', age:null};
    $scope.users = [];
    $scope.toggleBtn = false;

    init();

    function init() {
        fetchAllUsers();
    }

    function fetchAllUsers (){
        $scope.users = userList;
    }

    function getUser(index){

    }

    $scope.addUser = function (user) {
        user.id = userList.length;
        userList.push(user);
        resetUser();
        fetchAllUsers();
    }

    $scope.editUser = function(index){

        var id = userList[index].id;
        var firstName = userList[index].firstName;
        var lastName = userList[index].lastName;
        var email = userList[index].email;
        var age  = userList[index].age;

        $scope.user.id = id;
        $scope.user.firstName = firstName;
        $scope.user.lastName = lastName;
        $scope.user.email = email;
        $scope.user.age = age;

        $scope.toggleBtn = true;

    }

    $scope.updateUser = function (user) {
        userList.splice((user.id - 1), 1, user);
        resetUser();
        $scope.toggleBtn = false;

        fetchAllUsers();
    }

    $scope.deleteUser = function (index) {
        userList.splice(index, 1);
        fetchAllUsers();
    }

    function delelteAllUsers() {
        userList = [];
        fetchAllUsers();
    }

    function resetUser(){
        $scope.user = {id:null, firstName:'', lastName:'', email:'', age:null};
    }


}]);