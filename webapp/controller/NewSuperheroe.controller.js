sap.ui.define([
    "./BaseController",
    "sap/ui/model/json/JSONModel",
    "../model/formatter",
    "sap/m/library",
    "sap/m/MessageToast"
], function (BaseController, JSONModel, formatter, mobileLibrary, MessageToast) {
    "use strict";

    return BaseController.extend("com.assembler.mongobd.cap.mongodbui5.controller.NewSuperheroe", {

        formatter: formatter,

        /* =========================================================== */
        /* lifecycle methods                                           */
        /* =========================================================== */

        onInit: function () {
            this._initLocalModel();
        },

        _initLocalModel: function(){
            var oViewModel = new JSONModel({
                nombreSuperheroe : "",
                nombre : "",
                franquicia : "",
                telefono : "",
                edad : "",
                fuerza : "",
                destreza : "",
                intelecto : ""
            });

            this.getView().setModel(oViewModel, "newSuperheroe");
        },

        /* =========================================================== */
        /* begin: internal methods                                     */
        /* =========================================================== */
        /**
         * Set the full screen mode to false and navigate to list page
         */
        onCloseDetailPress: function (oEvent) {
            this.getModel("appView").setProperty("/actionButtonsInfo/midColumn/fullScreen", false);
            this.getRouter().navTo("list");
        },

        onSaveNewSuperheroe: function (oEvent) {
            var that = this;
            var oSuperHeroe = this.getView().getModel("newSuperheroe").getProperty("/");

            this.getModel().create("/superheroe", oSuperHeroe, {
                success: function (oData){
                    MessageToast.show("Superheroe creado");
                    that._initLocalModel();
                }
            });
        }
    });

});