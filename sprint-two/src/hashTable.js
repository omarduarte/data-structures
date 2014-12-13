var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.size = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var valueInSlot = this._storage.get(i);

  if (!valueInSlot) {
    this._storage.set(i, []);
    valueInSlot = this._storage.get(i);
  }

  var containsKey = false;
  for (var index = 0 ; index < valueInSlot.length; index++) {
    if (valueInSlot[index][0] === k) {
      valueInSlot[index][1] = v;
      containsKey = true;
      break;
    }
  }

  if (!containsKey) {
    valueInSlot.push([k, v]);
  }
  this.size++;
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var valueInSlot = this._storage.get(i);

  if (valueInSlot) {
    for (var index = 0 ; index < valueInSlot.length; index++) {
      if (valueInSlot[index][0] === k) {
        return valueInSlot[index][1];
      }
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var valueInSlot = this._storage.get(i);

  if (valueInSlot) {
    for (var index = 0 ; index < valueInSlot.length; index++) {
      if (valueInSlot[index][0] === k) {
         valueInSlot.splice(index, 1);
      }
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
