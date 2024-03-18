import { useEffect, useState } from "react";
import { createContext } from "react";
import { v4 as uuidv4 } from 'uuid';

export const TaskContextApi = createContext();


//to get the data 

let getLocalItems = () => {
    let lists = localStorage.getItem("lists")
    if(lists) {
        return JSON.parse(lists)
    }else {
        return []                 
    }
}


const TaskProvider = ({children}) => {


    let [task , setTask] = useState(getLocalItems())

    const addTask = (title , description , category) =>{
        setTask ([...task, {title , description , category , id: uuidv4()}])

    }

    let [state , setState] = useState({
        title:"",
        description:"",
        category:"",
    
    })


    //to add task in local storege 

    useEffect(() => {
        localStorage.setItem("lists", JSON.stringify(task) )

    },[task]) 


    let [Selective , setSelective] = useState ({
        SelectedCategory : "all"
    })

    let handleCategory = (e) =>{
        let {name , value} = e.target;
        setSelective({[name]: value})
        setTask(task)
    }

    let handleDelete = (id) => {
        let fileredItem = task.filter(item => item.id!==id )
        setTask(fileredItem)
    }

    let handleUpdate = (id) => {
        let editNote = task.filter(item => item.id!==id)
        let selectNote = task.find(item=>item.id==id)
        setState(selectNote)
        setTask(editNote)

    }


    return(
        <TaskContextApi.Provider  value={{state, setState  , addTask, task, Selective , handleCategory,handleDelete ,handleUpdate}}>
         
         {children}

        </TaskContextApi.Provider>

    )
}

export default TaskProvider;