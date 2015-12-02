'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.i18next_conv = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  default_options_json: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/default.json');
    var expected = grunt.file.read('test/expected/json.json');
    test.equal(actual, expected, 'should generate expected JSON from PO file given default options');

    test.done();
  },
  default_options_po: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/default.po');
    var expected = grunt.file.read('test/expected/default.po');
    test.equal(actual, expected, 'should generate expected PO file from JSON given default options');

    test.done();
  },
  custom_options_json: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/custom.json');
    var expected = grunt.file.read('test/expected/json.json');
    test.equal(actual, expected, 'should generate expected JSON from PO file given custom options');

    test.done();
  },
  custom_options_po: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/custom.po');
    var expected = grunt.file.read('test/expected/custom.po');
    test.equal(actual, expected, 'should generate expected PO file from JSON given custom options');

    test.done();
  },
};
