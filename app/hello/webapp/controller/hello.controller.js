sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
    "sap/base/util/uid"

],
function (Controller,Fragment,uid) {
    "use strict";

   return Controller.extend("hello.controller.hello",{
    
    onOpenFragment: function() {
        var oView = this.getView();
        var sUniqueId = uid(); // Generate a unique ID for the fragment
if(!this._oDialog){
    Fragment.load({
        id: sUniqueId,
        name: "hello.view.Dialog", // Ensure this matches the actual fragment path and name
        controller: this
    }).then(function(oFragment) {
        oView.addDependent(oFragment); // Add fragment as a dependent to the view
        oFragment.open(); // Open the dialog

        // Fetch the external HTML content
        $.ajax({
            url: "dummy.html",
            method: "GET",
            success: function (data) {
                // Ensure the control is accessed only after the fragment is fully added to the container
                var oHTMLControl = Fragment.byId(sUniqueId, "htmlContent");
                if (oHTMLControl) {
                    oHTMLControl.setContent(data);
                } else {
                    console.error("HTML control not found in the fragment.");
                }
            },
            error: function () {
                console.error("Failed to load external HTML content.");
            }
        });
    }).catch(function(oError) {
        console.error("Error loading fragment: ", oError);
    });

      
    }
},
    onCloseDialog: function(evt) {
        let oSource=evt.getSource().getParent();
        oSource.close();
    }
   })
});
