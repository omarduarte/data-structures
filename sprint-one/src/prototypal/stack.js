var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = Object.create(stackMethods);
  stack.storage = {};
  stack.indexTop = 0;
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


