// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params){
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')});

    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model){
      this.playerView.setSong(model.get('currentSong'));
    }, this);
    
    this.songQueueView.collection.on('add', function(model){
      this.songQueueView.updateQueue(model.get('songQueue'));
    }, this);

    this.songQueueView.collection.on('remove', function(model){
      this.songQueueView.updateQueue(model.get('songQueue'));
    }, this);
    //we will need dequeue, listen for a remove from the collection.

  },

  render: function(){
    return this.$el.html('<h1>Music Player</h1>').append([
      this.playerView.$el,
      this.libraryView.$el,
      this.songQueueView.$el
    ]);
  }

});
