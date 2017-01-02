/**
 * Created by blue on 2016/12/30.
 */
angular.module('userApp',[])
    .constant('url','http://localhost:8080/rest/users/')
    .controller('userCtrl',function($scope,$http,url){
       $scope.data=[];

       $scope.getUsers=function () {
           $http.get(url)
               .then(function (res) {
                   $scope.data=res.data;
               });
       };

       $scope.getUsers();


       $scope.addUser=function(user) {
           $http.post(url,user)
               .then(function(){
                   $scope.getUsers();
               });


       };
       $scope.deleteUser=function(id) {
           $http.delete(url+id)
               .then(function(){
               $scope.getUsers();
           });
       };
       $scope.updateUser=function(user) {
           $http.put(url+user.id,user)
               .then(function(){
                   $scope.getUsers();
               });
       };


    });
