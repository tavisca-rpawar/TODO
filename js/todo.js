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
        deleteButton.addEventListener("click", deleteTask);
        listItem.appendChild(textnode);
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);
        document.getElementById("todoList").appendChild(listItem);
    }

}
function deleteTask()
{
    var listItem=this.parentNode;
	var ul=listItem.parentNode;
	//Remove the parent list item from the ul.
	ul.removeChild(listItem);
}