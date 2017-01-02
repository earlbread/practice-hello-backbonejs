$(function() {
    var Item = Backbone.Model.extend({
        defaults: {
            part1: 'hello',
            part2: 'world',
        }
    });

    var ItemList = Backbone.Collection.extend({
        model: Item
    });

    var ItemView = Backbone.View.extend({
        tagName: 'li',

        render: function() {
            $(this.el).html('<span>' + this.model.get('part1') + ' ' + this.model.get('part2') + '</span>');
            return this;
        }
    });

    var ListView = Backbone.View.extend({
        el: $('body'),

        events: {
            'click button#add': 'addItem'
        },

        initialize: function() {
            this.collection = new ItemList();
            this.collection.bind('add', this.appendItem);

            this.counter = 0;
            this.render();
        },

        render: function() {
            $(this.el).append('<button id="add">Add list item</button>');
            $(this.el).append('<ul></ul>');

            // In case collection is not empty
            _(this.collection.model).each(function(item) {
                self.appendItem(item);
            }, this);

            return this;
        },

        addItem: function() {
            this.counter++;

            var item = new Item();
            item.set({
                part2: item.get('part2') + this.counter
            });
            this.collection.add(item);
        },

        appendItem: function(item) {
            var itemView = new ItemView({ model: item });
            $('ul', this.el).append(itemView.render().el);
        }
    });

    var listView = new ListView();
});
