// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  initialize: function(){
    this.set('fromQueue', false);
  },

  play: function(){
    // Since we want to be able to play from both the library or the queue, this
    // distinction is important. 
    var fromQueue = this.get('fromQueue');
    
    if(fromQueue)
      this.trigger('playSongFromQueue', this);
    else
      this.trigger('playSongFromLibrary', this);
  },

  pause: function(){
    // NOT IMPLEMENTED
    this.trigger('songPause', this);
  },

  stop: function(){
    // Since we want to be able to play from both the library or the queue, this
    // distinction is important. 
    var fromQueue = this.get('fromQueue');

    if(fromQueue)
      this.trigger('stopSongFromQueue', this);
    else
      this.trigger('stopSongFromLibrary', this);
  },

  enqueue: function(){
    this.trigger('enqueue', this);
  },

  dequeue: function(){
    this.trigger('dequeue', this);
  },
});
