// Meteor.methods

Meteor.methods({
  "mymethod": function() {
    // session id
    this.connection.id;
  }
});







// call a method from client
Meteor.call("mymethod", param1, param2, function(err, res) {

});
