/*
 * File: app/store/StoreZones.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
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

Ext.define('app.store.StoreZones', {
    extend: 'Ext.data.Store',
    alias: 'store.StoreZones',

    requires: [
        'app.model.Domianmodel',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            pageSize: 16,
            storeId: 'StoreZones',
            model: 'app.model.Domianmodel',
            proxy: {
                type: 'ajax',
                url: '../zones',
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                }
            },
            listeners: {
                load: {
                    fn: me.onArraystoreLoad,
                    scope: me
                }
            }
        }, cfg)]);
    },

    onArraystoreLoad: function(store, records, successful, eOpts) {
        store.getProxy().setExtraParam("s", '');
    }

});