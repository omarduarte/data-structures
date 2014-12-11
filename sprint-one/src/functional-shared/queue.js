var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var queue = {
    storage: {},
    indexBack: 0,
    indexFront: 0
  };

  _.extend(queue, queueMethods);

  return queue;

};

var queueMethods = {
  enqueue: function(value){
    this.storage[this.indexBack] = value;
    this.indexBack++;
  },
  dequeue: function(){
    if(this.size() > 0){
      var current = this.storage[this.indexFront];
      delete this.storage[this.indexFront];
      this.indexFront++;
      return current;
    }
  },
  size: function(){
    return this.indexBack - this.indexFront;
  }

};



