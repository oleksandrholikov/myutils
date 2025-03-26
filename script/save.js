console.log("SAVE");
const buttonSave = document.querySelector('#button-save');
let toDoList = [];
let doneList = [];
// let toDoList = {
//     id: 0,
//     title: "",
//     text: ''
// };
// let doneList = {
//     id: 0,
//     title: "",
//     text: ''
// }
function addToDoListItem(){
    document.querySelectorAll('.mytask-item').forEach((el)=>{
        toDoList.push({
            id: el.dataset.task_id,
            title: el.dataset.task_title,
            text: el.dataset.task_text
        })
    })
    console.log(toDoList);
    if(toDoList.length>0){
        return true;
    }
    return false;
    
}
function addDoneList(){
    document.querySelectorAll('.haveDone-item').forEach((el)=>{
        doneList.push({
            id: el.dataset.task_id,
            title: el.dataset.done_title,
            text: el.dataset.done_text
        })
    })
    console.log(doneList);
    if(doneList.length>0){
        return true;
    }
    return false;
    
}
async function saveToDoList() {
    await fetch ('../app/saveDoList.php', {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(toDoList)
    })
    .then(response => response.json())
    .then(result=>{
        alert(`${result['status']}`);
    })
    .catch(error=>{
        console.error("Error", error)
    });
    toDoList = [];
    return true
}

async function saveDoneList() {
    await fetch ('../app/saveDoneList.php', {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(doneList)
    })
    .then(response => response.json())
    .then(result=>{
        alert(`${result['status']}`);
    })
    .catch(error=>{
        console.error("Error", error)
    });
    toDoList = [];
    return true
}

buttonSave.addEventListener('click', ()=>{
    console.log('click')
    if(addToDoListItem()){
        // console.log('true');
        saveToDoList();
    }
    if(addDoneList()){
        saveDoneList();
    }

    
})
