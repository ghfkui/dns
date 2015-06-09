/*
 * File: app/view/MainView.js
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

Ext.define('app.view.MainView', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.mainview',

    requires: [
        'app.view.MainViewViewModel',
        'Ext.menu.Menu',
        'Ext.menu.Item'
    ],

    viewModel: {
        type: 'mainview'
    },
    itemId: 'mainView',
    layout: 'border',

    items: [
        {
            xtype: 'panel',
            region: 'west',
            split: true,
            itemId: 'menuPanel',
            width: 250,
            layout: 'accordion',
            collapseDirection: 'left',
            title: 'DNS管理系统',
            items: [
                {
                    xtype: 'panel',
                    title: '常规设置',
                    items: [
                        {
                            xtype: 'menu',
                            floating: false,
                            itemId: 'menu1',
                            items: [
                                {
                                    xtype: 'menuitem',
                                    getRefView: function() {
                                        return 'Generalconfig';
                                    },
                                    text: '常规设置'
                                },
                                {
                                    xtype: 'menuitem',
                                    getRefView: function() {
                                        return 'NetworkConfigs';
                                    },
                                    text: '网络设置'
                                },
                                {
                                    xtype: 'menuitem',
                                    getRefView: function() {
                                        return 'SecuritymgrView';
                                    },
                                    text: '安全设置'
                                },
                                {
                                    xtype: 'menuitem',
                                    getRefView: function() {
                                        return 'RoutemgrView';
                                    },
                                    text: '路由设置'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    title: '域名管理',
                    items: [
                        {
                            xtype: 'menu',
                            floating: false,
                            itemId: 'menu2',
                            items: [
                                {
                                    xtype: 'menuitem',
                                    getRefView: function() {
                                        return 'Domainview';
                                    },
                                    text: '域名管理'
                                },
                                {
                                    xtype: 'menuitem',
                                    getRefView: function() {
                                        return 'importandexport';
                                    },
                                    text: '导入导出'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    title: '状态监控',
                    items: [
                        {
                            xtype: 'menu',
                            floating: false,
                            itemId: 'menu3',
                            items: [
                                {
                                    xtype: 'menuitem',
                                    getRefView: function() {
                                        return 'SystemInfoView';
                                    },
                                    text: '系统信息'
                                },
                                {
                                    xtype: 'menuitem',
                                    getRefView: function() {
                                        return 'statisticsview';
                                    },
                                    text: '查询统计 '
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    title: '日志记录',
                    items: [
                        {
                            xtype: 'menu',
                            floating: false,
                            items: [
                                {
                                    xtype: 'menuitem',
                                    getRefView: function() {
                                        return 'LogView';
                                    },
                                    text: ' DNS日志'
                                },
                                {
                                    xtype: 'menuitem',
                                    getRefView: function() {
                                        return 'OperateLogView';
                                    },
                                    text: ' 操作日志'
                                },
                                {
                                    xtype: 'menuitem',
                                    getRefView: function() {
                                        return 'SystemLog';
                                    },
                                    text: ' 系统日志'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    title: '系统功能',
                    items: [
                        {
                            xtype: 'menu',
                            floating: false,
                            width: '',
                            items: [
                                {
                                    xtype: 'menuitem',
                                    getRefView: function() {
                                        return 'ToolView';
                                    },
                                    text: '实用工具'
                                },
                                {
                                    xtype: 'menuitem',
                                    getRefView: function() {
                                        return '';
                                    },
                                    text: '数据备份和恢复'
                                },
                                {
                                    xtype: 'menuitem',
                                    getRefView: function() {
                                        return '';
                                    },
                                    text: '系统升级'
                                },
                                {
                                    xtype: 'menuitem',
                                    getRefView: function() {
                                        return 'UsermgrView';
                                    },
                                    text: '用户管理'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'panel',
            flex: 1,
            region: 'center',
            itemId: 'contentPanel',
            layout: 'fit',
            header: false,
            title: '-',
            items: [
                {
                    xtype: 'panel',
                    title: 'index'
                }
            ]
        }
    ]

});