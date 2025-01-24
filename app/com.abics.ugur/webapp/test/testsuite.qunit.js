sap.ui.define(function () {
	"use strict";

	return {
		name: "QUnit test suite for the UI5 Application: com.abics.ugur",
		defaults: {
			page: "ui5://test-resources/com/abics/ugur/Test.qunit.html?testsuite={suite}&test={name}",
			qunit: {
				version: 2
			},
			sinon: {
				version: 1
			},
			ui5: {
				language: "EN",
				theme: "sap_horizon"
			},
			coverage: {
				only: "com/abics/ugur/",
				never: "test-resources/com/abics/ugur/"
			},
			loader: {
				paths: {
					"com/abics/ugur": "../"
				}
			}
		},
		tests: {
			"unit/unitTests": {
				title: "Unit tests for com.abics.ugur"
			},
			"integration/opaTests": {
				title: "Integration tests for com.abics.ugur"
			}
		}
	};
});
