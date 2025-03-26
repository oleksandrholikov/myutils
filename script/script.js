const TaskList = document.querySelector('#mytask-list');
const DoneList = document.querySelector('#haveDone-list');
const NewTaskTitle = document.querySelector('#newtask-title');
const NewTaskDiscription = document.querySelector('#newtask-text');
const NewTaskButton = document.querySelector('#newtask-button');

let newTask = [];
let taskId = 0; 
const taskArr =[];
const doneArr = [];
let i =0;
console.log(DoneList);
function createNewTask(){    
    TaskList.insertAdjacentHTML('beforeend', 
        `<li class="mytask-item item" data-task_id="${newTask[2]}" id="${newTask[2]}" data-task_title="${newTask[0]}" data-task_text="${newTask[1]}">
                    <h3 class="mytask-item-title"># ${newTask[2] + 1} ${newTask[0]} </h3>
                    <div class="mytask-item-text text">
                        <p>${newTask[1]}</p>
                    </div>
                    <button type="button" class="mytask-button button" id="done" data-task_id="${taskId}">Done</button>
                    <button type="button" class="remove button" id="remove" data-task_id="${taskId}">Remove</button>
                </li>`
    )
    // delete newTask.title;
    // delete newTask.description;
    // delete newTask.taskId;
}
function writeDoneTasks(myId){
    for(;i<doneArr.length;i++){
        DoneList.insertAdjacentHTML('beforeend',
            `<li class="haveDone-item item" id="${doneArr[i][2]}" data-task_id="${doneArr[i][2]}" data-done_title="${doneArr[i][0]}" data-done_text="${doneArr[i][1]}">
                        <h3 class="haveDone-item-title"># ${doneArr[i][2] + 1} ${doneArr[i][0]} </h3>
                        <div class="haveDone-item-text text">
                            <p>${doneArr[i][1]}</p>
                        </div>
                        <button type="button" class="button remove" id="remove" data-task_id="${doneArr[i][2]}">Remove</button>                    
                    </li>`
        )
    }

}
function moveToDOne (doneTaskId){
    console.log('doneTaskId', doneTaskId);
    doneArr.push(taskArr[doneTaskId]);
    writeDoneTasks(doneTaskId);
    let myelement = document.getElementById(`${doneTaskId}`);
    console.log(myelement);
    myelement.remove();

}
function addNewTask(){
    newTask = [];       
    newTask[0] = NewTaskTitle.value;
    newTask[1]= NewTaskDiscription.value;
    newTask[2] = taskId;    
    taskArr.push(newTask);
    createNewTask()
    taskId ++; 
    console.log("TastArr",taskArr);
    NewTaskTitle.value = "";
    NewTaskDiscription.value = "";
}
function taskClickButton(event){
    if(event.target.classList.contains("mytask-button")){
        console.log("Done id", event.target.dataset.task_id);
        moveToDOne(event.target.dataset.task_id);
    }
    if(event.target.classList.contains("remove")){
        let myelement = document.getElementById(`${event.target.dataset.task_id}`);
        console.log(myelement);
        myelement.remove();
    }
    
    
}  

NewTaskButton.addEventListener('click', addNewTask);

TaskList.addEventListener('click', taskClickButton);
DoneList.addEventListener('click', taskClickButton)
console.log("Hello World");
