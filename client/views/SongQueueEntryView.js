// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  tagName: 'div class="queueSong"',

  template: _.template('<div><div>(<%= artist %>) <%= title %> ' + 
                        '<button class="playBtn" >Play</button>  ' + 
                        '<button class="delBtn" >Remove</button> </div></div>'),


  events: {
    'click .playBtn': function() {
      this.model.play();
    },

    "click .delBtn" : function(){
      this.model.dequeue();
    },
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
