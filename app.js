$(function() {
    var ListView = Backbone.View.extend({
        el: $('body'),

        initialize: function() {
            this.render();
        },

        render: function() {
            $(this.el).html('<ul><li>Hello World</li></ul');

            return this;
        }
    });

    var listView = new ListView();
});
