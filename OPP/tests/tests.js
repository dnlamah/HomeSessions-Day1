(function(){
	
  'use strict';

  var chai = require('jasmine'); 

var Phone = require('../app/library.JS')

  describe("Create a Phone Class: With all its features and make the Phone work", function() {

    it("The phone should be a type of `object`, and an instance of the `Phone` class", function() {
      var tecno = new Phone('Tecno');
      expect(typeof tecno).toEqual(typeof {});
      expect(tecno instanceof Phone).toBeTruthy();
    });

    it("The phone should be called 'PhoneName' if no name is passed as a parameter", function() {
      var pm = new Phone();
      expect(pm.name).toEqual('PhoneName');
      expect(pm.model).toBe('PM');
    });

    it("The phone name and model should be a property of the phone", function() {
      var gionee  = new Phone('Gionee', 'M6');
      expect(gionee.name).toBe('Gionee');
      expect(gionee.model).toBe('M6');
    });
	
	it("The phone name and model should be a property of the phone", function() {
      var gionee  = new Phone('Nokia', '3310');
      expect(gionee.name).toBe('Nokia');
      expect(gionee.model).toBe('3310');
    });
	

    it("The phone should not be a double sim phone except its a Infinix or Tecno", function() {
      var iPhone  = new Phone('iPhone', '6', "iOS");
      expect(iPhone.doubleSim).not.toBe(true);

      var tecno = new Phone('Tecno', 'R7');
      expect(tecno.doubleSim).toBe(true);
      expect(tecno.isCharging).toBe(false)
      tecno.charge();
      expect(tecno.isCharging).toBeTruthy();
      expect((function(){return new Phone('Infinix', 'Hot S');}()).doubleSim).not.toBe(false);
    });
	
	it("Iphones should have a camera", function(){
	var iPhone = new Phone('iphone', '5c', "iOS");
	expect(iPhone.camera).toBe(true);
		
	})
	
	it("Nokia 3310 should not have a camera", function(){
	var nokia = new Phone('Nokia', '3310', "Proprietary OS");
	expect(nokia.camera).toBe(false);
		
	})

	it("Nokia 3310 should not have a camera", function(){
	var nokia = new Phone('Nokia', '3310', "Proprietary OS");
	expect(nokia.doubleSim).not.toBe(true);
		
	})
	
    it("The phone should be powered off by default until powered on", function() {
      var iPhone  = new Phone('iPhone', 'iPhone 5c', "iOS");
      expect(iPhone.isPowerOn).toBe(false);
      expect(iPhone.isAndroid).not.toBeTruthy();
      expect(iPhone.isIphone).toBeTruthy();
      iPhone.powerOn();
      expect(iPhone.isPowerOn).toBeTruthy();
      iPhone.powerOff();
      expect(iPhone.isPowerOn).not.toBeTruthy();
    });

    it("The Phone should charge when plugged in with the function 'charge'", function() {
      var lumia = new Phone("Nokia","Lumia 520");
      expect(lumia.isCharging).not.toBeTruthy();
      lumia.charge();
      expect(lumia.isCharging).toBe(true);
    });

  });
})();