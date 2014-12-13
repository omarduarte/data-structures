var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  list.previousTail = null;


  // Complexity = O(1);
  list.addToTail = function(value){
    var node = Node(value);
    if(list.tail){
      list.tail.next = node;
      list.previousTail = list.tail;
    } else {
      list.head = node;
    }
    list.tail = node;
  };

  list.addToHead = function(value){
    var node = Node(value);
    if(list.head){
      var previousHead = list.head;
      list.head = node;
      list.head.next = previousHead;
    } else {
      list.addToTail(value);
    }
  };
  // Complexty = O(1);
  list.removeHead = function(){
    var currentHead = list.head;
    var currentValue = null;
    if (currentHead) {
      list.head = currentHead.next;
      currentValue = currentHead.value;
    }
    return currentValue;
  };

  list.removeTail = function(){
    var currentTail = list.tail;
    var currentValue = null;
    if(currentTail){
      currentValue = currentTail.value;
      list.tail = currentTail.previousTail;
    }
    return currentValue;
  };

  // Complexty = O(n);
  list.contains = function(target){
    var node = list.head;
    while(true){
      if(node.value === target){
        return true;
      }
      if(node === list.tail){
        return false;
      }
      node = node.next;
    }
  };
  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
