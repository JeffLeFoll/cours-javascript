var expect = chai.expect;

describe('Fizzbuzz', function () {
    var resultat;

    beforeEach(function () {
        var fizzbuzz = new FizzBuzz();
        fizzbuzz.calculer();

        this.resultat = fizzbuzz.resultat;
    })

    it('doit initialiser un tableau', function () {

        expect(this.resultat.length).to.equal(101);
    });

    it('doit remplacer les multiples de 3 par fizz', function () {

        expect(this.resultat[3]).to.equal('fizz');
        expect(this.resultat[6]).to.equal('fizz');
    });

    it('doit remplacer les multiples de 5 par buzz', function () {

        expect(this.resultat[5]).to.equal('buzz');
    });

    it('doit remplacer les multiples de 3 et 5 par fizzbuzz', function () {

        expect(this.resultat[15]).to.equal('fizzbuzz');
        expect(this.resultat[45]).to.equal('fizzbuzz');
    });
});
