

var Graph = function(){
};

Graph.prototype.nodes = {};

Graph.prototype.addNode = function(node){
  var key = JSON.stringify(node);
  this.nodes[key] = {value: node, connections: []};
};

Graph.prototype.contains = function(node){
  var key = JSON.stringify(node);
  return !!this.nodes[key];
};

Graph.prototype.removeNode = function(node){
  var key = JSON.stringify(node);
  if (this.nodes[key]) {
    delete this.nodes[key];
  }
};

Graph.prototype.hasEdge = function(fromNode, toNode){
};

Graph.prototype.addEdge = function(fromNode, toNode){
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.forEachNode = function(cb){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



