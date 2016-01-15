// This example shows how to test the client side that needs to call a server method
// (c) Evented Mind - https://www.eventedmind.com/feed/meteor-testing-packages-with-tinytest

if (Meteor.isServer) {
  Meteor.methods({
    'test/equality': function(a, b) {
      return a==b;
    },
    'test/error': function() {
      throw new Meteor.Error();
    }
  });
}

if (Meteor.isClient) {
  testAsyncMulti("Testing server methods - equality of two and error", [
    function(test, expect) {
      Meteor.call('test/equality', 2*2, 4, expect(function(err, res) {
        test.isTrue(res);
      }));
    },
    function(test, expect) {
      Meteor.call('test/error', expect(function(err, res) {
        test.instanceOf(err, Meteor.error);
      }));
    }
  ]);
}
