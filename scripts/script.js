//displaying images dynamically
var myApp = angular
      .module("myModule", [])
      .controller("myController", function($scope) {
        var employees = [
          { name: "Ben", dateOfBirth: new Date("November 23, 1980"), gender: "Male", salary: 55000.788 },
          { name: "Susan", dateOfBirth: new Date("January 23, 1970"), gender: "Female", salary: 68000 },
          { name: "Sara", dateOfBirth: new Date("March 10, 1984"), gender: "Female", salary: 57000 },
          { name: "Mark", dateOfBirth: new Date("August 15, 1974"), gender: "Male", salary: 53000 },
          { name: "Todd", dateOfBirth: new Date("December 05, 1983"), gender: "Male", salary: 60000 }
        ];
        $scope.employees = employees;
        $scope.sortColumn = "name";
        $scope.reverseSort = false;

        //? same is if statement
        //! changes value to opposite - if NOT the same as false change to true
        // : same as else change to false aka :false
        $scope.sortData = function (column) {
            $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
            $scope.sortColumn = column;
        }

        $scope.getSortClass = function (column) {
          if($scope.sortColumn == column) {
            return $scope.reverseSort ? 'arrow-down' : 'arrow-up'
          }
          //unselected column has no arrow
          return '';
        };
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
