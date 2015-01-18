var Queue = function(){
  var someInstance = {};

  var storage = {};

  // We're keeping track of the placement of the values through
  // these indexes. They represent the back and front of the queue.
  var indexBack = 0;
  var indexFront = 0;

  someInstance.enqueue = function(value){
    storage[indexBack] = value;
    indexBack++;
  };

  someInstance.dequeue = function(){
    if (someInstance.size() > 0) {
      var current = storage[indexFront];
      delete storage[indexFront];
      indexFront++;
      return current;
    }
  };

  someInstance.size = function(){
    return indexBack - indexFront;
  };

  return someInstance;
};
