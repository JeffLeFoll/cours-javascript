
(function (exports) {
    'use strict';
    function FizzBuzz() {
        this.resultat = [];
    };

    FizzBuzz.prototype = {
        calculer: function () {
            for (var i = 0; i <= 100; i++) {

                if (i % 3 === 0 && i % 5 === 0) {
                    this.resultat.push('fizzbuzz');
                    
                } else if (i % 3 === 0) {
                    this.resultat.push('fizz');
                    
                } else if (i % 5 === 0) {
                    this.resultat.push('buzz');
                    
                } else {
                    this.resultat.push(i);
                }
            }
        }
    };

    exports.FizzBuzz = FizzBuzz;

})(this);
