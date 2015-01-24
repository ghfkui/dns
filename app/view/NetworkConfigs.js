/*
 * File: app/view/NetworkConfigs.js
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

Ext.define('app.view.NetworkConfigs', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.NetworkConfigs',

    requires: [
        'app.view.NetworkConfigsViewModel',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button',
        'Ext.grid.Panel',
        'Ext.grid.column.Number',
        'Ext.grid.View'
    ],

    viewModel: {
        type: 'networkconfigs'
    },
    title: '网络设置',

    layout: {
        type: 'vbox',
        align: 'stretch',
        padding: '10 0'
    },
    items: [
        {
            xtype: 'toolbar',
            items: [
                {
                    xtype: 'button',
                    handler: function(button, e) {
                        this.up().up().query("gridpanel[id=interfacegrid]")[0].store.load();
                    },
                    text: '刷新'
                }
            ]
        },
        {
            xtype: 'panel',
            flex: 1,
            frameHeader: false,
            header: false,
            title: 'My Panel',
            items: [
                {
                    xtype: 'gridpanel',
                    id: 'interfacegrid',
                    margin: 10,
                    title: '网络接口',
                    autoLoad: true,
                    store: 'StoreInterface',
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'name',
                            text: '接口'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'ip',
                            text: 'IP'
                        },
                        {
                            xtype: 'numbercolumn',
                            dataIndex: 'packets_recv',
                            text: '接收包数'
                        },
                        {
                            xtype: 'numbercolumn',
                            dataIndex: 'errin',
                            text: '接收错误包'
                        },
                        {
                            xtype: 'numbercolumn',
                            dataIndex: 'dropin',
                            text: '接收丢弃包'
                        },
                        {
                            xtype: 'numbercolumn',
                            dataIndex: 'packets_sent',
                            text: '发送包数'
                        },
                        {
                            xtype: 'numbercolumn',
                            dataIndex: 'errout',
                            text: '发送错误包'
                        },
                        {
                            xtype: 'numbercolumn',
                            dataIndex: 'dropout',
                            text: '发送丢弃包'
                        }
                    ]
                }
            ]
        }
    ]

});