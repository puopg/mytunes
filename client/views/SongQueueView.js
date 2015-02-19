// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

 tagName: "div",

  initialize: function() {
    this.render();
  },

  updateQueue: function(){
    // Re-render the queue
    console.log("hello");
  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<div class="queue">Queue</div>').append(
        //return new SongQueueEntryView({model: song}).render();
    );
  }

});
