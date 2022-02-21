$(window).on('load', function () {


    // Foo Data Table
    var $modal = $('#editor-modal'),
        $editor = $('#editor'),
        $editorTitle = $('#editor-title'),
        ft = FooTable.init('#editing-example', {
            calculateWidthOverride: function() {
                return { width: $(window).width() };
              },
            editing: {
                enabled: true,
                addRow: function () {
                    $modal.removeData('row');
                    $editor[0].reset();
                    $editorTitle.text('Add a new row');
                    $modal.BsModal('show');
                },
                editRow: function (row) {
                    var values = row.val();
                    $editor.find('#id').val(values.id);
                    $editor.find('#firstName').val(values.firstName);
                    $editor.find('#lastName').val(values.lastName);
                    $editor.find('#jobTitle').val(values.jobTitle);
                    $editor.find('#startedOn').val(values.startedOn);
                    $editor.find('#dob').val(values.dob);
                    $modal.data('row', row);
                    $editorTitle.text('Edit row #' + values.id);
                    $modal.BsModal('show');
                },
                deleteRow: function (row) {
                    if (confirm('Are you sure you want to delete the row?')) {
                        row.delete();
                    }
                }
            }
        }),
        uid = 10;

    $editor.on('submit', function (e) {
        if (this.checkValidity && !this.checkValidity()) return;
        e.preventDefault();
        var row = $modal.data('row'),
            values = {
                id: $editor.find('#id').val(),
                firstName: $editor.find('#firstName').val(),
                lastName: $editor.find('#lastName').val(),
                jobTitle: $editor.find('#jobTitle').val(),
                startedOn: moment($editor.find('#startedOn').val(), 'YYYY-MM-DD'),
                dob: moment($editor.find('#dob').val(), 'YYYY-MM-DD')
            };
        if (row instanceof FooTable.Row) {
            row.val(values);
        } else {
            values.id = uid++;
            ft.rows.add(values);
        }
        $modal.BsModal('hide');
    });



    // Search input
    $('#search').on('input', function (e) {
        e.preventDefault();
        var filtering = FooTable.get('#editing-example').use(FooTable.Filtering), // get the filtering component for the table
            filter = $(this).val(); // get the value to filter by
        if (filter === '') { // if the value is "none" remove the filter
            filtering.removeFilter('status');
        } else { // otherwise add/update the filter.
            filtering.addFilter('status', filter, ['firstName','lastName','jobTitle']);
        }
        filtering.filter();
    });


});

function ajaxLoad() {
    $('#loadtable').footable({
        calculateWidthOverride: function() {
            return { width: $(window).width() };
          },
        "columns": $.get('assets/data/foo-tables/data/columns.json'),
        "rows": $.get('assets/data/foo-tables/data/rows.json')
    });
}