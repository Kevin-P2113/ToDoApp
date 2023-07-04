const handleAddItem = () => {
  //creating the delete button which will go inside every
  const deleteButton = document.createElement("button");
  const deleteButtonText = document.createTextNode("delete");
  deleteButton.appendChild(deleteButtonText);
  deleteButton.setAttribute("class", "delete");
  deleteButton.setAttribute("onclick", "this.parentElement.remove();");

  // creating item which goes in the item list as a todo
  const itemDiv = document.createElement("div");
  const itemTextNode = document.createTextNode(
    document.getElementById("item").value
  );

  //creating the complete button
  const doneButton = document.createElement("button");
  const doneButtonText = document.createTextNode("done");
  doneButton.appendChild(doneButtonText);
  doneButton.setAttribute("class", "done");
  doneButton.setAttribute("onclick", "strikeText(this)");

  //adding the done button to the item
  itemDiv.appendChild(doneButton);

  // adding the text to the todo
  const itemP = document.createElement("p");
  itemP.appendChild(itemTextNode);
  itemDiv.appendChild(itemP);

  // adding the delete button to the todo
  itemDiv.appendChild(deleteButton);

  // adding the item to the div which contains the list of items/todos
  const itemsList = document.getElementById("items");
  itemsList.appendChild(itemDiv);
};

const strikeText = (thisObj) => {
  const delStrike = document.createElement("s");
  const text = thisObj.parentElement.children[1];
  delStrike.appendChild(text);
  thisObj.parentElement.insertBefore(
    delStrike,
    thisObj.parentElement.children[1]
  );
  thisObj.parentElement.parentElement.appendChild(thisObj.parentElement);
};
