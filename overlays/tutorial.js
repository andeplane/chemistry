goog.provide('chemistry.overlays.Tutorial');

goog.require('lime.Layer');
goog.require('lime.Sprite');
goog.require('lime.animation.MoveTo');
goog.require('lime.animation.FadeTo');

chemistry.overlays.Tutorial = function(width, height, difficulty) {
    lime.Layer.call(this);
    this.setSize(width, height);
    this.setAnchorPoint(0,0);

    var imageFile = "";
    switch(difficulty) {
    case 0:
        imageFile = "images/design/tutorials/tutorial-easy.png";
        break;
    case 1:
        imageFile = "images/design/tutorials/tutorial-medium.png";
        break;
    case 2:
        imageFile = "images/design/tutorials/tutorial-hard.png";
        break;
    }

    var tutorialScreenBackground = new lime.Sprite().setFill("#000").setOpacity(0.6).setSize(width, height).setAnchorPoint(0,0);
    var imageRatio = 1.5;
    this.tutorialSprite = new lime.Sprite().setFill(imageFile).setSize(height / imageRatio, height).setAnchorPoint(0.5,0.5);
    this.appendChild(tutorialScreenBackground);
    this.appendChild(this.tutorialSprite);
}
goog.inherits(chemistry.overlays.Tutorial, lime.Layer);

chemistry.overlays.Tutorial.prototype.reveal = function() {
    this.tutorialSprite.setPosition(-this.getSize().width + -this.getSize().width / 2, this.getSize().height / 2);
    var animation = new lime.animation.MoveTo(this.getSize().width / 2, this.getSize().height / 2).setDuration(0.5).setEasing(lime.animation.Easing.EASEINOUT);
    this.tutorialSprite.runAction(animation);
}

chemistry.overlays.Tutorial.prototype.conceal = function(callback, nothing, self) {
    var animation = new lime.animation.FadeTo(0).setDuration(0.2);
    goog.events.listen(animation, lime.animation.Event.STOP, callback, nothing, self);
    this.runAction(animation);
}
