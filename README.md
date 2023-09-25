Web Design & User Experience Assignment 5

Name: Priyal Vimal Gudhka
NU ID No.: 002747680
Email Id: gudhka.p@northeastern.edu

Following is the project structure of the assignment : -

1. README.md file holds the folder structure of the project

2. node.js file is used for creating the DOM structure and consists of the function which is used for searching the different elements in the tree

3. .gitignore file is used for ignoring different files


Steps for executing the node.js file : -

1. Open terminal ->  Navigate to the folder having the javaScript file

2. Then type node node.js to run the file


About the Assignment : -

As a part of this assignment, I have created different elements as per the DOM structure provided and have created a serach function using for searching nodes. Following points describes the assignment in detail:

1. Created a class Node having constructor, search method

2. Created a constructor having four input parameters namely, tag, children, classes and id

3. Created various nodes using the constructor defined in the class. Used new keyword for creating nodes and by passing the tag, children, classes and id and have used let datatype for storing the value of the variable

4. A search function is defined having a single input parameter which returns the descendant nodes based on the parameters passed

Following is the logic of search function : -

Based on the selector passed it will return all the descendant nodes. Selector can be tag or id or class. The function will first assign the rootNode which is pushed into the queue using the unshift method. Then if queue is not empty the item will be removed from the queue and will be store in the variable. Further there are three different conditions to check for returning the descendant nodes based on the type of selector passed.

