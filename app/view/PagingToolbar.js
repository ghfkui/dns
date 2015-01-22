/*
 * File: app/view/PagingToolbar.js
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

Ext.define('app.view.PagingToolbar', {
    extend: 'Ext.toolbar.Paging',
    alias: 'widget.pagingtoolbar',

    requires: [
        'app.view.PagingToolbarViewModel'
    ],

    viewModel: {
        type: 'pagingtoolbar'
    },
    width: 360,
    afterPageText: '- {0}',
    beforePageText: '页数',
    displayInfo: true,
    displayMsg: '显示 {0} - {1}  总计  {2}',
    emptyMsg: '无数据',
    firstText: '第一页',
    lastText: '最后一页',
    nextText: '下一页',
    prependButtons: true,
    prevText: '上一页',
    refreshText: '刷新',
    store: 'StoreZones'

});