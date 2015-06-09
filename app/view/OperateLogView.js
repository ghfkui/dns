/*
 * File: app/view/OperateLogView.js
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

Ext.define('app.view.OperateLogView', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.OperateLogView',

    requires: [
        'app.view.OperateLogViewViewModel',
        'app.view.PagingToolbar',
        'Ext.button.Button',
        'Ext.grid.Panel',
        'Ext.grid.column.Column',
        'Ext.grid.View',
        'Ext.toolbar.Paging'
    ],

    viewModel: {
        type: 'operatelogview'
    },
    title: '操作日志',
    defaultListenerScope: true,

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            items: [
                {
                    xtype: 'button',
                    itemId: 'clean',
                    text: '清空列表',
                    listeners: {
                        click: 'onCleanClick'
                    }
                }
            ]
        }
    ],
    items: [
        {
            xtype: 'gridpanel',
            flex: 1,
            itemId: 'operateLogGrid',
            title: '日志列表',
            autoLoad: true,
            scroll: 'vertical',
            store: 'StoreOperateLog',
            columns: [
                {
                    xtype: 'gridcolumn',
                    width: '20%',
                    dataIndex: 'user',
                    text: '用户'
                },
                {
                    xtype: 'gridcolumn',
                    width: '30%',
                    dataIndex: 'ip',
                    text: 'IP'
                },
                {
                    xtype: 'gridcolumn',
                    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                        return Ext.Date.format(value, "Y-m-d H:i:s");
                    },
                    width: '30%',
                    dataIndex: 'time',
                    text: '时间'
                },
                {
                    xtype: 'gridcolumn',
                    width: '20%',
                    dataIndex: 'log',
                    text: '操作名称'
                }
            ],
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    store: 'StoreOperateLog',
                    dock: 'bottom'
                }
            ]
        }
    ],
    listeners: {
        beforeactivate: 'onPanelBeforeActivate'
    },

    onCleanClick: function(button, e, eOpts) {
        var operateLogGrid = this.down('#operateLogGrid');
        Ext.Ajax.request({
            url: '../log/opt/clean',
            success: function(data, a1, a2) {
                this.view.getStore().load();
                var result = Ext.decode(data.responseText);
                if (result.success) {
                    Ext.Msg.alert('成功', result.msg);
                }
            },
            failure: function(data) {
                Ext.Msg.alert('失败', "清空失败");
            },
            scope: {
                view: operateLogGrid
            }
        });
    },

    onPanelBeforeActivate: function(component, eOpts) {
        this.query("gridpanel[id=dnsloggrid]")[0].store.load();
    }

});