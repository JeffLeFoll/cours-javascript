
(function (exports) {
    'use strict';
    function RegleMultiple(multiple, valeur) {
        this.multiple = multiple;
        this.valeur = valeur;
    };

    exports.RegleMultiple = RegleMultiple;

    RegleMultiple.prototype.estUnMultipleDe = function (valeurATester) {
        return valeurATester % this.multiple === 0;
    };

    RegleMultiple.prototype.valeurSiVrai = function () {
        return this.valeur;
    };

})(this);
