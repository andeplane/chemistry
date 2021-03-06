goog.provide('chemistry.NextMolecule');

goog.require('lime.Node');
goog.require('lime.Sprite');
goog.require('lime.animation.ScaleTo');

chemistry.NextMolecule = function(width, height) {
	lime.Node.call(this);
	this.setSize(width, height);

	this.addTimeLeftBar(width, height);
	this.addMoleculeSprite(width, height);
}
goog.inherits(chemistry.NextMolecule, lime.Node);

chemistry.NextMolecule.prototype.addTimeLeftBar = function(width, height) {
    this.timeLeftBar = new lime.Sprite().setFill("#c8d5fc");
    this.timeLeftBar.setAnchorPoint(1,1);
	this.timeLeftBar.setSize(10, height);
	this.timeLeftBar.setPosition(0,height);
	this.timeLeftBar.currentAnimation = null;
	this.appendChild(this.timeLeftBar);
}

chemistry.NextMolecule.prototype.addMoleculeSprite = function(width, height) {
	this.moleculeSprite = new lime.Sprite();
    this.moleculeSprite.setFill("#ffffff00");
    this.moleculeSprite.setSize(width * 0.8, height * 0.8);
	this.moleculeSprite.setPosition(-width/2.0,height/2.0);
	this.appendChild(this.moleculeSprite);
}

chemistry.NextMolecule.prototype.newMolecule = function(molecule, timeToNext) {
	this.moleculeSprite.setHidden(false);
	this.timeLeftBar.setHidden(false);
	if(this.timeLeftBar.currentAnimation) this.timeLeftBar.currentAnimation.stop();
	if(this.moleculeSprite.currentAnimation) this.moleculeSprite.currentAnimation.stop();

	this.timeLeftBar.setScale(1,1);
	var scaleAction = new lime.animation.ScaleTo(1,0).setDuration(timeToNext/1000.0).setEasing(lime.animation.Easing.EASEIN); // setDuration takes seconds as unit of time
	this.timeLeftBar.currentAnimation = scaleAction;
	this.timeLeftBar.runAction(scaleAction);

	this.moleculeSprite.setFill(molecule.data.imageFile);
	var sizeX = molecule.data.size[0];
	var sizeY = molecule.data.size[1];
	this.moleculeSprite.setSize(sizeX,sizeY);
	this.moleculeSprite.setRotation(molecule.getRotation());

    this.moleculeSprite.setOpacity(0);
    var fadeMoleculeAction = new lime.animation.FadeTo(1).setDuration(timeToNext / (4*1000.0)); //.enableOptimizations();
    this.moleculeSprite.runAction(fadeMoleculeAction);
    this.moleculeSprite.currentAnimation = fadeMoleculeAction;

	var size = this.moleculeSprite.getSize();
	var maxSize = Math.max(size.width, size.height);
	var scale = this.getSize().width / maxSize * 0.8;
	this.moleculeSprite.setScale(scale,scale);
}

chemistry.NextMolecule.prototype.tick = function(dt) {
	// TODO: Add things
}

chemistry.NextMolecule.prototype.gameOver = function() {
	this.moleculeSprite.setHidden(true);
	this.timeLeftBar.setHidden(true);
}
