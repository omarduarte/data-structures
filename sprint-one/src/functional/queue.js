var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  var indexBack = 0;
  var indexFront = 0;

  someInstance.enqueue = function(value){
    storage[indexBack] = value;
    indexBack++;
  };

  someInstance.dequeue = function(){
    if(someInstance.size() > 0){
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

//{0: 'Yo'} indexBack === 1
//{0: 'Yo', 1: 'Hi'} indexBack === 2
  //0: 'Yo'
//{1: 'Hi'} indexBack === 2, indexFront === 1
