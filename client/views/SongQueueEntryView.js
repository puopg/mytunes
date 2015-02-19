// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  tagName: 'div',

  template: _.template('<div>(<%= artist %>)</div><div><%= title %></div>'),

  events: {
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
