
var todoList = {

    todos: [],

    displayTodos: function (){
        if(this.todos.length === 0){
            console.log("Todos are empty");
        }else{
                for(var x = 0; x < this.todos.length; x++){
                    if(this.todos[x].completed === true){
                       console.log('(x)' + this.todos[x].todoText);
                    }else{
                       console.log('()' + this.todos[x].todoText);
                  }
            }
        }
   },

    addTodos: function(todoText){
        this.todos.push({
            todoText: todoText,
            completed: false
        });
     this.displayTodos();
    },

    changeTodos: function(position, todoText){
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },

    deleteTodos: function (position){
        this.todos.splice(position, 1);
        this.displayTodos();
    },

    toggleCompleted: function(position){
        //grab object from array of objects using index position
        var todo = this.todos[position];
        //grab property of the selected object and flip its switch
        todo.completed = !todo.completed;
        this.displayTodos();
    },

    toggleAll: function(){
        var totalTodos = this.todos.length;
        var compledTodos = 0;
        //Get number of completed todos
        for(var i = 0; i < totalTodos; i++){
            if(this.todos[i].completed === true){
                compledTodos++;
            }
        }
        if(compledTodos === totalTodos){
            //Make everything false
            for(var x = 0; x < totalTodos; x++){
                this.todos[x].completed = false;
            }
        }else{
            //Make everything true
            for(var x = 0; x < totalTodos; x++){
                this.todos[x].completed = true;
            }
        }

        this.displayTodos();
    }
};


//Handler Object to handle different clicks with methods in the object
var handlers = {
    displayTodos: function(){
        todoList.displayTodos();
    },

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

    deleteTodos: function(){
        var deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput");
        // var deleteTodoTextInput = document.getElementById("deleteTodoPositionInput")
        todoList.deleteTodos(deleteTodoPositionInput.valueAsNumber);
        deleteTodoPositionInput.value = '';

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
    }

};


//create new object
var showView = {

    displayTodosView: function(){
    var todosUl = document.querySelector('ul');
        todosUl.innerHTML = '';

        for(var x = 0; x < todoList.todos.length; x++){
                var todoLi = document.createElement('li');
                var todo = todoList.todos[x];

                var todoTextWithCompletion = '';

            if(todo.completed === true){
                todoTextWithCompletion = '(x)' + todo.todoText;
            }else{
                todoTextWithCompletion = '( )' + todo.todoText;
            }

                todoLi.textContent = todoTextWithCompletion;
                todosUl.appendChild(todoLi);
        
        }

    }
   
};





















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








