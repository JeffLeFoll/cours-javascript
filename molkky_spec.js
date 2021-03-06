var expect = chai.expect;

describe('Mölkky', function () {
    var jeuDeMolkky;

    beforeEach(function () {
        this.jeuDeMolkky = new Molkky();
    })

    it('doit marquer la valeur de la quille qui est tombée', function () {

        this.jeuDeMolkky.metsAJourLeScorePourLeLancer(7);

        expect(this.jeuDeMolkky.score).to.equal(7);
    });

    it('doit marquer le nombre de quilles tombées ', function () {

        this.jeuDeMolkky.metsAJourLeScorePourLeLancer(4, 6, 11);

        expect(this.jeuDeMolkky.score).to.equal(3);
    });

    it('doit calculer le score des lancés', function () {

        this.jeuDeMolkky.metsAJourLeScorePourLeLancer(7);
        this.jeuDeMolkky.metsAJourLeScorePourLeLancer(4);

        expect(this.jeuDeMolkky.score).to.equal(11);
    });

    it('doit gagner la partie si le joueur atteind 50 points', function () {
        marque50points(this.jeuDeMolkky);

        expect(this.jeuDeMolkky.gagne()).to.be.true;
    });

    it('ne doit pas gagner la partie si le joueur à moins de 50 points', function () {

        this.jeuDeMolkky.metsAJourLeScorePourLeLancer(7);

        expect(this.jeuDeMolkky.gagne()).to.be.false;
    });

    it('doit retomber à 25 points s\'il dépasse les 50 points', function () {
        marque51points(this.jeuDeMolkky);

        expect(this.jeuDeMolkky.score).to.equal(25);
        expect(this.jeuDeMolkky.gagne()).to.be.false;
    });
});

function marque50points(jeu) {
    marque40points(jeu);
    jeu.metsAJourLeScorePourLeLancer(10);
};

function marque40points(jeu) {
    for (var i = 0; i < 4; i++) {
        jeu.metsAJourLeScorePourLeLancer(10);
    }
};

function marque51points(jeu) {
    marque40points(jeu);
    jeu.metsAJourLeScorePourLeLancer(11);
};
