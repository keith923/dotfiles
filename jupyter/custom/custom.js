define([
    'base/js/namespace',
    'base/js/events'
], function(Jupyter, events) {
    events.on('app_initialized.NotebookApp', function() {
        Jupyter.keyboard_manager.command_shortcuts.add_shortcut('r', 'jupyter-notebook:restart-kernel-and-run-all-cells');
    });
});
