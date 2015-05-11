describe('F1 Race App', function() {    
    describe('driversController', function() {  
        
                
        beforeEach(module('F1FeederApp'));

        beforeEach(inject(function($controller) {
          scope = {};
          ctrl = $controller('driversController', {$scope:scope});
        }));

        it('should create "drivers" model with 23 drivers', function() {
          expect(scope.driversList.length).toBe(0);
        });
    });
});
