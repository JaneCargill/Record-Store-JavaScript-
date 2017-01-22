var RecordStore = require('../record_store');
var Record = require('../record');
var assert = require('assert');

describe("RecordStore", function() {
  var recordStore;
  var record;

  beforeEach(function() {
    recordStore = new RecordStore("HMV", "Aberdeen");
    record1 = new Record("Coldplay", "X&Y", 10);
    record2 = new Record("Killers", "Human", 5);
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

  it("Record store has a balance", function() {
    assert.equal(0, recordStore.balance);
  });

  it("Record store can add records", function() {
    recordStore.addRecords(record1);
    recordStore.addRecords(record1);
    assert.deepEqual([record1, record1], recordStore.inventory);
  });

  it("Record store can list records", function() {
    recordStore.addRecords(record1);
    recordStore.addRecords(record2);
    recordStore.listRecords();
    assert.deepEqual([record1, record2], recordStore.inventory);
  });

  it("Record can sell records and increase balance", function() {
    recordStore.addRecords(record1);
    recordStore.addRecords(record2);
    recordStore.sellRecords(record1.title);
    recordStore.sellRecords(record2.title);
    assert.equal(15, recordStore.balance);
  });

  it("Record can sell records and remove record", function() {
    recordStore.addRecords(record1);
    recordStore.addRecords(record2);
    // recordStore.findIndexByTitle(record1.title)
    recordStore.sellRecords(record2.title);
    assert.deepEqual([record1], recordStore.inventory);
  });

  it("Get the total value of inventory", function() {
    recordStore.addRecords(record1);
    recordStore.addRecords(record2);
    recordStore.sellRecords(record1.title);
    assert.equal(15, recordStore.getTotalStoreValue());
  });





});














