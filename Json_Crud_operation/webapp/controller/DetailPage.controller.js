sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/Fragment"
	
], function (Controller, JSONModel, Fragment) {
	"use strict";

	return Controller.extend("JSON_Crud.Json_Crud_operation.controller.DetailPage", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf JSON_Crud.Json_Crud_operation.view.DetailPage
		 */
		onInit: function () {
		
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("Detail").attachMatched(this._onRouteMatched, this);
			
			
		},
		_onRouteMatched: function(oEvent){
			var newModel = new sap.ui.model.json.JSONModel();
			newModel.setData(sap.ui.getCore().getModel("EmpDetail").getData());
			sap.ui.getCore().setModel(newModel,'newModel');
			this.getOwnerComponent().setModel(newModel,'newModel');
			
		},
		_onBindingChange: function(oEvent){
			if(!this.getView().getBindingContext()){
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.getTarget();
			}
		},
		
		
		
		onNavBack: function() {
			var oNavBack = sap.ui.core.UIComponent.getRouterFor(this);
			oNavBack.navTo("View1");
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf JSON_Crud.Json_Crud_operation.view.DetailPage
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf JSON_Crud.Json_Crud_operation.view.DetailPage
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf JSON_Crud.Json_Crud_operation.view.DetailPage
		 */
		//	onExit: function() {
		//
		//	}

	});

});