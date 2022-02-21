
        // BASIC TABLE
        var clients = [
            { "Name": "Otto Clay", "Age": 25, "Country": 1, "Address": "Ap #897-1459 Quam Avenue", "Married": false },
            { "Name": "Connor Johnston", "Age": 45, "Country": 2, "Address": "Ap #370-4647 Dis Av.", "Married": true },
            { "Name": "Lacey Hess", "Age": 29, "Country": 3, "Address": "Ap #365-8835 Integer St.", "Married": false },
            { "Name": "Timothy Henson", "Age": 56, "Country": 1, "Address": "911-5143 Luctus Ave", "Married": true },
            { "Name": "Ramona Benton", "Age": 32, "Country": 3, "Address": "Ap #614-689 Vehicula Street", "Married": false },
            { "Name": "Otto Clay", "Age": 25, "Country": 1, "Address": "Ap #897-1459 Quam Avenue", "Married": false },
            { "Name": "Connor Johnston", "Age": 45, "Country": 2, "Address": "Ap #370-4647 Dis Av.", "Married": true },
            { "Name": "Lacey Hess", "Age": 29, "Country": 3, "Address": "Ap #365-8835 Integer St.", "Married": false },

        ];
    
        var countries = [
            { Name: "", Id: 0 },
            { Name: "United States", Id: 1 },
            { Name: "Canada", Id: 2 },
            { Name: "United Kingdom", Id: 3 }
        ];
    
        $("#jsGrid").jsGrid({
            width: "100%",
            height: "420px",
    
            inserting: true,
            editing: true,
            sorting: true,
            paging: true,
    
            data: clients,
    
            fields: [
                { name: "Name", type: "text", width: 150, validate: "required" },
                { name: "Age", type: "number", width: 50 },
                { name: "Address", type: "text", width: 200 },
                { name: "Country", type: "select", items: countries, valueField: "Id", textField: "Name" },
                { name: "Married", type: "checkbox", title: "Is Married", sorting: false },
                { type: "control" }
            ]
        });

        // CUSTOMIZE TABLE 
        $("#jsGrid1").jsGrid({
            height: "600px",
            width: "100%",

            filtering: true,
            editing: true,
            sorting: true,
            paging: true,
            autoload: true,

            pageSize: 15,
            pageButtonCount: 5,

            controller: db,

            fields: [
                { name: "Name", type: "text", width: 150 },
                { name: "Age", type: "number", width: 50 },
                { name: "Address", type: "text", width: 200 },
                { name: "Country", type: "select", items: db.countries, valueField: "Id", textField: "Name" },
                { name: "Married", type: "checkbox", title: "Is Married", sorting: false },
                { type: "control", modeSwitchButton: false, editButton: false }
            ]
        });


        $(".config-panel input[type=checkbox]").on("click", function() {
            var $cb = $(this);
            $("#jsGrid1").jsGrid("option", $cb.attr("id"), $cb.is(":checked"));
        });

        // CUSTOM FIELD

        var MyDateField = function(config) {
            jsGrid.Field.call(this, config);
        };

        MyDateField.prototype = new jsGrid.Field({
            sorter: function(date1, date2) {
                return new Date(date1) - new Date(date2);
            },

            itemTemplate: function(value) {
                return new Date(value).toDateString();
            },

            insertTemplate: function(value) {
                return this._insertPicker = $("<input>").datepicker({ defaultDate: new Date() });
            },

            editTemplate: function(value) {
                return this._editPicker = $("<input>").datepicker().datepicker("setDate", new Date(value));
            },

            insertValue: function() {
                return this._insertPicker.datepicker("getDate").toISOString();
            },

            editValue: function() {
                return this._editPicker.datepicker("getDate").toISOString();
            }
        });

        jsGrid.fields.myDateField = MyDateField;

        $("#jsGrid2").jsGrid({
            height: "500px",
            width: "100%",

            inserting: true,
            editing: true,
            sorting: true,
            paging: true,

            data: db.users,

            fields: [
                { name: "Account", width: 150, align: "center" },
                { name: "Name", type: "text" },
                { name: "RegisterDate", type: "myDateField", width: 100, align: "center" },
                { type: "control", editButton: false, modeSwitchButton: false }
            ]
        }); 
