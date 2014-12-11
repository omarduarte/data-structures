var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Stack.prototype.storage = {};
Stack.prototype.indexTop = 0;
Stack.prototype.push = function(value){
    this.storage[this.indexTop] = value;
    this.indexTop++;
  };
Stack.prototype.pop = function(){
    if(this.size() > 0){
      var index = this.indexTop - 1;
      var current = this.storage[index];
      delete this.storage[index];
      this.indexTop--;
      return current;
    }
  };
Stack.prototype.size = function(){
    return this.indexTop;
  };

