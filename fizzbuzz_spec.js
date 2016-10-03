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
});
