var expect = chai.expect;

describe('Fizzbuzz', function () {
    it('doit initialiser un tableau', function () {
        var fizzbuzz = new FizzBuzz();

        fizzbuzz.calculer();

        expect(fizzbuzz.resultat.length).to.equal(101);
    });

    it('doit remplacer les multiples de 3 par fizz', function () {
        var fizzbuzz = new FizzBuzz();

        fizzbuzz.calculer();

        expect(fizzbuzz.resultat[3]).to.equal('fizz');
        expect(fizzbuzz.resultat[6]).to.equal('fizz');
    });

    it('doit remplacer les multiples de 5 par buzz', function () {
        var fizzbuzz = new FizzBuzz();

        fizzbuzz.calculer();

        expect(fizzbuzz.resultat[5]).to.equal('buzz');
    });

    it('doit remplacer les multiples de 3 et 5 par fizzbuzz', function () {
        var fizzbuzz = new FizzBuzz();

        fizzbuzz.calculer();

        expect(fizzbuzz.resultat[15]).to.equal('fizzbuzz');
        expect(fizzbuzz.resultat[45]).to.equal('fizzbuzz');
    });
});
