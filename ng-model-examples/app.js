var app = angular.module("ngModelExamples", []);

app.controller("ExampleController", ExampleController);

function ExampleController($scope) {
    $scope.textBoxChange = function () {
        console.log("Textbox value changed");
    }
}