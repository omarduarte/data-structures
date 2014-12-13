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
  var child = Tree(val);
  this.children.push(child);
  child.parent = this;
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

treeMethods.removeFromParent = function() {
  var siblings = this.parent.children;
  for (var i = 0 ; i < siblings.length; i++) {
    if (siblings[i] === this) {
      siblings.splice(i, 1);
      break;
    }
  }

  this.parent = null;

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
