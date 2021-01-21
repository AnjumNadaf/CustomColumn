sap.ui.controller("lrcustomcolumn.ext.controller.ListReportExt", {
    onClickEmployees : function(oEvent) { 
        alert('onClickEmployees');
    },
    onClickAction1:function(oEvent){
        debugger;
        var btn = oEvent.getSource().oParent.mAggregations.cells;
        var name = btn[0].getProperty("text");
        sap.m.MessageToast.show(name);

    },
    onClickAction2:function(oEvent){
        debugger;
        var object1 = this._table.getSelectedContexts();
        // var obj= oEvent.getSource().getTable();
        // var object =  this.Table.getSelectedContexts();
        // var obj = this._table.getSource().getSelectedContexts()


        // get the fragment
        this._getDialog().open();

        sap.ui.getCore().byId("idFragment--inputId1").setValue(object1);

    },

    _getDialog:function(){
        debugger;
        if(!this.dialog){
            this.dialog = sap.ui.xmlfragment("idFragment","lrcustomcolumn.ext.fragment.popUp",this);

        }
        return this.dialog;

    },
    onClose:function(){
        debugger;
        this._getDialog().close();
        
    },
    // onBeforebindTableExtension:function(oEvent){
    //     debugger;
    //     this.Table = oEvent.getSource().getTable();
        
    //     this._oBindingContext = oEvent.getSource().getSelectedContexts().getBindingContext().getObject();


    // },
    onBeforeRebindTableExtension: function (oEvent) {
        this._table = oEvent.getSource().getTable();
    }
});
