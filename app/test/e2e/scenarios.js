'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('F1 Race App', function() {
    describe('Drivers view', function(){
                
    beforeEach(function() {
      browser.get('index.html');
    });   
    it('Total Drivers', function(){
           var drivers = element.all(by.repeater('driver in driversList'));
           var searchText = element(by.model('nameFilter'));
           
           expect(drivers.count()).toBe(23);
           
           searchText.sendKeys('alonso');
           expect(drivers.count()).toBe(1);
           
           searchText.clear();
           
           searchText.sendKeys('Massa');
           expect(drivers.count()).toBe(1);
           
           searchText.clear();
           
           searchText.sendKeys('nico');
           expect(drivers.count()).toBe(2);
           
       
        });
    }); 
    
    describe('Driver view', function() {

        beforeEach(function() {
          browser.get('index.html#/drivers/alonso');
        });
        
        it('should display placeholder page with phoneId', function() {
            expect(element(by.css('.driver-country')).getText()).toBe('Spanish');
      });
    
    });
  
});
