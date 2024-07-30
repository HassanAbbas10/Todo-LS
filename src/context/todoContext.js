import { createContext,useContext } from "react";

export const TodoContext = createContext({
    todos:[{
        id:Date.now(),
        desc:"learning React",
        completed:false

    },],
    addTodo:()=>{},
    updateTodo:(todo,id)=>{},
    delTodo:(id)=>{},
    completeTodo:(id)=>{},

   
})

export const useTodo = () => {return useContext(TodoContext);}

export const TodoProvider = TodoContext.Provider;
