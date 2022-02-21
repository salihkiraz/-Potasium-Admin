$(document).ready(function () {

    var todayDate = moment().startOf('day');
    var YM = todayDate.format('YYYY-MM');
    var YESTERDAY = todayDate.clone().subtract(1, 'day').format('YYYY-MM-DD');
    var TODAY = todayDate.format('YYYY-MM-DD');
    var TOMORROW = todayDate.clone().add(1, 'day').format('YYYY-MM-DD');
    /* initialize the external events
    -----------------------------------------------------------------*/

    $('.list .fc-event').each(function () {

        // store data so the calendar knows to render an event upon drop
        $(this).data('event', {
            title: $.trim($(this).text()), // use the element's text as the event title
            stick: true // maintain when user navigates (see docs on the renderEvent method)
        });

        // make the event draggable using jQuery UI
        $(this).draggable({
            zIndex: 999,
            revert: true, // will cause the event to go back to its
            revertDuration: 0 //  original position after the drag
        });

    });


    /* initialize the calendar
    -----------------------------------------------------------------*/

    $('#calendarapp').fullCalendar({
        header: {
            left: 'prev,next',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        contentHeight: 600,
        eventLimit: true, // allow "more" link when too many events
        navLinks: true,
        editable: true,
        droppable: true, // this allows things to be dropped onto the calendar
        drop: function () {
            // is the "remove after drop" checkbox checked?
            if ($('#drop-remove').is(':checked')) {
                // if so, remove the element from the "Draggable Events" list
                $(this).remove();
            }
        },
        events: [{
                title: 'All Day Event',
                start: YM + '-01'
            },
            {
                title: 'Long Event',
                start: YM + '-07',
                end: YM + '-10'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: YM + '-09T16:00:00'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: YM + '-16T16:00:00'
            },
            {
                title: 'Conference',
                start: YESTERDAY,
                end: TOMORROW
            },
            {
                title: 'Meeting',
                start: TODAY + 'T10:30:00',
                end: TODAY + 'T12:30:00'
            },
            {
                title: 'Lunch',
                start: TODAY + 'T12:00:00'
            },
            {
                title: 'Meeting',
                start: TODAY + 'T14:30:00'
            },
            {
                title: 'Happy Hour',
                start: TODAY + 'T17:30:00'
            },
            {
                title: 'Dinner',
                start: TODAY + 'T20:00:00'
            },
            {
                title: 'Birthday Party',
                start: TOMORROW + 'T07:00:00'
            },
            {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: YM + '-28'
            }
        ]
    });


});