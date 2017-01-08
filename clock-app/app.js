var app = angular.module("clockApp", []);
app.controller("TimeController", TimeController);

function TimeController($scope) {
    $scope.time = currentTime().toTimeString();
    $scope.updateTime = function() {
        $scope.userName = "";
        $scope.time =  currentTime().toTimeString()
    }
}

function currentTime() {
    return new Date();
}