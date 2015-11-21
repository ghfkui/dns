/*
 * File: app/model/Interface.js
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

Ext.define('app.model.Interface', {
    extend: 'Ext.data.Model',
    alias: 'model.Interface',

    requires: [
        'Ext.data.field.String',
        'Ext.data.field.Integer'
    ],

    fields: [
        {
            type: 'string',
            name: 'name'
        },
        {
            type: 'string',
            name: 'ip'
        },
        {
            type: 'int',
            name: 'bytes_recv'
        },
        {
            type: 'int',
            name: 'bytes_sent'
        },
        {
            type: 'int',
            name: 'packets_recv'
        },
        {
            type: 'int',
            name: 'packets_sent'
        },
        {
            type: 'int',
            name: 'dropin'
        },
        {
            type: 'int',
            name: 'dropout'
        },
        {
            type: 'int',
            name: 'errin'
        },
        {
            type: 'int',
            name: 'errout'
        }
    ]
});