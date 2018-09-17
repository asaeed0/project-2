const expect = require('chai').expect;
const tools = require('../../lib/tools');

describe('Tools', function() {
    context('Back-end Tools', function() {

        describe('functionName()', function() {
            it('what it does...');
        });

        describe('printName()', function() {
            it('should print the last name first', function() {
                let results = tools.printName({firstName: 'John', lastName: 'Smith'});
                expect(results).to.equal('Smith, John');
            });
        });

        describe('isVacant()', function() {
            it(`checks to see if the argument provided is 'vacant'`, function() {
                let result1 = tools.isVacant('VaCanT');
                expect(result1).to.equal(true);

                let result2 = tools.isVacant('boy');
                expect(result2).to.equal(false);

                let result3 = tools.isVacant('');
                expect(result3).to.equal(false);

                let result4 = tools.isVacant(false);
                expect(result4).to.equal(false);
                
                let result5 = tools.isVacant(0);
                expect(result5).to.equal(false);
            });
        });

        describe('incrementTill(arg, max)', function() {

            it('increments the arg until it reaches the max value', function() {
                let result1 = tools.incrementTill(3, 5);
                expect(result1).to.equal(4);

                let result2 = tools.incrementTill(16, 5);
                expect(result2).to.equal(5);
            });

            it('returns the max value if the arg is greater than it', function() {

                let result3 = tools.incrementTill(5, 5);
                expect(result3).to.equal(5);
                
            });
        })

        describe('decrementTill(arg, min=0)', function() {

            it('decrements the arg until it reaches the min value (default min = 0)', function() {
                let result1 = tools.decrementTill(4);
                expect(result1).to.equal(3);

                let result2 = tools.decrementTill(4, 4);
                expect(result2).to.equal(4);
                
                let result3 = tools.decrementTill(-1, -4);
                expect(result3).to.equal(-2);
            });

            it('returns the min value if arg is less than min', function() {

                let result4 = tools.decrementTill(-1);
                expect(result4).to.equal(0);

                let result5 = tools.decrementTill(4, 6);
                expect(result5).to.equal(6);

            });
        });


    });

    context('Alerts', function() {
        describe('each function takes the reservation object returned from the model', function() {
            
            describe('overdue(reservations)', function() {
                it('should return an object of overdue reservations');
                it('should return null if no overdue reservations');
            });

            describe('checkInToday(reservations)', function() {
                it('should return an object of reservations checking-in today');
                it('should return null if no check-ins today');
            });

            describe('checkOutToday(reservations)', function() {
                it('should return an object of reservations checking-out today');
                it('should return null if no check-outs today');
            });

            describe('checkInWeek(reservations)', function() {
                it('should return an object of reservations checking-in this week');
                it('should return null if no check-ins this week');
            });

            describe('checkOutWeek(reservations)', function() {
                it('should return an object of reservations checking-out this week');
                it('should return null if no check-outs this week');
            });

        });

        context('Booking', function() {

            describe('printCal()', function() {
                it('should print the calander')
            });
        });



    });        
});
