sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/Fragment",
	"sap/m/MessageToast",
	"sap/ui/model/Filter",
	"sap/m/MessageBox",
	"sap/ui/model/FilterOperator"
], function (Controller, JSONModel, Fragment, MessageToast, Filter, MessageBox, FilterOperator) {
	"use strict";

	return Controller.extend("JSON_Crud.Json_Crud_operation.controller.View1", {
		onInit: function () {
			var nModel = new sap.ui.model.json.JSONModel();
			nModel.setData(this.getOwnerComponent().getModel("EmpDet").getData());
			sap.ui.getCore().setModel(nModel, 'nModel');
		},

		onNavigate: function (oEvent) {
			var oItem, oCtx;
			oItem = oEvent.getSource();
			oCtx = oItem.getBindingContext("EmpDet");
			var oIndexData = oCtx.getProperty();
			var EmpDetail = new sap.ui.model.json.JSONModel();
			EmpDetail.setData(oIndexData);
			sap.ui.getCore().setModel(EmpDetail, 'EmpDetail');
			this.getOwnerComponent().getRouter().navTo("Detail");

		},

		onClick: function () {
			var oView = this.getView();
			this.getOwnerComponent().getModel("EmpDet").setProperty("/newData", {
				"Id": "",
				"Name": "",
				"City": "",
				"Gender": "",
				"DOB": "",
				"JobRole": "",
				"PSkills": "",
				"SSkills": "",
				"OfficeLoc": "",
				"Project": "",
				"UsedSkills": "",
				"ProjectLead": "",
				"Mob": "",
				"AltMob": "",
				"Email": "",
				"Address": ""
			});

			if (!this.dialog) {
				this.dialog = sap.ui.xmlfragment("JSON_Crud.Json_Crud_operation.fragment.AddEmployee", this);
			}

			this.dialog.setModel(this.getOwnerComponent().getModel("EmpDet").getProperty('/newData'));
			var nModel = new sap.ui.model.json.JSONModel();
			nModel.setData(this.getOwnerComponent().getModel("EmpDet").getData());
			sap.ui.getCore().setModel(nModel, 'nModel');
			
			var oModel = this.getOwnerComponent().getModel("EmpDet");
			var newData = oModel.getProperty("/newData");
			var len = oModel.getProperty("/Employee").length;

			newData.Id = 212000 + len + 1;
			oView.addDependent(this.dialog);
			this.dialog.open();
		},
		saveInp1: function(){
			var oValue =  sap.ui.getCore().byId("inp1");
			var error = sap.ui.core.ValueState.Error;
			var success = sap.ui.core.ValueState.Success;
			if(oValue.getValue() === ""){
				oValue.setValueState(error);
			}
			else{
				oValue.setValueState(success);
			}
		},
		saveInp2: function(){
			var oValue =  sap.ui.getCore().byId("inp2");
			var error = sap.ui.core.ValueState.Error;
			var success = sap.ui.core.ValueState.Success;
			if(oValue.getValue() === ""){
				oValue.setValueState(error);
			}
			else{
				oValue.setValueState(success);
			}
		},
		saveInp3: function(){
			var oValue =  sap.ui.getCore().byId("inp3");
			var error = sap.ui.core.ValueState.Error;
			var success = sap.ui.core.ValueState.Success;
			if(oValue.getValue() === ""){
				oValue.setValueState(error);
			}
			else{
				oValue.setValueState(success);
			}
		},
		saveInp4: function(){
			var oValue =  sap.ui.getCore().byId("inp4");
			var error = sap.ui.core.ValueState.Error;
			var success = sap.ui.core.ValueState.Success;
			if(oValue.getValue() === ""){
				oValue.setValueState(error);
			}
			else{
				oValue.setValueState(success);
			}
		},
		saveInp5: function(){
			var oValue =  sap.ui.getCore().byId("inp5");
			var error = sap.ui.core.ValueState.Error;
			var success = sap.ui.core.ValueState.Success;
			if(oValue.getValue() === ""){
				oValue.setValueState(error);
			}
			else{
				oValue.setValueState(success);
			}
		},
		saveInp6: function(){
			var oValue =  sap.ui.getCore().byId("inp6");
			var error = sap.ui.core.ValueState.Error;
			var success = sap.ui.core.ValueState.Success;
			if(oValue.getValue() === ""){
				oValue.setValueState(error);
			}
			else{
				oValue.setValueState(success);
			}
		},
		saveInp7: function(){
			var oValue =  sap.ui.getCore().byId("inp7");
			var error = sap.ui.core.ValueState.Error;
			var success = sap.ui.core.ValueState.Success;
			if(oValue.getValue() === ""){
				oValue.setValueState(error);
			}
			else{
				oValue.setValueState(success);
			}
		},
		saveInp8: function(){
			var oValue =  sap.ui.getCore().byId("inp8");
			var error = sap.ui.core.ValueState.Error;
			var success = sap.ui.core.ValueState.Success;
			if(oValue.getValue() === ""){
				oValue.setValueState(error);
			}
			else{
				oValue.setValueState(success);
			}
		},
		saveInp9: function(){
			var oValue =  sap.ui.getCore().byId("inp9");
			var error = sap.ui.core.ValueState.Error;
			var success = sap.ui.core.ValueState.Success;
			if(oValue.getValue() === ""){
				oValue.setValueState(error);
			}
			else{
				oValue.setValueState(success);
			}
		},
		saveInp10: function(){
			var oValue =  sap.ui.getCore().byId("inp10");
			var error = sap.ui.core.ValueState.Error;
			var success = sap.ui.core.ValueState.Success;
			if(oValue.getValue() === ""){
				oValue.setValueState(error);
			}
			else{
				oValue.setValueState(success);
			}
		},
		saveInp11: function(){
			var oValue =  sap.ui.getCore().byId("inp11");
			var error = sap.ui.core.ValueState.Error;
			var success = sap.ui.core.ValueState.Success;
			if(oValue.getValue() === ""){
				oValue.setValueState(error);
			}
			else{
				oValue.setValueState(success);
			}
		},
		saveInp12: function(){
			var oValue =  sap.ui.getCore().byId("inp14");
			var error = sap.ui.core.ValueState.Error;
			var success = sap.ui.core.ValueState.Success;
			if(oValue.getValue() === ""){
				oValue.setValueState(error);
			}
			else{
				oValue.setValueState(success);
			}
		},
		saveInp13: function(){
			var oValue =  sap.ui.getCore().byId("inp15");
			var error = sap.ui.core.ValueState.Error;
			var success = sap.ui.core.ValueState.Success;
			if(oValue.getValue() === ""){
				oValue.setValueState(error);
			}
			else{
				oValue.setValueState(success);
			}
		},
		saveInp14: function(){
			var oValue =  sap.ui.getCore().byId("inp16");
			var error = sap.ui.core.ValueState.Error;
			var success = sap.ui.core.ValueState.Success;
			if(oValue.getValue() === ""){
				oValue.setValueState(error);
			}
			else{
				oValue.setValueState(success);
			}
		},
		saveInp15: function(){
			var oValue =  sap.ui.getCore().byId("inp17");
			var error = sap.ui.core.ValueState.Error;
			var success = sap.ui.core.ValueState.Success;
			if(oValue.getValue() === ""){
				oValue.setValueState(error);
			}
			else{
				oValue.setValueState(success);
			}
		},
		onEdit: function() {
			if(!this.dialog){
				this.dialog = sap.ui.xmlfragment("JSON_Crud.Json_Crud_operation.fragment.AddEmployee", this);
			}
			this.dialog.open();
		},
		onAdd: function () {
			var oModel = this.getOwnerComponent().getModel("EmpDet");
			var newData = oModel.getProperty("/newData");
			var len = oModel.getProperty("/Employee").length;
			var oCore =  sap.ui.getCore();
			newData.Id = 212000 + len + 1;
			if(oCore.byId("inp1").getValue() === "" || oCore.byId("inp2").getValue() === "" || 
			oCore.byId("inp3").getValue() === "" || oCore.byId("inp4").getValue() === "" || oCore.byId("inp5").getValue() === "" || 
			oCore.byId("inp6").getValue() === "" || oCore.byId("inp7").getValue() === "" || oCore.byId("inp8").getValue() === "" || oCore.byId("inp9").getValue() === "" || 
			oCore.byId("inp10").getValue() === "" || oCore.byId("inp11").getValue() === "" || oCore.byId("inp14").getValue() === "" || oCore.byId("inp15").getValue() === "" 
			|| oCore.byId("inp16").getValue() === "" ||oCore.byId("inp17").getValue() === ""){
				MessageBox.alert("Please Fill All Details");
				// console.log("Error");
				return;
			}
			oModel.getProperty("/Employee").push(newData);
			oModel.refresh();

			this.dialog.close();
		},
		
		onCancel: function () {
			this.dialog.close();
		},
		onLiveChange: function (event) {
			var aFilter = [];
			var sQuery = event.getSource().getValue();
			if(sQuery){
				aFilter.push(new Filter("Name", FilterOperator.Contains, sQuery));
			}
			var oTab = this.byId("employeeList");
			var oBinding = oTab.getBinding("items");
			oBinding.filter(aFilter);
		}
	});
});