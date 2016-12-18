QUnit.test( "Can convert email addresses from written format to proper format", function( assert ) {
  assert.equal(getEmail("jessie dot wongus at example hyphen domain dot com"), "jessie.wongus@example-domain.com", "Passed!" );
});

QUnit.test( "Can obfuscate an email address", function( assert ) {
  assert.equal(obfuscateEmail("jessie.wongus@example-domain.com"), "jessie.w...main.com", "Passed!" );
});
