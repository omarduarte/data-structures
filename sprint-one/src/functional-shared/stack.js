var Stack = function() {

  var stack = {
    storage : {},
    indexTop : 0
  };

  _.extend(stack, stackMethods);

  return stack;
};

var stackMethods = {

  push : function(value){
    this.storage[this.indexTop] = value;
    this.indexTop++;
  },

  pop : function(){
    if(this.size() > 0){
      var index = this.indexTop - 1;
      var current = this.storage[index];
      delete this.storage[index];
      this.indexTop--;
      return current;
    }
  },

  size : function(){
    return this.indexTop;
  }
  
};

