//set main namespace
goog.provide('chemistry');

//get requirements
goog.require('lime.Director');
goog.require('lime.Scene');
goog.require('app');

chemistry.start = function(){
    // var thisApp = new app(document.body, 1536, 2048);
    // screen.width
	// screen.height
	console.log(window.innerWidth);
	console.log(window.innerHeight);
    // var thisApp = new app(document.body, window.innerWidth, window.innerHeight);
    var thisApp = new app(document.body, 768, 1024);
}

//this is required for outside access after code is compiled in ADVANCED_COMPILATIONS mode
goog.exportSymbol('chemistry.start', chemistry.start);