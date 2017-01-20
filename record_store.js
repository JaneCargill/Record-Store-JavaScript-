var RecordStore = function(name, city) {
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 0;
}

RecordStore.prototype = {
  addRecords: function(record) {
    return this.inventory.push(record);
  },
  listRecords: function() {
    return this.inventory.forEach(function(record) {
      console.log("list", record);
    });
  },
  sellRecords: function(title) {
    this.balance = 0;
    var filteredInventory = this.inventory.filter(function(record) {
      return (record.title === title);
      // this.inventory
    });
    var newArray = filteredInventory[0];
    return this.balance += newArray.price;
  },
  getTotalRecordValue: function() {
    return this.inventory.reduce(function(accum, record) {
      return accum += record.price;
    }, this.balance);
  },
  findIndex: function() {
    
  }

}




module.exports = RecordStore;