

var Graph = function(){
};

Graph.prototype.nodes = {};
//O(1)
Graph.prototype.addNode = function(node){
  var key = JSON.stringify(node);
  this.nodes[key] = {value: node, connections: {}};
};
//O(1)
Graph.prototype.contains = function(node){
  var key = JSON.stringify(node);
  return !!this.nodes[key];
};
//O(n)
Graph.prototype.removeNode = function(node){
  if (this.contains(node)) {
    var key = JSON.stringify(node);
    var connections = this.nodes[key].connections;
    for(var connection in connections){
      this.removeEdge(node, connections[connection]);
    }
    delete this.nodes[key];
  }
};
//O(1)
Graph.prototype.hasEdge = function(fromNode, toNode){
  var fromKey = JSON.stringify(fromNode);
  var toKey = JSON.stringify(toNode);
  var connections = this.nodes[fromKey].connections;

  if (connections[toKey]){
    return true;
  }

  return false;
};
//O(1)
Graph.prototype.addEdge = function(fromNode, toNode){
  var fromKey = JSON.stringify(fromNode);
  var toKey = JSON.stringify(toNode);
  if (this.nodes[fromKey] && this.nodes[toKey]){
    this.nodes[fromKey].connections[toKey] = toNode;
    this.nodes[toKey].connections[fromKey] = fromNode;
  }
};
//O(1)
Graph.prototype.removeEdge = function(fromNode, toNode){
  if(this.hasEdge(fromNode, toNode)){
    var fromKey = JSON.stringify(fromNode);
    var toKey = JSON.stringify(toNode);
    delete this.nodes[fromKey].connections[toKey];
    delete this.nodes[toKey].connections[fromKey];
  }
};
//O(n)
Graph.prototype.forEachNode = function(cb){
  for(var key in this.nodes){
    cb(this.nodes[key].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



