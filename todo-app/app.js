var app = angular.module("todoApp", []);
app.controller("todoController", todoController);

function todoController() {
    this.edit = false;
    this.todos = [
        "Learn Scala",
        "Write App with Spring",
        "User Angular as FontEnd"
    ];

    this.addNewToDo = function() {
        this.todos.push(this.newToDo);
        this.newToDo = "";
    };

    this.editMode = function () {
        this.edit = !this.edit;
    };

    this.deleteToDo = function (index) {
        this.todos.splice(index, 1);
    };
}
