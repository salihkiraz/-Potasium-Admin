var clipboard = new ClipboardJS('.copied-btn');
clipboard.on('success', function(e) {
    mdtoast(e.text, {
        type: 'default', 
        interaction: true, actionText: 'Copied',
        duration:100,
        action: function(){
        //TODO: Undo codes here...
        this.hide(); // this is the toast instance
        }
    });
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);
    e.clearSelection();
});