
(function (exports) {
    'use strict';
    function FizzBuzz() {
        this.resultat = [];
    };

    FizzBuzz.prototype = {
        calculer: function () {
            for (var i = 0; i <= 100; i++) {

                if (i % 3 === 0) {
                    this.resultat.push('fizz');
                } else {
                    this.resultat.push(i);
                }
            }
        }
    };

    exports.FizzBuzz = FizzBuzz;

})(this);