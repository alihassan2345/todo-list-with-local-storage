var getfilter = document.getElementById("filter");
var getinput = document.getElementById("addtodo");
var getdiv = document.getElementById("heretodo");
var getsearch = document.getElementById("todosearch");

var alltodo = JSON.parse(localStorage.getItem("todo")) || [];

function addtoodo() {
  if (getinput.value == ""){
    alert("Please enter a todo item.");
    return;
  }else{
  alltodo.push(getinput.value);
  localStorage.setItem("todo", JSON.stringify(alltodo));
  getinput.value = "";
  displayTodos();
  }
}

function displayTodos() {
  getdiv.innerHTML = ""; // Clear the current list

  alltodo.forEach(function (item, index) {
    getdiv.innerHTML += `
      <li style="list-style:none; margin:10px 0; padding:10px; background:#f2f2f2; border-radius:6px;">
        ${item}
        <span style="float:right;">
          <button onclick="deleteTodo(${index})" style="margin-right:6px; padding:4px 10px; background:red; color:white; border:none; border-radius:4px;">Delete</button>
          <button onclick="editre(this, ${index})" style="padding:4px 10px; background:blue; color:white; border:none; border-radius:4px;">Edit</button>
        </span>
      </li>`;
  });
}

function deleteTodo(index) {
  alltodo.splice(index, 1); // remove from array
  localStorage.setItem("todo", JSON.stringify(alltodo)); // update localStorage
  displayTodos(); // refresh
}

function editre(e , index) {
  var newTodo = prompt("Edit your todo...", alltodo[index]);
  if (newTodo !== null) {
    alltodo[index] = newTodo;
    localStorage.setItem("todo", JSON.stringify(alltodo));
    displayTodos();
  }
}

function clraeall(){
  localStorage.clear();
  alltodo = [];
  displayTodos();
}

// Initial call to display todos if present
displayTodos();
