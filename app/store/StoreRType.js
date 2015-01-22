/*
 * File: app/store/StoreRType.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 5.0.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 5.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('app.store.StoreRType', {
    extend: 'Ext.data.Store',

    requires: [
        'app.model.recordTypeModel'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'StoreRType',
            autoLoad: false,
            model: 'app.model.recordTypeModel',
            data: [
                {
                    text: 'A',
                    value: 'A'
                },
                {
                    text: 'MX',
                    value: 'MX'
                },
                {
                    text: 'NS',
                    value: 'NS'
                },
                {
                    text: 'TXT',
                    value: 'TXT'
                },
                {
                    text: 'CNAME',
                    value: 'CNAME'
                }
            ]
        }, cfg)]);
    }
});