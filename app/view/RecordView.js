/*
 * File: app/view/RecordView.js
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

Ext.define('app.view.RecordView', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.RecordView',

    requires: [
        'app.view.RecordViewViewModel',
        'Ext.form.Panel',
        'Ext.form.field.Display',
        'Ext.form.FieldContainer',
        'Ext.form.field.Number',
        'Ext.form.field.ComboBox',
        'Ext.button.Button',
        'Ext.form.field.Hidden',
        'Ext.grid.Panel',
        'Ext.grid.column.Number',
        'Ext.grid.column.Action',
        'Ext.grid.View',
        'Ext.toolbar.Paging'
    ],

    viewModel: {
        type: 'recordview'
    },
    layout: 'anchor',
    header: false,
    title: '当前域名',

    items: [
        {
            xtype: 'panel',
            anchor: '0 18%',
            margin: 10,
            title: '当前域名',
            items: [
                {
                    xtype: 'form',
                    bodyPadding: 10,
                    header: false,
                    title: 'My Form',
                    items: [
                        {
                            xtype: 'displayfield',
                            anchor: '100%',
                            fieldLabel: '当前域名',
                            name: 'domain',
                            value: 'www.baidu.com'
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'panel',
            anchor: '0 37%',
            margin: 10,
            layout: 'fit',
            overlapHeader: false,
            title: '快速添加',
            items: [
                {
                    xtype: 'form',
                    bodyPadding: '5 5 20 20',
                    header: false,
                    title: 'My Form',
                    jsonSubmit: true,
                    url: '../record/add',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'fieldcontainer',
                            flex: 1,
                            height: 61,
                            width: 400,
                            fieldLabel: 'Label',
                            hideLabel: true,
                            layout: {
                                type: 'hbox',
                                pack: 'center'
                            },
                            items: [
                                {
                                    xtype: 'textfield',
                                    flex: 1,
                                    margin: '10 10 10 10',
                                    fieldLabel: '主机记录',
                                    name: 'RecordTitle',
                                    allowBlank: false
                                },
                                {
                                    xtype: 'numberfield',
                                    flex: 1,
                                    margin: 10,
                                    fieldLabel: 'TTL',
                                    name: 'TTL',
                                    value: 3600,
                                    allowBlank: false,
                                    hideTrigger: true,
                                    decimalPrecision: 0
                                }
                            ]
                        },
                        {
                            xtype: 'fieldcontainer',
                            flex: 1,
                            height: 120,
                            width: 400,
                            fieldLabel: 'Label',
                            hideLabel: true,
                            layout: {
                                type: 'hbox',
                                pack: 'center'
                            },
                            items: [
                                {
                                    xtype: 'combobox',
                                    flex: 1,
                                    margin: 10,
                                    fieldLabel: '类型',
                                    name: 'Type',
                                    allowBlank: false,
                                    queryMode: 'local',
                                    store: 'StoreRType',
                                    valueField: 'value'
                                },
                                {
                                    xtype: 'numberfield',
                                    flex: 1,
                                    margin: 10,
                                    fieldLabel: '优先级',
                                    name: 'Priority',
                                    value: 0,
                                    allowBlank: false,
                                    hideTrigger: true,
                                    allowDecimals: false
                                }
                            ]
                        },
                        {
                            xtype: 'fieldcontainer',
                            flex: 1,
                            height: 120,
                            width: 400,
                            fieldLabel: 'Label',
                            hideLabel: true,
                            layout: {
                                type: 'hbox',
                                pack: 'center'
                            },
                            items: [
                                {
                                    xtype: 'textfield',
                                    flex: 1,
                                    margin: 10,
                                    fieldLabel: '记录值',
                                    name: 'Value',
                                    allowBlank: false
                                }
                            ]
                        },
                        {
                            xtype: 'fieldcontainer',
                            flex: 1,
                            height: 160,
                            margin: '',
                            width: 400,
                            layout: 'hbox',
                            fieldLabel: 'Label',
                            hideLabel: true,
                            items: [
                                {
                                    xtype: 'button',
                                    handler: function(button, e) {
                                        var Valid = this.up("form").getForm().isValid();
                                        if (!Valid) return;

                                        this.up("form").getForm().submit({
                                            waitMsg: '正在保存',
                                            scope: {
                                                store: this.up("RecordView").query("gridpanel")[0].store
                                            },
                                            success: function(form, action) {
                                                this.store.load();
                                                Ext.Msg.alert('成功', action.result.msg);
                                            },
                                            failure: function(form, action) {
                                                Ext.Msg.alert('失败', action.result.msg);
                                            }
                                        });
                                    },
                                    margin: 8,
                                    text: '确定'
                                }
                            ]
                        },
                        {
                            xtype: 'hiddenfield',
                            flex: 1,
                            fieldLabel: 'Label',
                            name: 'ZoneID'
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'panel',
            anchor: '0 50%',
            margin: 10,
            layout: 'fit',
            title: '纪录列表',
            items: [
                {
                    xtype: 'gridpanel',
                    header: false,
                    title: 'My Grid Panel',
                    store: 'StoreRecord',
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            sortable: false,
                            dataIndex: 'RecordTitle',
                            text: '主机纪录'
                        },
                        {
                            xtype: 'numbercolumn',
                            dataIndex: 'TTL',
                            text: 'TTL',
                            format: '0000'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'IN',
                            text: 'IN'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'Type',
                            text: '类型'
                        },
                        {
                            xtype: 'numbercolumn',
                            dataIndex: 'Priority',
                            text: '优先级',
                            format: '0000'
                        },
                        {
                            xtype: 'gridcolumn',
                            width: '20%',
                            defaultWidth: 200,
                            dataIndex: 'Value',
                            text: '纪录值'
                        },
                        {
                            xtype: 'actioncolumn',
                            text: '操作',
                            items: [
                                {
                                    handler: function(view, rowIndex, colIndex, item, e, record, row) {
                                        var record= view.getStore().getAt(rowIndex).data;
                                        var config = {
                                            title: "确认删除",
                                            msg: "请确认是否删除，删除记录将无法找回",
                                            closable: false,
                                            buttons: Ext.MessageBox.YESNO,
                                            icon: Ext.MessageBox.WARNING,
                                            fn: function(btn) {
                                                if (btn == "yes") {
                                                    Ext.Ajax.request({
                                                        url: '../record/remove',
                                                        success: function(data, a1, a2) {
                                                            this.view.getStore().load();
                                                            var result = Ext.decode(data.responseText);
                                                            if (result.success) {
                                                                Ext.Msg.alert('成功', result.msg);
                                                            }
                                                        },
                                                        failure: function(data) {
                                                            Ext.Msg.alert('失败', "删除失败");
                                                        },
                                                        jsonData: {
                                                            ID: this.record.ID,
                                                            ZoneID: this.record.ZoneID
                                                        },
                                                        scope: {
                                                            record: this.record,
                                                            view: this.view
                                                        }
                                                    });
                                                }
                                            },
                                            scope: {
                                                record: record,
                                                view: view
                                            }
                                        };
                                        Ext.MessageBox.show(config, this);
                                    },
                                    icon: 'image/delete.gif',
                                    tooltip: '删除'
                                }
                            ]
                        }
                    ],
                    dockedItems: [
                        {
                            xtype: 'pagingtoolbar',
                            dock: 'bottom',
                            width: 360,
                            displayInfo: true,
                            firstText: '第一页',
                            lastText: '最后一页',
                            store: 'StoreRecord'
                        }
                    ]
                }
            ]
        }
    ]

});