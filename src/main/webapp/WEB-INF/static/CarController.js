/**
 * Created by blue on 2016/12/30.
 */
angular.module('carApp',[])
    .controller('carCtrl',function($scope){
       $scope.data={
           cars:[
               {ID: 1, brand: "BMW", price:100000},
               {ID: 2, brand: "Mercedes", price:100000},
               {ID: 3, brand: "Ferrari", price:100000},
               {ID: 4, brand: "Audi", price:100000}
           ],
           ID:4
       };

       $scope.addCar=function(car) {
           $scope.data.cars.push({ID: ++$scope.data.ID, brand: car.brand, price:car.price});
       };
       $scope.deleteCar=function(id) {
           for(var i=0;i<$scope.data.cars.length;i++){
               if($scope.data.cars[i].ID==id){
                   $scope.data.cars.splice(i,1);
                   break;
               }
           }
       };
       $scope.updateCar=function(car) {

       };


    });
