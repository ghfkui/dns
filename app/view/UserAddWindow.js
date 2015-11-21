/*
 * File: app/view/UserAddWindow.js
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

Ext.define('app.view.UserAddWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.UserAddWindow',

    requires: [
        'app.view.UserAddWindowViewModel',
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button'
    ],

    config: {
        urlUpdate: '../user/update',
        rowUpdate: false
    },

    viewModel: {
        type: 'useraddwindow'
    },
    width: 400,
    title: '用户管理',
    modal: true,
    defaultListenerScope: true,

    items: [
        {
            xtype: 'form',
            itemId: 'userForm',
            bodyPadding: 10,
            frameHeader: false,
            header: false,
            title: 'My Form',
            jsonSubmit: true,
            url: '../user/add',
            items: [
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    fieldLabel: '用户名',
                    name: 'name',
                    allowBlank: false
                },
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    fieldLabel: '密码',
                    name: 'passwd',
                    inputType: 'password'
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    layout: {
                        type: 'hbox',
                        pack: 'end'
                    },
                    items: [
                        {
                            xtype: 'button',
                            itemId: 'saveBtn',
                            text: '保存',
                            listeners: {
                                click: 'onSaveBtnClick'
                            }
                        }
                    ]
                }
            ]
        }
    ],

    onSaveBtnClick: function(button, e, eOpts) {
        var me = this,
            form = me.down('form#userForm'),
            valid = form.isValid();
        if(!valid){
            return false;
        }
        if(me.rowUpdate){
            form.getForm().url = me.urlUpdate;
        }
        form.submit({
            waitMsg: '正在保存',
            success: function (form, action) {
                Ext.Msg.alert('成功', '用户保存成功');
                this.addWin.fireEvent('userAdded');
                this.addWin.close();
            },
            failure: function (form, action) {
                Ext.Msg.alert('失败',  action.result.msg);
            },
            scope: {
                addWin: me
            }
        });
    },

    setUser: function(user) {
        var me = this,
            form = me.down('form#userForm');
        me.rowUpdate = true;
        form.getForm().setValues(user);
    }

});