
function rules2() {
	document.querySelector(".section_left").style.display="none";
	document.querySelector(".white_block").style.display="block";
	document.querySelector(".rules3").style.display="none";
	document.querySelector(".rules4").style.display="none";
	document.querySelector(".rules5").style.display="none";
	document.querySelector(".rules6").style.display="none";
	document.querySelector(".rules7").style.display="none";
	document.querySelector(".rules8").style.display="none";
	document.querySelector(".rules9").style.display="none";

}
function rules1(){
	document.querySelector(".section_left").style.display="block";
	document.querySelector(".white_block").style.display="none";
	document.querySelector(".rules3").style.display="none";
	document.querySelector(".rules4").style.display="none";
	document.querySelector(".rules5").style.display="none";
	document.querySelector(".rules6").style.display="none";
	document.querySelector(".rules7").style.display="none";
	document.querySelector(".rules8").style.display="none";
	document.querySelector(".rules9").style.display="none";

}
function plus() {
	let num1, num2, num3, num4, relust;

	num1 = document.getElementById('n1').value;
	num1 = parseInt(num1);

	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2);

	num3 = document.getElementById('n3').value;
	num3 = parseInt(num3);

	num4 = document.getElementById('n4').value;
	num4 = parseInt(num4);


	relust =((10*num1)+(6.25*num2)-(5*num3)-161)*num4;

	document.getElementById('out').innerHTML = relust;
}
function plus2() {
	let num1, num2, num3, num4, relust;

	num1 = document.getElementById('n5').value;
	num1 = parseInt(num1);

	num2 = document.getElementById('n6').value;
	num2 = parseInt(num2);

	num3 = document.getElementById('n7').value;
	num3 = parseInt(num3);

	num4 = document.getElementById('n8').value;
	num4 = parseInt(num4);


	relust =((10*num1)+(6.25*num2)-(5*num3)-161)*num4;

	document.getElementById('out').innerHTML = relust;
}
function rules3(){
	document.querySelector(".section_left").style.display="none";
	document.querySelector(".white_block").style.display="none";
	document.querySelector(".rules3").style.display="block";
	document.querySelector(".rules4").style.display="none";
	document.querySelector(".rules5").style.display="none";
	document.querySelector(".rules6").style.display="none";
	document.querySelector(".rules7").style.display="none";
	document.querySelector(".rules8").style.display="none";
	document.querySelector(".rules9").style.display="none";
}
function rules4(){
	document.querySelector(".section_left").style.display="none";
	document.querySelector(".white_block").style.display="none";
	document.querySelector(".rules3").style.display="none";
	document.querySelector(".rules4").style.display="block";
	document.querySelector(".rules5").style.display="none";
	document.querySelector(".rules6").style.display="none";
	document.querySelector(".rules7").style.display="none";
	document.querySelector(".rules8").style.display="none";
	document.querySelector(".rules9").style.display="none";

}
function rules5(){
	document.querySelector(".section_left").style.display="none";
	document.querySelector(".white_block").style.display="none";
	document.querySelector(".rules3").style.display="none";
	document.querySelector(".rules4").style.display="none";
	document.querySelector(".rules5").style.display="block";
	document.querySelector(".rules6").style.display="none";
	document.querySelector(".rules7").style.display="none";
	document.querySelector(".rules8").style.display="none";
	document.querySelector(".rules9").style.display="none";

}
function rules6(){
	document.querySelector(".section_left").style.display="none";
	document.querySelector(".white_block").style.display="none";
	document.querySelector(".rules3").style.display="none";
	document.querySelector(".rules4").style.display="none";
	document.querySelector(".rules5").style.display="none";
	document.querySelector(".rules6").style.display="block";
	document.querySelector(".rules7").style.display="none";
	document.querySelector(".rules8").style.display="none";
	document.querySelector(".rules9").style.display="none";

}

function rules7(){
	document.querySelector(".section_left").style.display="none";
	document.querySelector(".white_block").style.display="none";
	document.querySelector(".rules3").style.display="none";
	document.querySelector(".rules4").style.display="none";
	document.querySelector(".rules5").style.display="none";
	document.querySelector(".rules6").style.display="none";
	document.querySelector(".rules7").style.display="block";
	document.querySelector(".rules8").style.display="none";
	document.querySelector(".rules9").style.display="none";
}
function rules8(){
	document.querySelector(".section_left").style.display="none";
	document.querySelector(".white_block").style.display="none";
	document.querySelector(".rules3").style.display="none";
	document.querySelector(".rules4").style.display="none";
	document.querySelector(".rules5").style.display="none";
	document.querySelector(".rules6").style.display="none";
	document.querySelector(".rules7").style.display="none";
	document.querySelector(".rules8").style.display="block";
	document.querySelector(".rules9").style.display="none";
}
function rules9(){
	document.querySelector(".section_left").style.display="none";
	document.querySelector(".white_block").style.display="none";
	document.querySelector(".rules3").style.display="none";
	document.querySelector(".rules4").style.display="none";
	document.querySelector(".rules5").style.display="none";
	document.querySelector(".rules6").style.display="none";
	document.querySelector(".rules7").style.display="none";
	document.querySelector(".rules8").style.display="none";
	document.querySelector(".rules9").style.display="block";
}
//Document is the DOM can be accessed in the console with document.window.
// Tree is from the top, html, body, p etc.

//Problem: User interaction does not provide the correct results.
//Solution: Add interactivity so the user can manage daily tasks.
//Break things down into smaller steps and take each step at a time.


//Event handling, uder interaction is what starts the code execution.

var taskInput=document.getElementById("new-task");//Add a new task.
var addButton=document.getElementsByTagName("button")[0];//first button
var incompleteTaskHolder=document.getElementById("incomplete-tasks");//ul of #incomplete-tasks
var completedTasksHolder=document.getElementById("completed-tasks");//completed-tasks


//New task list item
var createNewTaskElement=function(taskString){

	var listItem=document.createElement("li");

	//input (checkbox)
	var checkBox=document.createElement("input");//checkbx
	//label
	var label=document.createElement("label");//label
	//input (text)
	var editInput=document.createElement("input");//text
	//button.edit
	var editButton=document.createElement("button");//edit button

	//button.delete
	var deleteButton=document.createElement("button");//delete button

	label.innerText=taskString;

	//Each elements, needs appending
	checkBox.type="checkbox";
	editInput.type="text";

	editButton.innerText="Edit";//innerText encodes special characters, HTML does not.
	editButton.className="edit";
	deleteButton.innerText="Delete";
	deleteButton.className="delete";



	//and appending.
	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);
	return listItem;
}



var addTask=function(){
	console.log("Add Task...");
	//Create a new list item with the text from the #new-task:
	var listItem=createNewTaskElement(taskInput.value);

	//Append listItem to incompleteTaskHolder
	incompleteTaskHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);

	taskInput.value="";

}

//Edit an existing task.

var editTask=function(){
console.log("Edit Task...");
console.log("Change 'edit' to 'save'");


var listItem=this.parentNode;

var editInput=listItem.querySelector('input[type=text]');
var label=listItem.querySelector("label");
var containsClass=listItem.classList.contains("editMode");
		//If class of the parent is .editmode
		if(containsClass){

		//switch to .editmode
		//label becomes the inputs value.
			label.innerText=editInput.value;
		}else{
			editInput.value=label.innerText;
		}

		//toggle .editmode on the parent.
		listItem.classList.toggle("editMode");
}




//Delete task.
var deleteTask=function(){
		console.log("Delete Task...");

		var listItem=this.parentNode;
		var ul=listItem.parentNode;
		//Remove the parent list item from the ul.
		ul.removeChild(listItem);

}


//Mark task completed
var taskCompleted=function(){
		console.log("Complete Task...");
	
	//Append the task list item to the #completed-tasks
	var listItem=this.parentNode;
	completedTasksHolder.appendChild(listItem);
				bindTaskEvents(listItem, taskIncomplete);

}


var taskIncomplete=function(){
		console.log("Incomplete Task...");
//Mark task as incomplete.
	//When the checkbox is unchecked
		//Append the task list item to the #incomplete-tasks.
		var listItem=this.parentNode;
	incompleteTaskHolder.appendChild(listItem);
			bindTaskEvents(listItem,taskCompleted);
}



var ajaxRequest=function(){
	console.log("AJAX Request");
}

//The glue to hold it all together.


//Set the click handler to the addTask function.
addButton.onclick=addTask;
addButton.addEventListener("click",addTask);
addButton.addEventListener("click",ajaxRequest);


var bindTaskEvents=function(taskListItem,checkBoxEventHandler){
	console.log("bind list item events");
//select ListItems children
	var checkBox=taskListItem.querySelector("input[type=checkbox]");
	var editButton=taskListItem.querySelector("button.edit");
	var deleteButton=taskListItem.querySelector("button.delete");


			//Bind editTask to edit button.
			editButton.onclick=editTask;
			//Bind deleteTask to delete button.
			deleteButton.onclick=deleteTask;
			//Bind taskCompleted to checkBoxEventHandler.
			checkBox.onchange=checkBoxEventHandler;
}

//cycle over incompleteTaskHolder ul list items
	//for each list item
	for (var i=0; i<incompleteTaskHolder.children.length;i++){

		//bind events to list items chldren(tasksCompleted)
		bindTaskEvents(incompleteTaskHolder.children[i],taskCompleted);
	}




//cycle over completedTasksHolder ul list items
	for (var i=0; i<completedTasksHolder.children.length;i++){
	//bind events to list items chldren(tasksIncompleted)
		bindTaskEvents(completedTasksHolder.children[i],taskIncomplete);
	}




// Issues with usabiliy don't get seen until they are in front of a human tester.

//prevent creation of empty tasks.

//Shange edit to save when you are in edit mode.

$("[data-fancybox]").fancybox({
	loop: true,
  buttons: [
        "zoom",
        "fullScreen",
        "close"
    ],
});