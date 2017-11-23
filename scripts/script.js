//displaying images dynamically
var myApp = angular
      .module("myModule", [])
      .controller("myController", function($scope) {
        var employees = [
          { name: "Ben", dateOfBirth: new Date("November 23, 1980"), gender: "Male", salary: 55000.788, city: "Seattle" },
          { name: "Susan", dateOfBirth: new Date("January 23, 1970"), gender: "Female", salary: 68000, city: "San Francisco" },
          { name: "Sara", dateOfBirth: new Date("March 10, 1984"), gender: "Female", salary: 57000, city: "Seattle" },
          { name: "Mark", dateOfBirth: new Date("August 15, 1974"), gender: "Male", salary: 53000, city: "San Francisco" },
          { name: "Todd", dateOfBirth: new Date("December 05, 1983"), gender: "Male", salary: 60000, city: "San Francisco" }
        ];
        $scope.employees = employees;

        $scope.search = function (item) {
          if($scope.searchText == undefined) {
            //returns all data
            return true;
          } else {
            if (item.name.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 || item.city.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1) {
              return true;
            }
          }
          return false;
        }


      });
