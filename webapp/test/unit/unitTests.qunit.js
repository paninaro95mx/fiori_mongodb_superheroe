/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/assembler/mongobd/cap/mongodbui5/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});