$(function() {
    var ListView = Backbone.View.extend({
        el: $('body'),

        events: {
            'click button#add': 'addItem'
        },

        initialize: function() {
            this.counter = 0;
            this.render();
        },

        render: function() {
            $(this.el).append('<button id="add">Add list item</button>');
            $(this.el).append('<ul></ul>');

            return this;
        },

        addItem: function() {
            $('ul', this.el).append('<li class="item">item ' + this.counter + '</li>');
            this.counter++;
        }
    });

    var listView = new ListView();
});
