var Queue = function() {

  var queue = Object.create(queueMethods);

  queue.storage = {};
  queue.indexBack = 0;
  queue.indexFront = 0;

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


