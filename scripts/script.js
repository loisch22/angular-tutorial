//displaying images dynamically
var myApp = angular
      .module("myModule", [])
      .controller("myController", function($scope) {
        var technologies = [
          { name: "C#", likes: 0, dislikes: 0 },
          { name: "ASP.NET", likes: 0, dislikes: 0 },
          { name: "SQL Server", likes: 0, dislikes: 0 },
          { name: "AngularJS", likes: 0, dislikes: 0 }
        ];
        $scope.technologies = technologies;
        //increment likes/dislikes
        $scope.incrementLikes = function (technology) {
          technology.likes++;
        };
        $scope.incrementDislikes = function (technology) {
          technology.dislikes++;
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
