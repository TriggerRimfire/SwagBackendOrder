//
//{block name="backend/create_backend_order/view/customer_information"}
//
Ext.define('Shopware.apps.SwagCreateBackendOrder.view.main.CustomerInformation.CustomerInformation', {

    /**
     * extends from the standard ExtJs container component
     */
    extend: 'Ext.container.Container',

    /**
     * defines an alternate classname
     */
    alternateClassName: 'SwagCreateBackendOrder.main.CustomerInformation',

    height: 200,

    flex: 2,

    padding: '10 0 0 5',

    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    defaults: {
        margin: '0 5 0 0',
        height: 200
    },

    initComponent: function() {
        var me = this;

        me.items = [
            me.getBillingPanel(),
            me.getShippingPanel(),
            me.getPaymentPanel()
        ];

        me.callParent(arguments);
    },

    /**
     * creates the billing panel
     *
     * @returns [SwagCreateBackendOrder.view.main.CustomerInformation.Billing]
     */
    getBillingPanel: function() {
        var me = this;

        return Ext.create('SwagCreateBackendOrder.view.main.CustomerInformation.Billing', {
            subApplication: me.subApplication
        });
    },

    /**
     * creates the shipping panel
     *
     * @returns [SwagCreateBackendOrder.view.main.CustomerInformation.Shipping]
     */
    getShippingPanel: function() {
        var me = this;

        return Ext.create('SwagCreateBackendOrder.view.main.CustomerInformation.Shipping', {
            subApplication: me.subApplication
        });
    },

    /**
     * creates the payment panel
     *
     * @returns [SwagCreateBackendOrder.view.main.CustomerInformation.Payment]
     */
    getPaymentPanel: function() {
        var me = this;

        return Ext.create('SwagCreateBackendOrder.view.main.CustomerInformation.Payment', {
            subApplication: me.subApplication
        });
    }
});
//{/block}