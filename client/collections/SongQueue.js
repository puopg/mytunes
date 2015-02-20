// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
  },

  play: function(){
    this.trigger('PlayAllQueue', this);
  },

  pause: function(){
    this.trigger('qPause', this);
  },

  stop: function(){
    this.trigger('qEnd', this);
  },


});
