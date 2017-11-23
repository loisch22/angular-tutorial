//displaying images dynamically
var myApp = angular
      .module("myModule", [])
      .controller("myController", function($scope) {
        var countries = [
          {
            name: "UK",
            cities: [
              { name: "London" },
              { name: "Manchester" },
              { name: "Birmingham"}
            ]
          },
          {
            name: "USA",
            cities: [
              { name: "Seattle" },
              { name: "New York" },
              { name: "Los Angeles" }
            ]
          },
          {
            name: "South Korea",
            cities: [
              { name: "Seoul" },
              { name: "Busan" },
              { name: "Gangnam" }
            ]
          },
        ];
        //scope object
        $scope.countries = countries;
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
