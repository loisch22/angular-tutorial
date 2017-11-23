//displaying images dynamically
var app = angular
      .module("myModule", [])
      .controller("myController", function($scope) {
        var countries = [
          {
            name: "India",
            cities: [
              { name: "Hyderabad" },
              { name: "Chennai" }
            ]
          },
          {
            name: "USA",
            cities: [
              { name: "Los Angeles" },
              { name: "Chicago" }
            ]
          }
        ];
        $scope.countries = countries;
      });

      //ng-init stores data from parent to child such as when displaying parent index (countries index) for each child (city)
