'use strict';

angular.module('myApp').controller('UserController', ['$scope', '$log', 'UserService', function($scope, $log, UserService) {

    var userList = [
            {
                firstName: 'George',
                lastName: 'Okez',
                email: 'georgeokez@gmail.com',
                age: 30
            },
            {
                firstName: 'Tobi',
                lastName: 'Abram',
                email: 'tobiabram@gmail.com',
                age: 28
            },
            {
                firstName: 'Damola',
                lastName: 'Asiyanbola',
                email: 'andrewdamz@gmail.com',
                age: 26
            }
        ];

    $scope.user = {};

    $scope.users = [];

    function fetchAllUsers (){
        $scope.users = userList;
    }

    function getUser(index){

    }

    $scope.addUser = function (user) {
        $scope.users.push(user);
        $scope.user = {};
    }

    $scope.editUser = function(index){
        $scope.user = $scope.users[index];
    }

    function updateUser (index, user) {
        $scope.users.splice(index, 1, user);
    }

    $scope.deleteUser = function (index) {
        $scope.users.splice(index, 1);
    }

    function delelteAllUsers() {
        $scope.users = [];
    }

    function init() {
        fetchAllUsers();
    }

    init();



}]);

/*
angular.module('myApp').controller('UserController', ['$scope', '$log', 'UserService', function($scope, $log, UserService) {

    var self = this;
    self.user={id:null,firstname:'',lastname:'',email:'',age:null};
    self.users=[];

    self.submit = submit;
    self.edit = edit;
    self.remove = remove;
    self.reset = reset;


    fetchAllUsers();

    function fetchAllUsers(){
        UserService.fetchAllUsers()
            .then(
            function(data) {
                self.users = data;
            },
            function(errResponse){
                console.error('Error while fetching Users');
            }
        );
    }

    function getAllUsers(){
        UserService.fetchAllUsers()
            .then(
                function (data) {
                    $scope.users = data;
                },
                function (errResponse) {
                    console.error("Unable to fetch all Users.");
                }
            );
    }


    function createUser(user){
        UserService.createUser(user)
            .then(
            fetchAllUsers,
            function(errResponse){
                console.error('Error while creating User');
            }
        );
    }

    function updateUser(user, id){
        UserService.updateUser(user, id)
            .then(
            fetchAllUsers,
            function(errResponse){
                console.error('Error while updating User');
            }
        );
    }

    function deleteUser(id){
        UserService.deleteUser(id)
            .then(
            fetchAllUsers,
            function(errResponse){
                console.error('Error while deleting User');
            }
        );
    }

    function submit() {
        if(self.user.id===null){
            console.log('Saving New User', self.user);
            createUser(self.user);
        }else{
            updateUser(self.user, self.user.id);
            console.log('User updated with id ', self.user.id);
        }
        reset();
    }

    function submit(){
        if(self.user.id == null){
            console.log('Saving New User', self.user);
            createUser(self.user);
        }else{
            updateUser(self.user);
            console.lo()
        }
    }

    function edit(id){
        console.log('id to be edited', id);
        for(var i = 0; i < self.users.length; i++){
            if(self.users[i].id === id) {
                self.user = angular.copy(self.users[i]);
                break;
            }
        }
    }

    function remove(id){
        console.log('id to be deleted', id);
        if(self.user.id === id) {//clean form if the user to be deleted is shown there.
            reset();

        }
        deleteUser(id);
    }


    function reset(){
        self.user={id:null,firstname:'',lastname:'',email:'',age:null};
        $scope.myForm.$setPristine(); //reset Form
    }

}]);

*/
