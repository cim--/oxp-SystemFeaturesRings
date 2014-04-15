this.name = "System Features: Rings";

this.systemWillPopulate = function() {
		// only a few ring systems per galaxy.
		// the largest planets have rings
		if (system.isInterstellarSpace || system.sun.hasGoneNova) {
				return;
		}
		if (system.info.radius < 6850) {
				return;
		}
	system.setPopulator("system-features-rings",
						{
							callback: this._addRing.bind(this),
							coordinates: system.mainPlanet.position,
							priority: 1000
						});
}

this._addRing = function() {		
		var ring = system.addVisualEffect("systemfeatures-rings",system.mainPlanet.position);
		ring.orientation = system.mainPlanet.orientation;
		ring.orientation = ring.orientation.rotate(ring.orientation.vectorRight(),Math.PI/2);

}