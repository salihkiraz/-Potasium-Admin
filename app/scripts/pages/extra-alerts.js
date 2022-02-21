 // Easy Alert

 $('.easy-alert-btn').on('click', function () {
    $.easyAlert('This is a ' + $(this).text() + ' alert!', 'info', $(this).attr('data-easy-alert-position'));
});
$('.easy-alert-type-btn').on('click', function () {
    $.easyAlert('This is a ' + $(this).text() + ' alert!', $(this).attr('data-alert-type'), $(this).attr('data-easy-alert-position'));
});
$('.easy-alert-animation').on('click', function () {
    var animationName = $('.select-animation').val();
    $.easyAlert({
        message: "Animated alert is shown",
        alertType: 'success',
        position: "t l",
        showAnimation: animationName,
        hideAnimation: animationName,
    });
});
$('.custom-alert-btn').on('click', function () {
    $.easyAlert('This is a custom alert', 'custom');
});
$('.event-complete').on('click', function () {
    $.easyAlert({
        message: 'Event will be fired after 3 seconds',
        complete: function (e, msg) {
            $.easyAlert('Event <strong>COMPLETE</strong> called', 'info', 't r');
        },
        showDuration: 3000
    });
});
$('.event-clicked').on('click', function () {
    $.easyAlert({
        message: 'Event will be fired after alert is clicked',
        clicked: function (e, msg) {
            $.easyAlert('Event <strong>CLICKED</strong> called', 'info', 't r');
        },
    });
});
$('.event-hidden').on('click', function () {
    $.easyAlert({
        message: 'Event will be fired after alert is hidden',
        hidden: function (e, msg) {
            console.log(e, msg);
            $.easyAlert('Event <strong>HIDDEN</strong> called', 'info', 't r');
        },
        time: 3000,
        autoHide: true
    });
});




// Overlang.js Demo
$(".example--1").click(function () {
    $("body").overhang({
        type: "success",
        message: "Woohoo! Our message works!"
    });
});

$(".example--2").click(function () {
    $("body").overhang({
        type: "error",
        message: "Whoops! Something went wrong!",
        closeConfirm: true
    });
});

$(".example--3").click(function () {
    $("body").overhang({
        type: "info",
        message: "⏲️ I will close in 5 seconds!",
        duration: 5,
        upper: true
    });
});

$(".example--4").click(function () {
    $("body").overhang({
        type: "confirm",
        message: "Are you sure?",
        overlay: true
    });
});

$(".example--5").click(function () {
    $("body").overhang({
        custom: true,
        textColor: "#FCE4EC",
        primary: "#F06292",
        accent: "#FCE4EC",
        message: "This is my custom message 😜"
    });
});

$(".example--6").click(function () {
    $("body").overhang({
        type: "confirm",
        primary: "#40D47E",
        accent: "#27AE60",
        yesColor: "#3498DB",
        message: "Do you want to continue?",
        overlay: true,
        callback: function (value) {
            var response = value ? "Yes" : "No";
            alert("You made your selection of: " + response);
        }
    });
});

// Jquery Confirm Demo
$('.example-the-1').on('click', function () {
    $.confirm({
        icon: 'fa fa-smile-o',
        theme: 'modern',
        closeIcon: true,
        animation: 'scale',
        type: 'blue',
    });
});
$('.example-the-2').on('click', function () {
    $.confirm({
        icon: 'fa fa-question-circle-o',
        theme: 'supervan',
        closeIcon: true,
        animation: 'scale',
        type: 'orange',
    });
});
$('.example-the-3').on('click', function () {
    $.confirm({
        icon: 'fa fa-question',
        theme: 'material',
        closeIcon: true,
        animation: 'scale',
        type: 'orange',
    });
});
$('.example-the-4').on('click', function () {
    $.confirm({
        icon: 'fa fa-question',
        theme: 'bootstrap',
        closeIcon: true,
        animation: 'scale',
        type: 'orange',
    });
});

// alert
$('.example-p-1').on('click', function () {
    $.alert({
        title: 'Alert alert!',
        content: 'This is a simple alert. <br> with some <strong>HTML</strong> <em>contents</em>',
        icon: 'fa fa-rocket',
        animation: 'scale',
        closeAnimation: 'scale',
        buttons: {
            okay: {
                text: 'Okay',
                btnClass: 'btn-blue'
            }
        }
    });
});

// confirmation
$('.example-p-2').on('click', function () {
    $.confirm({
        title: 'A secure action',
        content: 'Its smooth to do multiple confirms at a time. <br> Click confirm or cancel for another modal',
        icon: 'fa fa-question-circle',
        animation: 'scale',
        closeAnimation: 'scale',
        opacity: 0.5,
        buttons: {
            'confirm': {
                text: 'Proceed',
                btnClass: 'btn-blue',
                action: function () {
                    $.confirm({
                        title: 'This maybe critical',
                        content: 'Critical actions can have multiple confirmations like this one.',
                        icon: 'fa fa-warning',
                        animation: 'scale',
                        closeAnimation: 'zoom',
                        buttons: {
                            confirm: {
                                text: 'Yes, sure!',
                                btnClass: 'btn-orange',
                                action: function () {
                                    $.alert('A very critical action <strong>triggered!</strong>');
                                }
                            },
                            cancel: function () {
                                $.alert('you clicked on <strong>cancel</strong>');
                            }
                        }
                    });
                }
            },
            cancel: function () {
                $.alert('you clicked on <strong>cancel</strong>');
            },
            moreButtons: {
                text: 'something else',
                action: function () {
                    $.alert('you clicked on <strong>something else</strong>');
                }
            },
        }
    });
});

// prompt
$('.example-p-7-1').on('click', function () {
    $.confirm({
        title: 'A simple form',
        content: 'url:form.html',
        buttons: {
            sayMyName: {
                text: 'Say my name',
                btnClass: 'btn-orange',
                action: function () {
                    var input = this.$content.find('input#input-name');
                    var errorText = this.$content.find('.text-danger');
                    if (!input.val().trim()) {
                        $.alert({
                            content: "Please don't keep the name field empty.",
                            type: 'red'
                        });
                        return false;
                    } else {
                        $.alert('Hello ' + input.val() + ', i hope you have a great day!');
                    }
                }
            },
            later: function () {
                // do nothing.
            }
        }
    });
});

// alert types
$('.example-p-70-type').on('click', function () {
    $.alert({
        title: 'Error',
        icon: 'fa fa-warning',
        type: 'orange',
        content: 'Something went wrong, please retry again after sometime.' +
            '<hr>' +
            'More types: red, green, orange, blue, purple, dark',
    });
});

// background dismiss
$('.example-p-3').on('click', function () {
    $.alert({
        title: 'Background dismiss',
        content: 'Click outside the modal to close it.' +
            '<br>this modal has the `bottom` close animation',
        animation: 'scale',
        closeAnimation: 'bottom',
        backgroundDismiss: true,
        buttons: {
            okay: {
                text: 'okay',
                btnClass: 'btn-blue',
                action: function () {
                    // do nothing
                }
            }
        }
    });
});

// using as dialogs
$('.example-p-4').on('click', function () {
    $.dialog({
        title: 'Title comes here',
        content: 'Just need a popup without buttons, <strong>no problem!</strong><br>' +
            '<h3>disable the buttons</h3>' +
            '<h4><strong>and you get a dialog modal</strong></h4>' +
            '<h5><em>Well, that close icon is shown if no buttons are here (u need something to close the modal right), u can explicitly control that too.</em></h5>' +
            '<button type="button" class="btn btn-success">Click me to change the content</button>',
        animation: 'scale',
        onOpen: function () {
            var that = this;
            this.$content.find('button').click(function () {
                that.setContent('As simple as that !');
            })
        }
    });
});

// asynchronous content
$('.example-p-5').on('click', function () {
    $.dialog({
        title: 'Asynchronous content',
        content: 'url:table.html',
        animation: 'scale',
        columnClass: 'medium',
        closeAnimation: 'scale',
        backgroundDismiss: true,
    });
});

// auto close
$('.example-p-6').on('click', function () {
    $.confirm({
        title: 'Auto close',
        content: 'Some actions maybe critical, prevent it with the Auto close. This dialog will automatically trigger cancel after the timer runs out.',
        autoClose: 'cancelAction|10000',
        escapeKey: 'cancelAction',
        buttons: {
            confirm: {
                btnClass: 'btn-red',
                text: 'Delete ben\'s account',
                action: function () {
                    $.alert('You deleted Ben\'s account!');
                }
            },
            cancelAction: {
                text: 'Cancel',
                action: function () {
                    $.alert('Ben just got saved!');
                }
            }
        }
    });
});

// key strokes
$('.example-p-7').on('click', function () {
    $.confirm({
        title: 'Keystrokes',
        escapeKey: true, // close the modal when escape is pressed.
        content: 'Press the <strong>escape key</strong> to close the modal. That works.' +
            '<br> press <strong>enter key</strong> to trigger okay.' +
            '<br> press <strong>shift or ctrl key</strong> to trigger cancel.',
        backgroundDismiss: true, // for escapeKey to work, backgroundDismiss should be enabled.
        buttons: {
            okay: {
                keys: [
                    'enter'
                ],
                action: function () {
                    $.alert('<strong>Okay button</strong> was triggered.');
                }
            },
            cancel: {
                keys: [
                    'ctrl',
                    'shift'
                ],
                action: function () {
                    $.alert('<strong>Cancel button</strong> was triggered.');
                }
            }
        },
    });
});

// alignment
$('.example-pc-1').on('click', function () {
    $.confirm({
        title: 'Gracefully center aligned',
        content: '<p>You can add content and not worry about the alignment. The goal is to make a Interactive dialog!.</p>' +
            '<button type="button" class="btn btn-success">Click me to add more content</button> <div id="contentArea"></div> ',
        buttons: {
            someButton: {
                text: 'Add wow',
                btnClass: 'btn-green',
                action: function () {
                    this.$content.find('#contentArea').append('<br>Wowww');
                    return false; // prevent dialog from closing.
                }
            },
            someOtherButton: {
                text: 'Clear it',
                btnClass: 'btn-orange',
                action: function () {
                    this.$content.find('#contentArea').html('');
                    return false; // prevent dialog from closing.
                }
            },
            close: function () {
                // lets the user close the modal.
            }
        },
        onOpen: function () {
            // onOpen attach the events.
            var that = this;
            this.$content.find('button').click(function () {
                that.$content.find('#contentArea').append('<br>This is awesome!!!!');
            });
        },
    });
});

// working with images
// todo: images is not tested yet.
$('.example-pc-2').on('click', function () {
    $.confirm({
        title: 'Adding images',
        content: '<p>Images from flickr</p>' +
            '<img src="https://c2.staticflickr.com/4/3891/14354989289_2eec0ba724_b.jpg">',
        animation: 'scale',
        animationClose: 'top',
        buttons: {
            confirm: {
                text: 'Add more',
                btnClass: 'btn-blue',
                action: function () {
                    this.$content.append('<img src="https://c2.staticflickr.com/6/5248/5240523362_8d6d315391_b.jpg">');
                    return false; // prevent dialog from closing.
                }
            },
            cancel: function () {
                // lets the user close the modal.
            }
        },
    });
});

// animations
$(' .example-pc-3').on('click', function () {
    $.alert({
        title: 'Animations',
        content: 'jquery-confirm provides a lot of open &amp; close animations out of the box. <br>The best part is, you can add custom ones too.',
        animation: 'scale',
        closeAnimation: 'right',
        buttons: {
            zoom: function () {
                this.setCloseAnimation('zoom');
            },
            rotate: function () {
                this.setCloseAnimation('rotate');
            },
            scale: function () {
                this.setCloseAnimation('scale');
            },
            top: function () {
                this.setCloseAnimation('top');
            }
        },
        backgroundDismiss: function () {
            return false;
        },
    });
});

$('.example-p-7-2').on('click', function () {
    $.alert({
        title: 'A draggable dialog',
        content: 'This dialog is draggable, use the title to drag it around. It wont touch the screen borders',
        type: 'blue',
        animation: 'scale',
        draggable: true,
    });
})