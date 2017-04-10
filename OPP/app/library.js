'use strict'


	
function Phone(name,model,os) {			//Phone class defined here
	this.name = name || "PhoneName";		//assigned the parameter name to the variable this.name, in the case where a name isn't defined i made sure "PhoneName" was assigned to this.name variable
	this.model = model || "PM";        //assigned the parameter model to the variable this.model or assign "PM" to it if no argument is passed.
	this.os = os || "Microsoft/Symbian/Java";     //assigned  argument passed in place of the parameter os to this.os and assigned "Microsoft/Symbian/Java" if no argument is passed.

	if (this.name  === 'Infinix' || this.name === "Tecno") { 	//i want to make sure Tecno and Infinix phones are treated differently, because they have some properties that are peculiar
	  	this.CPU = "MTK Processor";		            //Tecno or infinix CPU are usually MTK (MediaTek processors)
	  	this.isAndroid = true;			  // a class variable used to store a boolean to describe if a phone is an android phone or not.
	  	this.doubleSim = true;			//a class variable to store a boolean to know if the phone uses double sim
		this.camera = true;          // a class variable to store a boolean to know if the phone uses a camera
	  	this.isIphone = false;			// a class variable used to store a boolean to describe if a phone is an iphone or not.
	  	this.isWindows = false;                // a class variable used to store a boolean to describe if a phone is a windows phone or not.
		this.isCharging = false;		// a class variable used to store a boolean to know if the phone is charging or not, a phone is usually not charging by default.
	 	this.charge = function() {		// this is a function call to charge the phone
			this.isCharging = true;		// we change the .isCharging variable to indicate that the phone is charging
		}
		this.stopCharge = function() {	//this is a function call to stop charging the phone
			this.isCharging = false;	// we change the .isCharging variable to indicate that the phone has stopped charging
		}
		this.isPowerOn = false;			//a variable used to store a boolean that indicates if the phone is powered on.
		this.powerOn = function() {		//this is a function to power on the phone, it changes the boolean value of this.isPowerOn to show that the phone is on.
			this.isPowerOn = true;		//boolean value of this.isPowerOn is set to true to indicate that the phone is powered on.
		}
		this.powerOff = function() {	//this is a function to power off the phone, it changes the boolean value of this.isPowerOff to show that the phone is off.
			this.isPowerOn = false;		//boolean value of this.isPowerOn is set to false to indicate that the phone is powered off.
		}
		
	}
	
	else {			//if the name of the phone isn't Tecno or Infinix, it should implement the following lines of code
		
		if (this.os === "Android") {    //if the os of the phone is  Android, it should implement the following lines of code
			this.CPU = "SnapDragon Processor";		// assign the string "SnapDragon Processor" to the variable this.CPU
		  	this.isAndroid = true;			// a class variable used to store a boolean to describe if a phone is an android phone or not.
		  	this.doubleSim = false;			//a class variable to store a boolean to know if the phone uses double sim
		  	this.camera = true;               // a class variable to store a boolean to know if the phone uses a camera   
			this.isWindows = false;             // a class variable used to store a boolean to describe if a phone is a windows phone or not.
			this.isIphone = false;			// a class variable used to store a boolean to describe if a phone is an iphone or not.
		  	this.isCharging = false;		// a class variable used to store a boolean to know if the phone is charging or not, a phone is usually not charging by default.
		 	this.charge = function() {		// this is a function call to charge the phone
				this.isCharging = true;		// we change the .isCharging variable to indicate that the phone is charging
			}
			this.stopCharge = function() {	//this is a function call to stop charging the phone
				this.isCharging = false;	// we change the .isCharging variable to indicate that the phone has stopped charging
			}
			this.isPowerOn = false;			//a variable used to store a boolean that indicates if the phone is powered on.
			this.powerOn = function() {		//this is a function to power on the phone, it changes the boolean value of this.isPowerOn to show that the phone is on.
				this.isPowerOn = true;		//boolean value of this.isPowerOn is set to true to indicate that the phone is powered on.
			}
			this.powerOff = function() {	//this is a function to power off the phone, it changes the boolean value of this.isPowerOff to show that the phone is off.
				this.isPowerOn = false;		//boolean value of this.isPowerOn is set to true to indicate that the phone is powered off.
			}
			
		
		}
		else if (this.os === "iOS") {   //if the os of the phone is iOS, it should implement the following lines of code
			this.CPU = "Apple Chipset";		// assign the string "Apple Chipset" to the variable this.CPU
		  	this.isAndroid = false;			// a class variable used to store a boolean to describe if a phone is an android phone or not.
		  	this.isIphone = true;			// a class variable used to store a boolean to describe if a phone is an iphone or not.
		  	this.isWindows = false;          // a class variable used to store a boolean to describe if a phone is a windows phone or not.
			this.doubleSim = false;			//a class variable to store a boolean to know if the phone uses double sim
		  	this.camera = true;     // a class variable to store a boolean to know if the phone uses a camera
			this.isCharging = false;		// a class variable used to store a boolean to know if the phone is charging or not, a phone is usually not charging by default.
		 	this.charge = function() {		// this is a function call to charge the phone
				this.isCharging = true;		// we change the .isCharging variable to indicate that the phone is charging
			}
			this.stopCharge = function() {	//this is a function call to stop charging the phone
				this.isCharging = false;	// we change the .isCharging variable to indicate that the phone has stopped charging
			}
			this.isPowerOn = false;			//a variable used to store a boolean that indicates if the phone is powered on.
			this.powerOn = function() {		//this is a function to power on the phone, it changes the boolean value of this.isPowerOn to show that the phone is on.
				this.isPowerOn = true;		//boolean value of this.isPowerOn is set to true to indicate that the phone is powered on.
			}
			this.powerOff = function() {	//this is a function to power off the phone, it changes the boolean value of this.isPowerOff to show that the phone is off.
				this.isPowerOn = false;		//boolean value of this.isPowerOn is set to true to indicate that the phone is powered off.
			}
			
		
		}
		else if (this.os === 'Window Phone 7' || this.os === "Window Phone 8" || this.os === "Window 10 mobile"){		//if the os of the phone is a Windows Phone, it should implement the following lines of code
			this.CPU = "Microsoft Processor";		// assign the string "Microsoft Processor" to the variable this.CPU
			this.isAndroid = false;			// a class variable used to store a boolean to describe if a phone is an android phone or not.
		  	this.isIphone = false;			// a class variable used to store a boolean to describe if a phone is an iphone or not.
		  	this.doubleSim = true;			//a class variable to store a boolean to know if the phone uses double sim
		  	this.isWindows = true;           // a class variable used to store a boolean to describe if a phone is a windows phone or not.
			this.camera = true;            // a class variable to store a boolean to know if the phone uses a camera
			this.isCharging = false;		// a class variable used to store a boolean to know if the phone is charging or not, a phone is usually not charging by default.
		 	this.charge = function() {		// this is a function call to charge the phone
				this.isCharging = true;		// we change the .isCharging variable to indicate that the phone is charging
			}
			this.stopCharge = function() {	//this is a function call to stop charging the phone
				this.isCharging = false;	// we change the .isCharging variable to indicate that the phone has stopped charging
			}
			this.isPowerOn = false;			//a variable used to store a boolean that indicates if the phone is powered on.
			this.powerOn = function() {		//this is a function to power on the phone, it changes the boolean value of this.isPowerOn to show that the phone is on.
				this.isPowerOn = true;		//boolean value of this.isPowerOn is set to true to indicate that the phone is powered on.
			}
			this.powerOff = function() {	//this is a function to power off the phone, it changes the boolean value of this.isPowerOff to show that the phone is off.
				this.isPowerOn = false;		//boolean value of this.isPowerOn is set to true to indicate that the phone is powered off.
			}
			
		}
		
		else if(this.os === 'Proprietary OS'){ // if os of the phone is Proprietary OS, it should implement the following lines of the code
			
			this.CPU = "Java Single Core";    // assign the string "Java Single Core" to the variable this.CPU
			this.isAndroid = false;			// a class variable used to store a boolean to describe if a phone is an android phone or not.
		  	this.isIphone = false;			// a class variable used to store a boolean to describe if a phone is an iphone or not.
		  	this.doubleSim = false;			//a class variable to store a boolean to know if the phone uses double sim
		  	this.isWindows = false;          // a class variable used to store a boolean to describe if a phone is a windows phone or not.
			this.camera = false;                 // a class variable to store a boolean to know if the phone uses a camera
			this.isCharging = false;		// a class variable used to store a boolean to know if the phone is charging or not, a phone is usually not charging by default.
		 	this.charge = function() {		// this is a function call to charge the phone
				this.isCharging = true;		// we change the .isCharging variable to indicate that the phone is charging
			}
			this.stopCharge = function() {	//this is a function call to stop charging the phone
				this.isCharging = false;	// we change the .isCharging variable to indicate that the phone has stopped charging
			}
			this.isPowerOn = false;			//a variable used to store a boolean that indicates if the phone is powered on.
			this.powerOn = function() {		//this is a function to power on the phone, it changes the boolean value of this.isPowerOn to show that the phone is on.
				this.isPowerOn = true;		//boolean value of this.isPowerOn is set to true to indicate that the phone is powered on.
			}
			this.powerOff = function() {	//this is a function to power off the phone, it changes the boolean value of this.isPowerOff to show that the phone is off.
				this.isPowerOn = false;		//boolean value of this.isPowerOn is set to true to indicate that the phone is powered off.
			}
			
		}
		
		else{
			
			this.CPU = "369 MHz ARM 11";
			this.isAndroid = false;			// a class variable used to store a boolean to describe if a phone is an android phone or not.
		  	this.isIphone = false;			// a class variable used to store a boolean to describe if a phone is an iphone or not.
		  	this.doubleSim = false;			//a class variable to store a boolean to know if the phone uses double sim
		  	this.isWindows = false;               // a class variable used to store a boolean to describe if a phone is a windows phone or not.
			this.camera = false;               // a class variable to store a boolean to know if the phone uses a camera
			this.isCharging = false;		// a class variable used to store a boolean to know if the phone is charging or not, a phone is usually not charging by default.
		 	this.charge = function() {		// this is a function call to charge the phone
				this.isCharging = true;		// we change the .isCharging variable to indicate that the phone is charging
			}
			this.stopCharge = function() {	//this is a function call to stop charging the phone
				this.isCharging = false;	// we change the .isCharging variable to indicate that the phone has stopped charging
			}
			this.isPowerOn = false;			//a variable used to store a boolean that indicates if the phone is powered on.
			this.powerOn = function() {		//this is a function to power on the phone, it changes the boolean value of this.isPowerOn to show that the phone is on.
				this.isPowerOn = true;		//boolean value of this.isPowerOn is set to true to indicate that the phone is powered on.
			}
			this.powerOff = function() {	//this is a function to power off the phone, it changes the boolean value of this.isPowerOff to show that the phone is off.
				this.isPowerOn = false;		//boolean value of this.isPowerOn is set to true to indicate that the phone is powered off.
			}
			
			
		}
	}
}

module.exports = Phone;  // make the function available for jasmine test 

