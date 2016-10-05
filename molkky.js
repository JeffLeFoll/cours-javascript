
(function (exports) {
    'use strict';
    function Molkky() {
        this.pointage = 0;
    };

    exports.Molkky = Molkky;

    Molkky.prototype.metsAJourLePointagePourLeLancer = function (...quilles) {
        if (this.uneSeuleQuilleEstTombee(quilles)) {
            this.pointage += quilles[0];
        } else {
            this.pointage += this.nombreDeQuilles(quilles);
        }

        this.lePointageRedescendA25SIlDepasse50();
    };

    Molkky.prototype.uneSeuleQuilleEstTombee = function (quilles) {
        return this.nombreDeQuilles(quilles) === 1;
    };

    Molkky.prototype.nombreDeQuilles = function (quilles) {
        return quilles.length;
    };

    Molkky.prototype.gagne = function () {
        return this.pointage === 50;
    };

    Molkky.prototype.lePointageRedescendA25SIlDepasse50 = function () {
        if (this.pointage > 50) {
            this.pointage = 25;
        }
    };


})(this);
