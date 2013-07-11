goog.provide('chemistry.Molecule');
goog.require('lime.Sprite');
goog.require('goog.math');

chemistry.Molecule = function(data) {
	lime.Sprite.call(this);

	this.data = data;
	this.setSize(data.size[0],data.size[1]); // TODO REMOVE ME!!!
	this.setFill(data.imageFile);
	// Rotate by n*90 degrees for more variations
	var rnd = goog.math.randomInt(4);
	this.setRotation(90*rnd);
	this.currentAction = null;
	this.isFalling	   = false;
	this.isDragging    = false;
	
	this.chainLength 		 = data.chainLength;
	this.numBranches 		 = data.numBranches;
	this.numFunctionalGroups = data.numFunctionalGroups;
	this.velocity 			 = 0.0;
	this.acceleration 		 = 0.0;

	this.calculateScore();
}
goog.inherits(chemistry.Molecule, lime.Sprite);

chemistry.Molecule.prototype.tick = function(dt) {
	// TODO: Smooth lane snapping?
	this.velocity += this.acceleration*dt;
	this.setPosition(this.getPosition().x, this.getPosition().y + this.velocity*dt);
}

chemistry.Molecule.prototype.calculateScore = function() {
	this.score = 10*this.chainLength;
}