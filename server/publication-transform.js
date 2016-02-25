// http://stackoverflow.com/a/18344597/266561

Words = new Mongo.Collection("words"); 

Meteor.publish("mysubscribe", function() {

  // Transform function is what we need to change some data
  var transform = function(doc) {
    doc.date = new Date();
    return doc;
  }

  var self = this;

  var observer = Words.find().observe({
    added: function(document) {
      self.added('collection_name', document._id, transform(document));
    },
    changed: function(newDocument, oldDocument) {
      self.changed('collection_name', oldDocument._id, transform(newDocument));
    },
    removed: function(oldDocument) {
      self.removed('collection_name', oldDocument._id);
    }
  });

  self.onStop(function() {
    observer.stop();
  });

  self.ready();

});
