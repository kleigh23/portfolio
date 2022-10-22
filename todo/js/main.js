// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    remove(li)
    var div = this.parentElement;
    div.style.display = "none";
  }
}

const taskLeft = document.getElementById('task_count');
taskLeft.textContent = (0)

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    ev.target.classList.remove('activeTask')
    var todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.splice([0],1);
    length = todos.length;
    console.log(length);
    taskLeft.textContent = (length);
    localStorage.setItem('todos', JSON.stringify(todos));
  }
}, false);



// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  li.className = 'filter activeTask show'
  var inputValue = document.getElementById("new_task").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);

  var todos = JSON.parse(localStorage.getItem('todos')) || [];
  
  // store array in local storage
  
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
    todos.push(inputValue);
    length = todos.length;
    console.log(length);
    taskLeft.textContent = (length);
    // taskLeft.remove(zero);
    // taskLeft.appendChild(left);
  }
  document.getElementById("new_task").value = "";
  localStorage.setItem('todos', JSON.stringify(todos));

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}


// filter buttons
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filter");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}

function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("btnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}



// $scope.saved = localStorage.getItem('todos');
// $scope.todos = (localStorage.getItem('todos')!==null) ? JSON.parse($scope.saved) : [ {text: 'Learn AngularJS', done: false}, {text: 'Build an Angular app', done: false} ];