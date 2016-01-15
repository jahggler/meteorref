// this shows all the test methods available

Tinytest.add('package-testing - check all the options', function(test) {
  
  test.equal(2*2, 4, 'Expected to be equal');
  test.notEqual(2*2, 5, 'Expected to be non-equal');
  test.instanceOf(String, Object); // expected to be instanceof
  test.notInstanceOf(String, Number); // expected to not be instance of
  test.throws(function() {
    throw new Meteor.Error('Error here');
  }, expected); // expected a function to throw an error
  test.isTrue(true, msg);
  test.isFalse(false, msg);
  test.isNull(null, msg);
  test.isNotNull(1, msg);
  test.isUndefined(undefined, msg);
  test.isNotUndefined(1, msg);
  test.isNaN(NaN, msg);
  test.isNotNaN(1, msg);
  test.length([1,2,3], 3, msg);
  test.matches('abcde', /[ab]/, msg);
  test.notMatches('abcde', /[z]/, msg);
  
});
