
var todoList = {

    todos: [],

    addTodos: function(todoText){
        this.todos.push({
            todoText: todoText,
            completed: false
        });

    },

    changeTodos: function(position, todoText){
        this.todos[position].todoText = todoText;

    },

    deleteTodos: function (position){
        this.todos.splice(position, 1);
  
    },

    toggleCompleted: function(position){
        //grab object from array of objects using index position
        var todo = this.todos[position];
        //grab property of the selected object and flip its switch
        todo.completed = !todo.completed;

    },

    toggleAll: function(){
        var totalTodos = this.todos.length;
        var compledTodos = 0;
        //Get number of completed todos
        // for(var i = 0; i < totalTodos; i++){
        //     if(this.todos[i].completed === true){
        //         compledTodos++;
        //     }
        // }
        this.todos.forEach(function(todo){
            if(todo.completed === true){
                compledTodos++;
            }
        });

        this.todos.forEach(function(todo){
            if(compledTodos === totalTodos){
                todo.completed = false;
            }else{
                todo.completed = true;
            }
        });
 
    }
};


//Handler Object to handle different clicks with methods in the object
var handlers = {

    addTodos: function(){
        var addTodoTextInput = document.getElementById("addTodoTextInput"); //grab text field
        todoList.addTodos(addTodoTextInput.value); //get the input text in text field
        addTodoTextInput.value = '';  //clear the input field
        
        //show in UI
        showView.displayTodosView();
      
     
    },
   
    changeTodos: function(){
        var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
        var changeTodoTextInput = document.getElementById("changeTodoTextInput");
        todoList.changeTodos(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.valueAsNumber = '';
        changeTodoTextInput.value = '';

         //show in UI
         showView.displayTodosView();
        

    },

    deleteTodos: function(position){
       // var deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput");
        //todoList.deleteTodos(deleteTodoPositionInput.valueAsNumber);
        // deleteTodoPositionInput.value = ''; 
        todoList.deleteTodos(position);
         //show in UI
         showView.displayTodosView();
    
    },

    toggleCompleted: function(){
        var toggleCompletedInput = document.getElementById("toggleCompletedInput");
        todoList.toggleCompleted(toggleCompletedInput.valueAsNumber);
        toggleCompletedInput = '';

         //show in UI
         showView.displayTodosView();
    },

    toggleAll: function(){
        todoList.toggleAll();

         //show in UI
         showView.displayTodosView();
        //deleteButtonObject.deleteButtonView();
    }

};


//create new object to display the todos in the DOM
var showView = {

    displayTodosView: function(){

    var todosUl = document.querySelector('ul');
        todosUl.innerHTML = '';

        //this refers to the showView Object
        //but the call back function does not recorgnize it unless passed in as a param
        //forEach(callback, this)

        todoList.todos.forEach(function(todo, position){
            var todoLi = document.createElement('li');
       
            var todoTextWithCompletion = '';

        if(todo.completed === true){
            todoTextWithCompletion = '(x)' + todo.todoText;
        }else{
            todoTextWithCompletion = '( )' + todo.todoText;
        }

            //need delete button for each todo (position[x])
            todoLi.id = position;  // sames as  todoLi.id = x in a for loop
            todoLi.textContent = todoTextWithCompletion;

            //Append createDeleteButton() to the todo li
            todosUl.appendChild(this.createDeleteButton());
            todosUl.appendChild(todoLi);
        }, this);  //forEach(callback, this)




    },
    //create the deleteButton on the fly and add it as a className
    createDeleteButton: function(){
        var deleteButton = document.createElement('button');
        //give button a text content/label
        deleteButton.textContent = 'Delete';
        //give it a class cos its reusable over id
        deleteButton.className = 'deleteButton';
        //console.log(deleteButton);
        return deleteButton;
    },

    //Use Event Delegation Pattern to listen to events on a single item clicked
    setUpEventListeners: function(){
        var todosUL = document.querySelector('ul');
        todosUL.addEventListener('click', function(event){
            //console.log(event.target.parentNode.id);
            // Get the element that was clicked on
            var elementClicked = event.target;

            //check if elemet clicked is a delete button
            if(elementClicked.className === 'deleteButton'){
                //Run handlers.deleteTodos() then get the parent which is an li and use its id
                //turn li's id , which is a string into number with parseInt()
                handlers.deleteTodos(parseInt(elementClicked.parentNode.id)); 
            }
 
        });
    }
   
};




showView.setUpEventListeners();



/*
Refactored to forEach
        for(var x = 0; x < todoList.todos.length; x++){

                var todoLi = document.createElement('li');
                var todo = todoList.todos[x];
                //var todo = this.todoList.todos;
                var todoTextWithCompletion = '';

            if(todo.completed === true){
                todoTextWithCompletion = '(x)' + todo.todoText;
            }else{
                todoTextWithCompletion = '( )' + todo.todoText;
            }

                //need delete button for each todo (position[x])
                todoLi.id = x;
                todoLi.textContent = todoTextWithCompletion;

                //Append createDeleteButton() to the todo li
                todosUl.appendChild(this.createDeleteButton());
                todosUl.appendChild(todoLi);
        }
*/

//DOM - addEventListener

// var displayTodosButton = document.getElementById("displaytodosbutton");
// var toggleAllTodosButton = document.getElementById("toggleAlltodosbutton");


// displayTodosButton.addEventListener('click', function(){
//     todoList.displayTodos();
// });

// toggleAllTodosButton.addEventListener('click', function(){
//     todoList.toggleAll();
// });



// var userInputField = document.getElementById("userInput");

// var addTodDosButton = document.getElementById("addtodosbutton");

// addTodDosButton.addEventListener('click', function(){
//     todoList.addTodos(userInputField);
// });


//todoList.toggleCompleted(0);
//todoList.toggleCompleted(1);
//todoList.toggleCompleted(2);
//todoList.displayTodos();
//todoList.toggleAll();

//todoList.toggleAll();








