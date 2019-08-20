function addTask()
{
    var newItem  = document.getElementById("inputTodo").value;
    if(newItem !== '')
    {
        var listItem = document.createElement("li");
        var editButton = document.createElement("button");
        var deleteButton = document.createElement("button");
        var textnode = document.createTextNode(newItem);
        editButton.innerText="Edit";
        listItem.className= "list";
        editButton.className="editButton";
	    deleteButton.innerText="Delete";
	    deleteButton.className="deleteButton";
        listItem.appendChild(textnode);
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);

        document.getElementById("todoList").appendChild(listItem);
    }

}