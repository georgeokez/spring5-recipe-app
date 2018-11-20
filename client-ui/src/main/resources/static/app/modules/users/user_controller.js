'use strict';

angular.module('myApp').controller('UserController', ['$scope', '$log', 'UserService', function($scope, $log, UserService) {

    var userList = [];
    $scope.user = {id:null, firstname:'', lastname:'', email:'', age:null};
    $scope.users = [];
    $scope.toggleBtn = false;

    init();

    function init() {
        fetchAllUsers();
    }

    function fetchAllUsers (){

        UserService.fetchAllUsers()
            .then(
                function(data) {
                    userList = data;
                    $scope.users = userList;
                },
                function(errResponse){
                    console.error('Error while fetching Users');
                }
            );
    }

    function getUser(index){

    }

    $scope.addUser = function (user) {

        UserService.createUser(user)
            .then(
                function (){
                    resetUser();
                    fetchAllUsers();
                },
                function(errResponse){
                    console.error('Error while creating User');
                }
            );
    }

    $scope.editUser = function(index){

        var id = userList[index].id;
        var firstname = userList[index].firstname;
        var lastname = userList[index].lastname;
        var email = userList[index].email;
        var age  = userList[index].age;

        $scope.user.id = id;
        $scope.user.firstname = firstname;
        $scope.user.lastname = lastname;
        $scope.user.email = email;
        $scope.user.age = age;

        $scope.toggleBtn = true;

    }

    $scope.updateUser = function (user) {
        UserService.updateUser(user, user.id)
            .then(
                function (){
                    resetUser();
                    $scope.toggleBtn = false;
                    fetchAllUsers();
                },
                function(errResponse){
                    console.error('Error while updating User');
                }
            );
    }

    $scope.deleteUser = function (index) {
        UserService.deleteUser(index)
            .then(
                function (){
                    fetchAllUsers();
                },
                function(errResponse){
                    console.error('Error while deleting User');
                }
            );
    }

    function delelteAllUsers() {
        userList = [];
        fetchAllUsers();
    }

    function resetUser(){
        $scope.user = {id:null, firstname:'', lastname:'', email:'', age:null};
    }



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