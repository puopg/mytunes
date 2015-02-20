// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the funciton (this.set('currentSong', song)) would
    end up refering to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */

    //======== Library Events ==========

    // Event listener for playing a song from a library. 
    // This event will be triggered when a 'dblclick' is made on a song in 
    // the library. That will then trigger a 'playSongFromLibrary' event.
    params.library.on('playSongFromLibrary', function(song){
      console.log("Playing: " + song.get('title') + " from library.");
      this.set('currentSong', song);
    }, this);

    // Event listener for ending a song from a library. 
    // This event will be triggered when a song in the library has ended.
    // That will then trigger a 'stopSongFromLibrary' event.
    params.library.on('stopSongFromLibrary', function(){
      console.log("Ended song: " + song.get('title') + " from library.");
      this.set('currentSong', '');
    }, this);

    // Event listener for adding a song to the queue
    // This event will be triggered when a 'click' is made on a song in 
    // the library. That will then trigger a 'enqueue' event.
    params.library.on('enqueue', function(song){
      console.log("Adding " + song.get('title') + " to playlist.");

      var newSong = new SongModel();
      newSong.set('url', song.get('url'));
      newSong.set('title', song.get('title'));
      newSong.set('artist', song.get('artist'));
      newSong.set("fromQueue", true);

      this.get('songQueue').add(newSong);
    }, this);

    //========= End Library Events =========

    //========= Queue Events ===============

    // Event listener for playing a song from the queue. 
    // This event will be triggered when a 'click' is made on a song in 
    // the library. That will then trigger a 'playSongFromQueue' event.
    this.get('songQueue').on('playSongFromQueue', function(song){
      console.log("Playing: " + song.get('title') + " from queue.");
      this.set('currentSong', song);
    }, this);

    // Event listener for ending a song from the queue. 
    // This event will be triggered when a song in 
    // the library ends. That will then trigger a 'stopSongFromQueue' event.
    this.get('songQueue').on('stopSongFromQueue', function(song){
      var songQueue = this.get('songQueue');
      songQueue.remove(song);

      console.log("Ended song: " + song.get('title') + " from queue.");
      console.log("Removed song: " + song.get('title') + " from queue.");

      if(songQueue.length > 0){
        songQueue.models[0].play();
      }
    }, this);

    // Event listener for playing all songs in queue.
    // This event will be triggered when the queue is clicked.
    // That will then trigger a 'stopSongFromQueue' event.
    this.get('songQueue').on('PlayAllQueue', function(song){
      console.log("Playing all songs in queue.");
      var songQueue = this.get('songQueue');
      if(songQueue.length > 0){
        songQueue.models[0].play();
      }
    }, this);

    this.get('songQueue').on('dequeue', function(song){
      this.get('songQueue').remove(song);
      this.set('currentSong','');
    }, this);
    //=========== End Queue Events ===========
  }

});
