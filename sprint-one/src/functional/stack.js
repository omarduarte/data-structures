var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var indexTop = 0;

  // Implement the methods below
  someInstance.push = function(value){
    storage[indexTop] = value;
    indexTop++;
  };

  someInstance.pop = function(){
    if(someInstance.size() > 0){
      var index = indexTop - 1;
      var current = storage[index];
      delete storage[index];
      indexTop--;
      return current;
    }
  };

  someInstance.size = function(){
    return indexTop;
  };

  return someInstance;
};
