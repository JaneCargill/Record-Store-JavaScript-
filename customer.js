var Customer = function() {
  this.records = [];

}

Customer.prototype = {
  canBuyRecord: function(record, recordStore) {
    recordStore.sellRecords(record.title);
    return this.records.push(record);
  },
  canSellRecord: function(record, recordStore) {
    recordStore.buyRecord(record);
    var index = this.records.findIndex(function(record) {
      return record;
    });
    this.records.splice(index, 1);
    return this.records;
  }
}





module.exports = Customer;