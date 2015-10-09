var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    //test list.head to check if null

    //node(4) --> head and tail
    //node(5) --> tail = 5, head = 4
    //node(6) --> head = 4, tail = 6 
    if (list.head === null) {
      list[value] = value;
      list.head = Node(value);
      list.tail = Node(value); 
    }
    else {
      list[value] = value; 
      list.tail = Node(value);
    }
  };

  list.removeHead = function(){
    var result = list.head.value;
    delete list[list.head.value];
    delete list.head;
    list.head = list.tail;
    return result;
  };

  list.contains = function(target){
    return _.contains(list, target); 
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
    addToTail = constant time
    removeHead = constant time
    contains = linear
 */
