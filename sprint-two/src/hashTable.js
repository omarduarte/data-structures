var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype._fetchAllTuples = function() {
  var tuples = [];

  debugger;
  this._storage.each(function(bucket){
    if (bucket) {
      for(var i = 0; i < bucket.length; i++){
        tuples.push(bucket[i]);
      }
    }
  });

  return tuples;
};

HashTable.prototype._insertTuples = function(tuples) {
  for (var i = 0; i < tuples.length; i++) {
    var tuple = tuples[i];
    this.insert(tuple[0], tuple[1], true);
  }
};

HashTable.prototype._redoHashTable = function(newLimit) {
  var tuples = this._fetchAllTuples();

  this._size = 0;
  this._limit = newLimit;
  this._storage = LimitedArray(this._limit);
  this._insertTuples(tuples);
}

//~O(1)
HashTable.prototype._evaluateHashTableSize = function(){

  if (this._size / this._limit >= 0.75) {
    this._redoHashTable(this._limit * 2);

  } else if (this._size / this._limit <= 0.25 && this._limit > 8) {
    this._redoHashTable(this._limit / 2);
  }
};


HashTable.prototype.insert = function(k, v, evaluationDisabled){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);

  // Create a bucket if no bucket was previously defined
  if (!bucket) {
    this._storage.set(i, []);
    bucket = this._storage.get(i);
  }

  // If key is in bucket, update its value
  var containsKey = false;
  for (var index = 0; index < bucket.length; index++) {
    var tuple = bucket[index];
    if (tuple[0] === k) {
      tuple[1] = v;
      containsKey = true;
      break;
    }
  }

  // If key is NOT in bucket, create new tuple
  if (!containsKey) {
    bucket.push([k, v]);
    this._size++;
    if (!evaluationDisabled) {
      this._evaluateHashTableSize();
    }
  }

};

//~O(1)
HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);

  if (bucket) {
    for (var index = 0; index < bucket.length; index++) {
      var tuple = bucket[index];
      if (tuple[0] === k) {
        return tuple[1];
      }
    }
  }
  return null;
};

//~O(1)
HashTable.prototype.remove = function(k) {
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);

  if (bucket) {
    for (var index = 0; index < bucket.length; index++) {
      var tuple = bucket[index];
      if (tuple[0] === k) {
        bucket.splice(index, 1);
        this._size--;
        this._evaluateHashTableSize();
        break;
      }
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
