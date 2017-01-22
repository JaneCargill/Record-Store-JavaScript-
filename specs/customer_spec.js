var Customer = require('../customer');
var Record = require('../record');
var RecordStore = require('../record_store');
var assert = require('assert');

describe("Customer", function() {
  var customer;
  var record;
  var recordStore;

  beforeEach(function() {
    customer = new Customer();
    record = new Record("Coldplay", "X&Y", 10);
    record2 = new Record("Killers", "Human", 5);
    record3 = new Record("Passenger", "Let Her Go", 15);
    recordStore = new RecordStore("HMV", "Aberdeen")
  });

  it("can buy record", function() {
    recordStore.addRecords(record);
    recordStore.addRecords(record2);
    customer.canBuyRecord(record, recordStore);
    assert.deepEqual([record], customer.records);
    assert.equal(10, recordStore.balance);
  });

  it("can sell record", function() {
    recordStore.addRecords(record);
    recordStore.addRecords(record2);
    recordStore.addRecords(record3);
    customer.canBuyRecord(record, recordStore);
    customer.canBuyRecord(record2, recordStore);
    customer.canSellRecord(record, recordStore);
    assert.deepEqual([record2], customer.records);
    assert.equal(5, recordStore.balance);
    assert.deepEqual([record3, record], recordStore.inventory);
  });
});