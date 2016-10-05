
(function (exports) {
    'use strict';
    function Molkky() {
        this.score = 0;
    };

    exports.Molkky = Molkky;

    Molkky.prototype.metsAJourLeScorePourLeLancer = function (...quilles) {
        if (this.uneSeuleQuilleEstTombee(quilles)) {
            this.score += quilles[0];
        } else {
            this.score += this.nombreDeQuilles(quilles);
        }

        this.leScoreRedescendA25SIlDepasse50();
    };

    Molkky.prototype.uneSeuleQuilleEstTombee = function (quilles) {
        return this.nombreDeQuilles(quilles) === 1;
    };

    Molkky.prototype.nombreDeQuilles = function (quilles) {
        return quilles.length;
    };

    Molkky.prototype.gagne = function () {
        return this.score === 50;
    };

    Molkky.prototype.leScoreRedescendA25SIlDepasse50 = function () {
        if (this.score > 50) {
            this.score = 25;
        }
    };


})(this);
