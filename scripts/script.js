//displaying images dynamically
var myApp = angular
      .module("myModule", [])
      .controller("myController", function($scope) {
        var employees = [
          { firstName: "Ben", lastName: "Hastings", gender: "Male", salary: 55000 },
          { firstName: "David", lastName: "Carls", gender: "Male", salary: 90000 },
          { firstName: "Shannon", lastName: "Sterling", gender: "Female", salary: 90000 },
          { firstName: "Becky", lastName: "Smith", gender: "Female", salary: 65000 }
        ];
        $scope.employees = employees;
      });

//method chaining - displaying properties
// var myApp = angular
//       .module("myModule", [])
//       .controller("myController", function($scope) {
//         var employee = {
//           firstName: "David",
//           lastName: "Hastings",
//           gender: "Male"
//         };
//
//         $scope.employee = employee;
//       });

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
