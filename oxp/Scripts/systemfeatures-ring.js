this.name = "System Features Ring effect script";

this.$fcb;

this.effectSpawned = function() {
		this.$fcb = addFrameCallback(this._updatePosition.bind(this));
		// assuming these two are constants
		this.visualEffect.shaderVector1 = system.sun.position;
		this.visualEffect.shaderFloat1 = system.mainPlanet.radius * system.mainPlanet.radius;
		this.visualEffect.shaderFloat2 = system.mainPlanet.radius*7;
		this.visualEffect.shaderVector2 = player.ship.position;
		this.visualEffect.scale(this.visualEffect.shaderFloat2);

}

this.effectRemoved = function() {
		removeFrameCallback(this.$fcb);
}

this._updatePosition = function() {
		if (player.ship.position) {
				this.visualEffect.shaderVector2 = player.ship.position;
				// move very slightly towards player to deal with depth-buffer issues
				this.visualEffect.position = system.mainPlanet.position.subtract(system.mainPlanet.position.subtract(player.ship.position).direction());
		} else {
				removeFrameCallback(this.$fcb);
		}
}