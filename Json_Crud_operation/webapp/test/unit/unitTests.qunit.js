/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"JSON_Crud/Json_Crud_operation/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});