//create a module (container) called myModule that has no dependencies
// var myApp = angular.module("myModule", []);
//
// // //create controller (JS function)
// // var myController = function($scope) {
// //   $scope.message = "AngularJS Tutorial";
// // }
// //
// // //register controller with module
// // //name of the controller and name of function
// // myApp.controller("myController", myController);
//
// //can refactor like this:
// myApp.controller("myController", function($scope) {
//   //complex object
//   var employee = {
//     firstName: "David",
//     lastName: "Hastings",
//     gender: "Male"
//   }
//   //change $scope to employee object as model being passed
//   $scope.employee = employee;
//
//   // $scope.message = "AngularJS Tutorial";
// });

//method chaining
var myApp = angular
      .module("myModule", [])
      .controller("myController", function($scope) {
        var employee = {
          firstName: "David",
          lastName: "Hastings",
          gender: "Male"
        };
        
        $scope.employee = employee;
      });