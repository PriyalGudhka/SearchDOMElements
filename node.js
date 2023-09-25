/**
* A Node represents an HTML Element. A node can have a tag name,
* a list of CSS classes and a list of children nodes.
*/
class Node {

  constructor(tag, children, classes, id) {
    // Tag name of the node.
    this.tag = tag;
    // Array of CSS class names (string) on this element.
    this.classes = classes;
    // Array of child nodes.
    this.children = children; // All children are of type Node
    //Represents node id.
    this.id = id;
  }


  /* @param {string} the selector string.
  * @returns {Array} Array of descendent nodes.
  * @public
  */
  search(selector) {

    // This condition checks if the selector passed in undefined or a valid selector
    if (selector !== undefined) {

      // Below are the variables used throughout the code

      let rootNode = this; // Stores the root element
      let classNotation = ".";
      let idNotation = "#";
      var queueNode = [];
      var descendentNodes = []; // Stores the descendant nodes of the selector passed
      var childNodes;
      var itemNode;


      if (rootNode != null) {
        queueNode.unshift(rootNode); // Used unshift method to push the rootNode in the queue

        while (queueNode.length != 0) {
          itemNode = queueNode.shift(); // Used shift method to remove from the queueNode and push it in the itemNode

          // This if condition is used to check if the selector passed is tag and not the root node itself

          if (itemNode.tag === selector && itemNode.id !== this.id) {
            descendentNodes.push(itemNode);
          }

          // This else if condition is used to check if the selector passed is a class name and not the root node itself, accordingly all the descendant nodes are added by iterating the loop

          else if (selector.indexOf(classNotation) !== -1) {
            for (var className = 0; className < itemNode.classes.length; className++) {
              if (classNotation.concat(itemNode.classes[className]) == selector && itemNode.id !== this.id) {
                descendentNodes.push(itemNode);

              }
            }
          }

          // This else if condition is used to check if id selector is passed

          else if (idNotation.concat(itemNode.id) == selector) {
            descendentNodes.push(itemNode);
          }

          // Stores the child nodes of the element
          if (itemNode != undefined) {
            childNodes = itemNode.children;
          }

          // Iterated the array having the child nodes and adds all the child node in the queue
          for (var child = 0; child < childNodes.length; child++) {
            queueNode.push(childNodes[child]);
          }
        }

        // Used for checking the length of the nodes
        if (descendentNodes.length === 0) {
          console.log("No descendant nodes found for selector " + selector);
        }

        else
          return descendentNodes;

      }

    }

    // Checks the selector passed in valid or invalid 
    else {
      console.log("Please pass valid selector.");
    }

  }
}

// Represents different span nodes created using Node constructor by passing tag, child nodes, classes and id's
let span1 = new Node("span", [], ["note"], "span-1");
let span2 = new Node("span", [], [], "span-2");
let span3 = new Node("span", [], ["sub1-span3"], "span-3");
let span4 = new Node("span", [], ["mania"], "span-4");
let span5 = new Node("span", [], ["note", "mania"], "span-5");
let randomNode = new Node("span", [], ["randomSpan"], "span-6");

// Represents different p, section, label nodes created using Node constructor by passing tag, child nodes, classes and id's
let p1 = new Node("p", [], ["sub1-p1", "note"], "para-1");
let section = new Node("section", [], [], "sec-1");
let label = new Node("label", [], [], "lbl-1");

// Represents different div nodes created using Node constructor by passing tag, child nodes, classes and id's
let divNode2 = new Node("div", [p1, span3], ["subContainer1"], "div-2");
let divNode3 = new Node("div", [section, label], ["subContainer2"], "div-3");
let divNode4 = new Node("div", [span4, span5], [], "div-4");
let divNode1 = new Node("div", [span1, span2, divNode2, divNode3, divNode4], ["mainContainer"], "div-1");

// Represents body node having two child nodes created using Node constructor by passing tag, child nodes, classes and id's
let body = new Node("body", [divNode1, randomNode], [], "content");

// Executing different Test Cases

console.log("Executing different Test Cases");
console.log('\n');

let resultantDescendantnodes = divNode1.search("span");
printResult(1, "(divNode1.search('span'))");

resultantDescendantnodes = divNode1.search(".note")
printResult(2, "(divNode1.search('.note'))");

resultantDescendantnodes = divNode1.search("label");
printResult(3, "(divNode1.search('label'))");

console.log('\n');
console.log("Result of Test Case (p1.search('.note')) 4 : -");
console.log('\n');
resultantDescendantnodes = p1.search(".note");

resultantDescendantnodes = divNode1.search("div");
printResult(5, "(divNode1.search('div'))");

console.log('\n');
console.log("Result of Test Case (randomNode.search('div')) 6 : -");
console.log('\n');
resultantDescendantnodes = randomNode.search("div");

console.log('\n');
console.log("Result of Test Case (divNode2.search('section')) 7 : -");
console.log('\n');
resultantDescendantnodes = divNode2.search("section");

console.log('\n');
console.log("Result of Test Case (body.search()) 8 : -");
resultantDescendantnodes = body.search();

resultantDescendantnodes = body.search("section");
printResult(9, "(body.search('section'))");

console.log('\n');
console.log("Result of Test Case (divNode1.search('.randomSpan')) 10 : -");
console.log('\n');
resultantDescendantnodes = divNode1.search(".randomSpan");

// This function is used for printing the result of the Test case

function printResult(testCaseNumber, testCase) {

  if (resultantDescendantnodes !== undefined) {
    console.log('\n');
    console.log("Result of Test Case " + testCaseNumber + " " + (testCase) + " : -");
    console.log('\n');
    console.log(resultantDescendantnodes);
  }
}