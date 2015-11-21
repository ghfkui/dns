/*
 * File: app/view/TrafficView.js
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

Ext.define('app.view.TrafficView', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.TrafficView',

    requires: [
        'app.view.TrafficViewViewModel',
        'Ext.form.Panel',
        'Ext.chart.CartesianChart',
        'Ext.chart.axis.Category',
        'Ext.chart.axis.Numeric',
        'Ext.chart.series.Line',
        'Ext.chart.interactions.PanZoom',
        'Ext.chart.Legend',
        'app.store.StoreNetTraffic',
        'Ext.XTemplate'
    ],

    viewModel: {
        type: 'trafficview'
    },
    title: '流量监控',
    defaultListenerScope: true,

    listeners: {
        beforeactivate: 'onPanelBeforeActivate1',
        deactivate: 'stopTask',
        removed: 'stopTask'
    },
    items: [
        {
            xtype: 'form',
            bodyPadding: 10,
            header: false,
            title: 'My Form',
            items: [
                {
                    xtype: 'cartesian',
                    shadow: true,
                    height: 500,
                    id: 'trafficeline',
                    animation: false,
                    colors: [
                        '#ff0000',
                        '#00FF00',
                        '#a61120',
                        '#ff8809',
                        '#ffd13e',
                        '#a61187',
                        '#24ad9a',
                        '#7c7474',
                        '#a66111'
                    ],
                    store: 'StoreNetTraffic',
                    axes: [
                        {
                            type: 'category',
                            fields: [
                                'time'
                            ],
                            grid: true,
                            position: 'bottom'
                        },
                        {
                            type: 'numeric',
                            fields: [
                                'received',
                                'sent'
                            ],
                            grid: true,
                            labelInSpan: false,
                            minimum: 0,
                            position: 'left',
                            title: {
                                text: '单位: kbps'
                            },
                            titleMargin: 20
                        }
                    ],
                    series: [
                        {
                            type: 'line',
                            style: {
                                stroke: '#ff0000'
                            },
                            title: '上传速度',
                            xField: 'time',
                            yField: [
                                'sent'
                            ],
                            smooth: 3
                        },
                        {
                            type: 'line',
                            style: {
                                stroke: '#00FF00'
                            },
                            title: '下载速度',
                            xField: 'time',
                            yField: [
                                'received'
                            ],
                            smooth: 3
                        }
                    ],
                    interactions: [
                        {
                            type: 'panzoom'
                        }
                    ],
                    legend: {
                        xtype: 'legend',
                        tpl: [
                            '<div class="',
                            'x-',
                            'legend-container">',
                            '<tpl for=".">',
                            '<div class="',
                            'x-',
                            'legend-item">',
                            '<span ',
                            'class="',
                            'x-',
                            'legend-item-marker {[ values.disabled ? Ext.baseCSSPrefix + \'legend-inactive\' : \'\' ]}" ',
                            'style="float:left;margin:7px;height:1px;width:20px;background:{mark};">',
                            '</span>{name}',
                            '</div>',
                            '</tpl>',
                            '</div>'
                        ]
                    }
                }
            ]
        }
    ],

    onPanelBeforeActivate1: function(component, eOpts) {
        this.startTask();
    },
	startTask: function() {
		var me = this, chart;
        var dataArr = [];
        var sendByte = -1;
        var rtByte = -1;
        var date = new Date();
        date.setDate(date.getDate()-1);
        for(var i=0;i<20;i++){
            date.setSeconds(date.getSeconds()+1);
            dataArr.push([0,0,Ext.Date.format(date,'Y-m-d H:i:s')]);
        }
        var store = new Ext.data.ArrayStore({
                    fields: ['received','sent', 'time'],
                    data: dataArr
        });
        this.query("cartesian[id=trafficeline]")[0].setStore(store);
        
        var s = Ext.create('app.store.StoreNetTraffic');

        var task = this.task = {
           run: function(){
            s.load({callback:function(r){
                if (sendByte == -1)
                {
                    sendByte = r[0].data.sent;
                    rtByte = r[0].data.received;
                    return ;
                }

                dataArr.push([r[0].data.received -rtByte,r[0].data.sent -sendByte, r[0].data.time]);
                if (dataArr.length>21)
                {
                   dataArr = dataArr.slice(1);
                }
                sendByte = r[0].data.sent;
                rtByte = r[0].data.received;
                store.loadData(dataArr);
				if (me && (chart = me.down('chart'))) {
					chart.redraw();
				}
                
            }});
        },
            interval: 3000
        };
		task.run();
        Ext.TaskManager.start(task);
	},
    stopTask: function() {
        if (this.task) {
			Ext.TaskManager.stop(this.task);
		}
    }

});
