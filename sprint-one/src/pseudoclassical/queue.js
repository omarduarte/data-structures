var Queue = function() {
};

Queue.prototype.storage = {};
Queue.prototype.indexFront = 0;
Queue.prototype.indexBack = 0;

Queue.prototype.enqueue = function(value){
  this.storage[this.indexBack] = value;
  this.indexBack++;
};

Queue.prototype.dequeue = function(){
  if(this.size() > 0){
    var current = this.storage[this.indexFront];
    delete this.storage[this.indexFront];
    this.indexFront++;
    return current;
  }
};

Queue.prototype.size = function(){
  return this.indexBack - this.indexFront;
};

