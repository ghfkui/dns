/*
 * File: app.js
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

// @require @packageOverrides
Ext.Loader.setConfig({

});


Ext.application({
    models: [
        'Domianmodel',
        'RecordModel',
        'RecordTypeModel',
        'Dnslog',
        'Traffic',
        'Interface',
        'UserModel',
        'RouteModel',
        'OperateLog',
        'Statistics',
        'General',
        'Connector',
        'NCard',
        'Firewall'
    ],
    stores: [
        'StoreZones',
        'StoreRecord',
        'StoreRType',
        'StoreDNSLog',
        'StoreNetTraffic',
        'StoreUser',
        'StoreInterface',
        'StoreRoute',
        'StoreEth',
        'StoreMask',
        'StoreOperateLog',
        'StoreStatistics',
        'General',
        'StoreTimezone',
        'StoreNcard',
        'StoreConnector',
        'ConnectorForAdd',
        'StoreFirewall',
        'StoreSystemLog'
    ],
    views: [
        'MainView',
        'DomainView',
        'DomainAdd',
        'DomainWindows',
        'RecordWindows',
        'RecordView',
        'PagingToolbar',
        'LogView',
        'ToolView',
        'SystemInfoView',
        'TrafficView',
        'NetworkConfigs',
        'SecuritymgrView',
        'UsermgrView',
        'UserAddWindow',
        'OperateLogView',
        'StatisticsView',
        'ImportAndExport',
        'RoutemgrView',
        'Generalconfig',
        'SystemLog'
    ],
    controllers: [
        'MainController'
    ],
    name: 'app',

    launch: function() {
        Ext.create('app.view.LoginView');
    }

});
