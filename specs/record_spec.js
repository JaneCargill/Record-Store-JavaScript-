var Record = require('../record');
var assert = require('assert');

describe("Record", function() {
  var record;

  beforeEach(function() {
    record = new Record("Coldplay", "X&Y", 10);
  });

  it("Record store has artist", function() {
    assert.equal("Coldplay", record.artist);
  });

  it("Record store has title", function() {
    assert.equal("X&Y", record.title);
  });

  it("Record store has price", function() {
    assert.equal(10, record.price);
  });

});