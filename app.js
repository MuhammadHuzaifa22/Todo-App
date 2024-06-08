// var firstname = "Arqam";
// if(firstname === "Ali"){
//     document.write("Hello Ali")
// }else{
//     document.write("You Are Not Ali");
// }


// var greeting;
// var hour = 19;
// if(hour < 18){
//   document.write( greeting = "Good Day")
// }else{
//  document.write(greeting = "Good Evening");   
// }


// var num1 = +prompt("Enter First Number");
// var num2 = +prompt("Enter First Number");
// if(num1 > num2){
//     console.log(num1)
// }else if (num1 = num2){
//     console.log("Num1 And Num2 Are Equal");
// }else{
//     console.log(num2);
// }



// const arr = ['Apple','Mango','PineApple','Banana','Peach']
// const div = document.querySelector("#div");
// for( i=0;i < arr.length;i++){
//     console.log(arr[i]);
//     div.innerHTML +=`<p>${arr.length[i]}</p>`
// }


function renderTodo(){
    ol.innerHTML = '';
    for(let i = 0;i < arr.length ; i++) {
        ol.innerHTML +=`<li>${arr[i]}
        <button onclick="deleteTodo()" id="del">Delete</button>
        <button onclick="editTodo()" id="edit">Edit</button>
        </li>`
    }
}



const ol = document.querySelector('ol')
const todo = document.querySelector('#todo');
const arr= [];
function AddTodo(){
arr.push(todo.value);
todo.value = '';
renderTodo()
}

function deleteTodo(index){
    arr.splice(index,1)
    renderTodo()
}
function editTodo(index){
    const updatedVal = prompt("Enter Updated Value")
    arr.splice(index,1,updatedVal)
    renderTodo()
    const ed = document.querySelector('#edit');
    ed.innerHTML ='Edited'
}


// Pushing it