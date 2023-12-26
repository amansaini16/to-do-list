let todolist=[{item:'',
duedate:''}];
displayelements();
function addtodo(){
    let inputelement=document.querySelector('#todo-input');
    let dateelement=document.querySelector('#todo-date');
let todoitem =inputelement.value;
let tododate= dateelement.value;
todolist.push({item:todoitem,duedate:tododate});
inputelement.value='';
dateelement.value='';
displayelements();
}
function displayelements(){
   let containerelement= document.querySelector('.todo-container');
  let newhtml='';
  for(let i=1;i<todolist.length;i++){
    let item=todolist[i].item;
    let duedate=todolist[i].duedate;
    newhtml+=` 
    <span>${item}</span>
    <span>${duedate}</span>
    <button class='btn-delete'onclick="todolist.splice(${i},1);displayelements(); ">Delete</button>
    `;
  }
containerelement.innerHTML=newhtml;
}

