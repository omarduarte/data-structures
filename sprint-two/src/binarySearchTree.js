var BinarySearchTree = function(value) {
  var bst = {
    value: value,
    left: undefined,
    right: undefined,
  };

  _.extend(bst, methods);

  return bst;
};

var methods = {
  //O(log n)
  insert: function(newValue) {
    var newTree = BinarySearchTree(newValue);

    if (this.value < newTree.value) {
      if(this.right){
        this.right.insert(newValue);
      } else {
        this.right = newTree;
      }

    } else if (this.value > newTree.value) {
      if(this.left){
        this.left.insert(newValue);
      } else {
        this.left = newTree;
      }
    }
  },
  //O(log n)
  contains: function(target) {
    if (this.value === target) {
      return true;
    }

    var result = false;
    if (this.value < target) {
      if (this.right) {
        result = this.right.contains(target);
      }
    } else {
      if (this.left) {
        result = this.left.contains(target);
      }
    }

    return result;
  },
  //O(n)
  depthFirstLog: function(cb) {
    cb(this.value);
    if(this.right){
      this.right.depthFirstLog(cb);
    }
    if(this.left){
      this.left.depthFirstLog(cb);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
