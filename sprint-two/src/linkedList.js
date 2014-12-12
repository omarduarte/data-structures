var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  // Complexity = O(1);
  list.addToTail = function(value){
    var node = Node(value);
    if(list.tail){
      list.tail.next = node;
    } else {
      list.head = node;
    }
    list.tail = node;
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
