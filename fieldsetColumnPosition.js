var form = new Ext.FormPanel({
    title: 'Simple Form with FieldSets',
    labelWidth: 75, // label settings here cascade unless overridden
    url: 'save-form.php',
    frame:true,
    bodyStyle:'padding:5px 5px 0',
    width: 700,
    renderTo: 'codeoutput',
    layout:'column', // arrange items in columns
    defaults: {      // defaults applied to items
        layout: 'form',
        border: false,
        bodyStyle: 'padding:4px'
    },
    items: [{
        // Fieldset in Column 1
        xtype:'fieldset',
        columnWidth: 0.5,
        title: 'Fieldset 1',
        collapsible: true,
        autoHeight:true,
        defaults: {
            anchor: '-20' // leave room for error icon
        },
        defaultType: 'textfield',
        items :[{
                fieldLabel: 'Field 1'
            }, {
                fieldLabel: 'Field 2'
            }, {
                fieldLabel: 'Field 3'
            }
        ]
    },{
        // Fieldset in Column 1
        xtype:'fieldset',
        columnWidth: 0.5,
        title: 'Fieldset 1',
        collapsible: true,
        autoHeight:true,
        defaults: {
            anchor: '-20' // leave room for error icon
        },
        defaultType: 'textfield',
        items :[{
                fieldLabel: 'Field 1'
            }, {
                fieldLabel: 'Field 2'
            }, {
                fieldLabel: 'Field 3'
            }
        ]
    }




    ]
});

=====================================================
var form = new Ext.FormPanel({
    title: 'Simple Form with FieldSets',
    labelWidth: 75, // label settings here cascade unless overridden
    url: 'save-form.php',
    frame:true,
    bodyStyle:'padding:5px 5px 0',
    width: 700,
    renderTo: document.body,
    layout:'column', // arrange items in columns
    defaults: {      // defaults applied to items
        layout: 'form',
        border: false,
        bodyStyle: 'padding:4px'
    },
    items: [{
        // Fieldset in Column 1
        xtype:'fieldset',
        columnWidth: 0.5,
        title: 'Fieldset 1',
        collapsible: true,
        autoHeight:true,
        defaults: {
            anchor: '-20' // leave room for error icon
        },
        defaultType: 'textfield',
        items :[{
                fieldLabel: 'Field 1'
            }, {
                fieldLabel: 'Field 2'
            }, {
                fieldLabel: 'Field 3'
            }
        ]
    },{
        // Fieldset in Column 2 - Panel inside
        xtype:'fieldset',
        title: 'Show Panel', // title, header, or checkboxToggle creates fieldset header
        autoHeight:true,
        columnWidth: 0.5,
        checkboxToggle: true,
        collapsed: true, // fieldset initially collapsed
        layout:'anchor',
        items :[{
            xtype: 'panel',
            anchor: '100%',
            title: 'Panel inside a fieldset',
            frame: true,
            height: 100
        }]
    }]
});

=============================================
Ext.onReady(function () {
    Ext.define('ContactGeneralInfo', {
        extend: 'Ext.form.FieldSet',
        layout: 'column',
        alias: 'widget.contactgeneralinfo',
        initComponent: function () {
            var defaults = {
                anchor: '100%',
                labelWidth: 130,
                labelStyle: 'font-weight:bold',
                labelAlign: 'right'
            };
            var layout = {
                type: 'anchor'
            };
            var defaultType = 'textfield';
            var padding = '5 5 5 5';
            this.items = [
                {
                    xtype: 'fieldset',
                    border: false,
                    defaultType: defaultType,
                    columnWidth: .5,
                    defaults: defaults,
                    layout: layout,
                    items: [
                        {
                            fieldLabel: 'FullName',
                            name: 'FullName'
                        },
                        {
                            fieldLabel: 'City',
                            name: 'City'
                        },
                        {
                            fieldLabel: 'RegAddress',
                            name: 'RegAddress'
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    border: false,
                    defaultType: defaultType,
                    columnWidth: .5,
                    defaults: defaults,
                    layout: layout,
                    items: [
                        {
                            fieldLabel: 'JobDescription',
                            name: 'JobDescription'
                        },
                        {
                            fieldLabel: 'ContactPerson',
                            name: 'ContactPerson'
                        },
                        {
                            fieldLabel: 'OriginatorName',
                            name: 'OriginatorName'
                        }
                    ]
                }
            ];
            this.callParent(arguments);
        }
    });
 
    Ext.define('ContactInfo', {
        extend: 'Ext.form.Panel',
        alias: 'widget.contactinfo',
        bodyPadding: 10,
        initComponent: function () {
            this.initialConfig.waitMsgTarget = true;
            var defaults = {
                anchor: '100%',
                labelWidth: 130,
                labelStyle: 'font-weight:bold',
                labelAlign: 'left'
            };
            var layout = {
                type: 'anchor'
            };
            var defaultType = 'displayfield';
            var padding = '3 10 5 10';
            this.items = [
                {
                    xtype: 'contactgeneralinfo',
                    title: 'Contact',
                    padding: padding
                }
            ];
            this.buttons = [
                { text: 'OK' },
                { text: 'Cancel' }
            ];
            this.callParent(arguments);
        }
    });
 
    Ext.define('DataGrid', {
        extend: 'Ext.grid.Panel',
        alias: 'widget.datagrid',
        title: 'All Users',
        initComponent: function () {
            this.store = {
                fields: ['name', 'email', 'phone'],
                data: [
                    { 'name': 'Lisa', "email": "lisa@simpsons.com", "phone": "555-111-1224" },
                    { 'name': 'Bart', "email": "bart@simpsons.com", "phone": "555-222-1234" },
                    { 'name': 'Homer', "email": "home@simpsons.com", "phone": "555-222-1244" },
                    { 'name': 'Marge', "email": "marge@simpsons.com", "phone": "555-222-1254" },
                    { 'name': 'Bart', "email": "bart@simpsons.com", "phone": "555-222-1234" },
                    { 'name': 'Homer', "email": "home@simpsons.com", "phone": "555-222-1244" },
                    { 'name': 'Marge', "email": "marge@simpsons.com", "phone": "555-222-1254" },
                    { 'name': 'Bart', "email": "bart@simpsons.com", "phone": "555-222-1234" },
                    { 'name': 'Homer', "email": "home@simpsons.com", "phone": "555-222-1244" }
                ]
            };
            this.columns = [
                { header: 'Name', dataIndex: 'name' },
                { header: 'Email', dataIndex: 'email', flex: 1 },
                { header: 'Phone', dataIndex: 'phone' }
            ];
            this.callParent(arguments);
        }
    });
 
    Ext.define('CoolWindow', {
        extend: 'Ext.window.Window',
        alias: 'widget.coolwindow',
        width: 600,
        height: 500,
        maximizable: true,
        layout: 'border',
        items: [
            {
                xtype: 'contactinfo',
                region: 'north'
            },
            {
                xtype: 'tabpanel',
                tabBar: {
                    plain: true
                },
                region: 'center',
                items: [
                    {
                        title: 'Tab 1',
                        xtype: 'datagrid'
                    },
                    {
                        title: 'Tab 2',
                        xtype: 'datagrid'
                    }
                ]
            }
        ],
        buttons: [
            { text: 'Close', handler: function () { this.up('window').close() } }
        ]
    });
 
        Ext.widget('coolwindow', {
                title: 'My Cool Window',
                autoShow: true
        });
});


    