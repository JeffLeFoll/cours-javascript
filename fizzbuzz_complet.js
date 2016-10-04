
(function (exports) {
    'use strict';
    function FizzBuzz() {
        this.resultat = [];
    };

    exports.FizzBuzz = FizzBuzz;

    FizzBuzz.prototype.regles = [new RegleMultiple(15, 'fizzbuzz'), new RegleMultiple(3, 'fizz'), new RegleMultiple(5, 'buzz')];

    FizzBuzz.prototype.calculer = function () {
        for (var i = 0; i <= 100; i++) {
            this.resultat.push(this.soumettreLIndexAuxRegles(i));
        }
    };

    FizzBuzz.prototype.soumettreLIndexAuxRegles = function (index) {
        for (let regle of this.regles) {
            if (regle.estUnMultipleDe(index)) {
                return regle.valeurSiVrai();
            }
        }
        return index;
    };

})(this);
