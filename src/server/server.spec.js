import { addNewTask, updateTask } from "./server";


(async function myFunc(){
    await addNewTask({
        name:"My task",
        id:"12345"
    })

    await updateTask({
        name:"My task - updated!!!",
        id:"12345"
    })

}) ()