var app = angular.module("nestedControllers", []);

app.controller("Controller1", Controller1);
app.controller("Controller2", Controller2);

function Controller1($http) {
    this.ngProp = "From Controller 1";
}

function Controller2() {
    this.ngProp = "From Controller 2";
}