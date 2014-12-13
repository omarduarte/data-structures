var Tree = function(value){
  var newTree = {};
  _.extend(newTree, treeMethods);
  newTree.value = value;
  // your code here
  newTree.children = [];  // fix me
  newTree.parent = null;
  return newTree;
};

var treeMethods = {};

// Complexity = O(1)
treeMethods.addChild = function(val){
  var node = Tree(val);
  this.children.push(node);
  // node.parent = this.newTree.value;
};

// Complexity = O(n)
treeMethods.contains = function(target, tree){
  var found = false;
  var tree = tree || this;
  if (tree.value === target){
    found = true;
  } else {
    for (var i = 0; i < tree.children.length; i++) {
      found = found || tree.contains(target, tree.children[i]);
    }
  }
  return found;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
