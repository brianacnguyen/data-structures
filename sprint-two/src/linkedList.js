var LinkedList = function(){
  // creates new object and assigns to list 
  var list = {};
  // assign property head/tail on list to null
  list.head = null;
  list.tail = null;
  // adds method addToTail to list
  list.addToTail = function(value){
    //check to see if head is empty
    if (list.head === null) {
      // if head is empty, create node and add to head
      list.head = Node(value);
    }
    //assign value to list.value and create node to tail
    list[value] = value; 
    list.tail = Node(value);
    }
  // adds removeHead method to list
  list.removeHead = function(){
    //store value of head in result
    var result = list.head.value;
    //delete value in head
    delete list[list.head.value];
    //delete head
    delete list.head;
    //assign head to tail
    list.head = list.tail;
    return result;
  };
  
  // adds contains methods to list
  list.contains = function(target){
    //check if list contains target 
    return _.contains(list, target); 
  };

  return list;
};
//function to create node
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
