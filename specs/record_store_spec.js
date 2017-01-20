var RecordStore = require('../record_store');
var assert = require('assert');

describe("RecordStore", function() {
  var recordStore;

  beforeEach(function() {
    recordStore = new RecordStore("HMV", "Aberdeen");
  });

  it("Record store has name", function() {
    assert.equal("HMV", recordStore.name);
  });

  it("Record store has city", function() {
    assert.equal("Aberdeen", recordStore.city);
  });

  it("Record store has an inventory", function() {
    assert.deepEqual([], recordStore.inventory);
  });

});