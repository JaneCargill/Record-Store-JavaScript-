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
  removeIndexByTitle: function(title) {
    var index = this.inventory.findIndex(function (record) {
      console.log("title", record.title);
      return record.title === title;
    });
      return this.inventory.splice(index, 1);
  },

  sellRecords: function(title) {
    
    var filteredInventory = this.inventory.filter(function(record) {
      return (record.title === title);
    });
    this.removeIndexByTitle(title);
    var newArray = filteredInventory[0];
    return this.balance += newArray.price;
  },

  getTotalStoreValue: function() {
    return this.inventory.reduce(function(accum, record) {
      return accum += record.price;
    }, this.balance);
  },

  buyRecord: function(record) {
    this.addRecords(record);
    this.balance -= record.price;
  }

  

}




module.exports = RecordStore;