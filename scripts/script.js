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


  

      });
