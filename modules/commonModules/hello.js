var helloModule = angular.module("helloModule", []);

helloModule.controller("modulesController", modulesController);

function modulesController() {
    this.helloMsg = "We welcome you on our page!";
}
