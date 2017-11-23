//displaying images dynamically
var app = angular
      .module("myModule", [])
      .controller("myController", function($scope) {
        var employees = [
          { name: "Ben", dateOfBirth: new Date("November 23, 1980"), gender: 1, salary: 55000.788, city: "Seattle" },
          { name: "Susan", dateOfBirth: new Date("January 23, 1970"), gender: 2, salary: 68000, city: "San Francisco" },
          { name: "Sara", dateOfBirth: new Date("March 10, 1984"), gender: 2, salary: 57000, city: "Seattle" },
          { name: "Mark", dateOfBirth: new Date("August 15, 1974"), gender: 1, salary: 53000, city: "San Francisco" },
          { name: "Todd", dateOfBirth: new Date("December 05, 1983"), gender: 3, salary: 60000, city: "San Francisco" }
        ];
        $scope.employees = employees;




      });
