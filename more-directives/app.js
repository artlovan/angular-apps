angular.module("directivesApp", [])
    .controller("moreDirectivesController", moreDirectivesController);

function moreDirectivesController() {
    this.personList = [
        {"name": "Dan", "age": 20, "language": "Java"},
        {"name": "Tim", "age": 23, "language": "JS"},
        {"name": "Ditter", "age": 29, "language": "Scala"}
    ];
}
