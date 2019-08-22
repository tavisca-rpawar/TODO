var listItem = [];
var listItemMap = new Map();
var x;
var id = 0;
function addTask()
{
    x = document.getElementById("list");
    for(var e in x){
        e.remove();
    }

    let inputItem  = document.getElementById("inputTodo").value;
    if(inputItem !== ''){
        listItem.push(inputItem);
        updateItem(inputItem);
        document.getElementById("inputTodo").value  = "";
    }
}

function updateItem(inputItem){
    var listItem = document.createElement("li");
    listItem.className= "list";
    listItem.id = id;
    id++;
    var editButton = document.createElement("button");
    editButton.innerText="Edit";
    editButton.className="editButton";
    editButton.addEventListener("click", function() { editTask(listItem,listItem.childNodes[0].textContent); } );
    var deleteButton = document.createElement("button");
    deleteButton.innerText="Delete";
    deleteButton.className="deleteButton";
    var textnode = document.createTextNode(inputItem);
    deleteButton.addEventListener("click", deleteTask);
    listItem.appendChild(textnode);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    document.getElementById("todoList").appendChild(listItem);
}
function deleteTask()
{
    var listItem=this.parentNode;
	var ul=listItem.parentNode;
	//Remove the parent list item from the ul.
	ul.removeChild(listItem);
}

function editTask(listItem,inputItem)
{
    var editedTask = prompt("Please enter your Task", inputItem);
    if (editedTask != "") {
        listItem.childNodes[0].textContent = editedTask;
    }
}


// function addTask()
// {
//     var newItem  = document.getElementById("inputTodo").value;
//     if(newItem !== '')
//     {
//         var listItem = document.createElement("li");
//         var editButton = document.createElement("button");
//         var deleteButton = document.createElement("button");
//         var textnode = document.createTextNode(newItem);
//         editButton.innerText="Edit";
//         listItem.className= "list";
//         editButton.className="editButton";
//         editButton.addEventListener("click", function() { editTask(newItem); } );
// 	       deleteButton.innerText="Delete";
//         deleteButton.className="deleteButton";
//         deleteButton.addEventListener("click", deleteTask);
//         listItem.appendChild(textnode);
//         listItem.appendChild(editButton);
//         listItem.appendChild(deleteButton);
//         document.getElementById("todoList").appendChild(listItem);
//     }

// }
