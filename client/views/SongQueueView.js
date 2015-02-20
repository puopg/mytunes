// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

 tagName: 'div class="Queue"',

  initialize: function() {
    this.render();
  },

  events: {
    'click .playAllQueueBtn': function() {
      this.collection.play();
    },
  },

  updateQueue: function(){
    // Re-render the queue
    this.render();
  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<h2 class="queueHeader">Song Queue <button class="playAllQueueBtn" >Play All</button></h2>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
