var app = angular.module("calcApp", []);
app.controller("calculatorContrl", calculatorContrl);

function calculatorContrl() {
    this.buttonClicked = function (operator) {
        this.selectedOperation = operator;
    }

    this.evaluate = function (n1, n2) {
        n1 = parseFloat(n1);
        n2 = parseFloat(n2);

        if (this.selectedOperation == "+") {
            this.result = n1 + n2
        } else if (this.selectedOperation == "-") {
            this.result = n1 - n2
        } else if (this.selectedOperation == "*") {
            this.result = n1 * n2
        } else {
            this.result = n1 / n2
        }
    }
}