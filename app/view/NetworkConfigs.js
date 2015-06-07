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
        'Ext.tab.Panel',
        'Ext.tab.Tab',
        'Ext.toolbar.Toolbar',
        'Ext.grid.Panel',
        'Ext.grid.column.Number',
        'Ext.grid.View',
        'Ext.form.Panel',
        'Ext.form.RadioGroup',
        'Ext.form.field.Radio',
        'Ext.form.field.ComboBox',
        'Ext.form.Label',
        'Ext.grid.column.Action'
    ],

    config: {
        connectorUpdate: false,
        connectorUpdateUrl: '../interfaces/update'
    },

    viewModel: {
        type: 'networkconfigs'
    },
    title: '网络设置',
    defaultListenerScope: true,

    layout: {
        type: 'vbox',
        align: 'stretch',
        padding: '10 0'
    },
    items: [
        {
            xtype: 'tabpanel',
            flex: 1,
            activeTab: 0,
            items: [
                {
                    xtype: 'panel',
                    title: '网卡状态',
                    items: [
                        {
                            xtype: 'panel',
                            autoScroll: true,
                            frameHeader: false,
                            header: false,
                            title: 'My Panel',
                            dockedItems: [
                                {
                                    xtype: 'toolbar',
                                    dock: 'top',
                                    items: [
                                        {
                                            xtype: 'button',
                                            handler: function(button, e) {
                                                this.up().up().query("gridpanel[id=interfacegrid]")[0].store.load();
                                            },
                                            text: '刷新'
                                        }
                                    ]
                                }
                            ],
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
                },
                {
                    xtype: 'panel',
                    title: 'WAN接口',
                    items: [
                        {
                            xtype: 'form',
                            margin: '0 10',
                            title: '网卡配置',
                            items: [
                                {
                                    xtype: 'fieldcontainer',
                                    padding: '10 10',
                                    fieldLabel: 'ipprotocol',
                                    hideLabel: true,
                                    items: [
                                        {
                                            xtype: 'radiogroup',
                                            width: 400,
                                            fieldLabel: 'IP协议',
                                            items: [
                                                {
                                                    xtype: 'radiofield',
                                                    boxLabel: 'IPv4'
                                                },
                                                {
                                                    xtype: 'radiofield',
                                                    boxLabel: 'IPv6'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    xtype: 'fieldcontainer',
                                    padding: '10 10',
                                    fieldLabel: 'ipaddress',
                                    hideLabel: true,
                                    layout: {
                                        type: 'hbox',
                                        align: 'stretch'
                                    },
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: '网络地址'
                                        },
                                        {
                                            xtype: 'combobox',
                                            margin: '0 0 0 5',
                                            width: 60,
                                            fieldLabel: '    /',
                                            labelSeparator: '/',
                                            labelWidth: 5
                                        }
                                    ]
                                },
                                {
                                    xtype: 'fieldcontainer',
                                    padding: '10 10',
                                    fieldLabel: 'gateway',
                                    hideLabel: true,
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: '网关'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'fieldcontainer',
                                    padding: '10 10',
                                    fieldLabel: 'safety',
                                    hideLabel: true,
                                    items: [
                                        {
                                            xtype: 'checkboxfield',
                                            fieldLabel: '安全',
                                            boxLabel: '阻止私有网络'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'fieldcontainer',
                                    padding: '10 10',
                                    fieldLabel: 'webmgr',
                                    hideLabel: true,
                                    items: [
                                        {
                                            xtype: 'checkboxfield',
                                            fieldLabel: 'WEB管理',
                                            boxLabel: '启用'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'fieldcontainer',
                                    padding: '10 10',
                                    fieldLabel: 'dnsservice',
                                    hideLabel: true,
                                    items: [
                                        {
                                            xtype: 'checkboxfield',
                                            fieldLabel: 'DNS服务',
                                            boxLabel: '启用'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'fieldcontainer',
                                    padding: '10 10',
                                    fieldLabel: 'allowping',
                                    hideLabel: true,
                                    items: [
                                        {
                                            xtype: 'checkboxfield',
                                            fieldLabel: '允许PING',
                                            boxLabel: '启用'
                                        }
                                    ]
                                }
                            ],
                            dockedItems: [
                                {
                                    xtype: 'toolbar',
                                    dock: 'bottom',
                                    layout: {
                                        type: 'hbox',
                                        pack: 'center'
                                    },
                                    items: [
                                        {
                                            xtype: 'button',
                                            text: '保存'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            title: '相关IP列表'
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    padding: '10 0',
                    title: '接口管理',
                    items: [
                        {
                            xtype: 'form',
                            itemId: 'addConnectorForm',
                            margin: '0 10',
                            padding: '',
                            bodyPadding: '10 0 0 10',
                            title: '添加接口',
                            jsonSubmit: true,
                            url: '../interfaces/add',
                            layout: {
                                type: 'vbox',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'fieldcontainer',
                                    fieldLabel: 'Label',
                                    hideLabel: true,
                                    layout: {
                                        type: 'hbox',
                                        align: 'stretch'
                                    },
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: '名称',
                                            name: 'key'
                                        },
                                        {
                                            xtype: 'label',
                                            margin: '3 0 0 20',
                                            text: '接口名称，3-10位英文字母'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'fieldcontainer',
                                    fieldLabel: 'Label',
                                    hideLabel: true,
                                    layout: {
                                        type: 'hbox',
                                        align: 'stretch'
                                    },
                                    items: [
                                        {
                                            xtype: 'combobox',
                                            fieldLabel: '网卡',
                                            name: 'value',
                                            editable: false,
                                            displayField: 'name',
                                            store: 'StoreNcard',
                                            valueField: 'value'
                                        },
                                        {
                                            xtype: 'label',
                                            margin: '3 0 0 20',
                                            text: '选择对应的网卡绑定到该接口'
                                        }
                                    ]
                                }
                            ],
                            dockedItems: [
                                {
                                    xtype: 'toolbar',
                                    dock: 'bottom',
                                    items: [
                                        {
                                            xtype: 'button',
                                            itemId: 'add',
                                            text: '保存接口',
                                            listeners: {
                                                click: 'onAddClick'
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'gridpanel',
                            itemId: 'connectorGrid',
                            margin: 10,
                            padding: '10 0',
                            title: '接口列表',
                            autoLoad: true,
                            store: 'StoreConnector',
                            columns: [
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'key',
                                    text: '接口名称'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'value',
                                    text: '接口网卡'
                                },
                                {
                                    xtype: 'actioncolumn',
                                    text: '操作',
                                    items: [
                                        {
                                            handler: function(view, rowIndex, colIndex, item, e, record, row) {
                                                this.up('NetworkConfigs').setConnector(record.getData());
                                            },
                                            altText: '编辑',
                                            icon: 'image/edit.gif',
                                            tooltip: '编辑'
                                        },
                                        {
                                            handler: function(view, rowIndex, colIndex, item, e, record, row) {
                                                var connector = record.data;
                                                var confirm = {
                                                    title: "确认删除",
                                                    msg: "请确认是否删除这个接口",
                                                    closable: false,
                                                    buttons: Ext.MessageBox.YESNO,
                                                    icon: Ext.MessageBox.WARNING,
                                                    fn: function(btn) {
                                                        if (btn == "yes") {
                                                            Ext.Ajax.request({
                                                                url: '../interfaces/remove',
                                                                success: function(data, a1, a2){
                                                                    var result = Ext.decode(data.responseText);
                                                                    if (result.success) {
                                                                        Ext.Msg.alert('成功', result.msg, function(){
                                                                            view.getStore().load();
                                                                        });
                                                                    }
                                                                },
                                                                failure: function(data) {
                                                                    Ext.Msg.alert('失败', "删除失败");
                                                                },
                                                                jsonData: {
                                                                    key: this.connector.key
                                                                },
                                                                scope: {
                                                                    connector: this.connector,
                                                                    view: this.view
                                                                }
                                                            });
                                                        }
                                                    },
                                                    scope: {
                                                        connector: connector,
                                                        view: view
                                                    }
                                                };
                                                Ext.MessageBox.show(confirm, this);
                                            },
                                            altText: '删除',
                                            icon: 'image/delete.gif',
                                            tooltip: '删除'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],

    onAddClick: function(button, e, eOpts) {
        var me = this,
            form = me.down('form#addConnectorForm'),
            connectorStore = me.down('grid#connectorGrid').getStore(),
            url = '../interfaces/add';
        if(me.connectorUpdate){
            url = me.connectorUpdateUrl;
            me.connectorUpdate = false;
        }
        form.submit({
            url: url,
            waitMsg: '正在保存',
            success: function (form, action) {
                Ext.Msg.alert('成功', '保存成功', function(){
                    form.reset();
                    connectorStore.load();
                });
            },
            failure: function (form, action) {
                Ext.Msg.alert('失败',  action.result.msg);
            }
        });
    },

    setConnector: function(connector) {
        var me = this,
            form = this.down('form#addConnectorForm');
        me.connectorUpdate = true;
        form.getForm().setValues(connector);
    }

});