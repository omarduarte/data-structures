var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};
//~O(1)

HashTable.prototype.checkLimit = function(){
  console.log('This is the size ', this._size);
  console.log('This is the limit', this._limit);
  if (this._size / this._limit >= 0.75) {
    this._limit *= 2;


    var tuples = [];
    this._storage.each(function(bucket){

      if (bucket) {
        for(var i = 0; i < bucket.length; i++){
          tuples.push(bucket[i]);
        }
      }
    });

    this._storage = LimitedArray(this._limit);

    this._size = 0;
    tuples.forEach((function(tuple) {
      this.insert(tuple[0], tuple[1]);
    }).bind(this));

  } else if (this._limit / this._size < 0.25) {

  }
};


HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var valueInSlot = this._storage.get(i);
  this._size++;

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

  this.checkLimit();

};
//~O(1)
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
//~O(1)
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
