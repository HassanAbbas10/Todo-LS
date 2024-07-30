
import React from "react";
const Home = () => {
  const [todos, setTodos] = React.useState([]);
  // const inputHandler = (e) => setTodos((e) => e.target.value);
  const handleClick = () =>{
  alert("Button Clicked")
  }
  return (
    <>
      <div className="h-screen w-full">
        <div>
          <h2 className="text-white mb-10 sm:text-3xl text-2xl flex items-center justify-center font-sans">
            Manage your Todo App
          </h2>

          <div className="flex flex-row items-center justify-center">
            <input
              className=" md:w-[50rem] sm:w-[30rem] w-[15rem] sm:mx-10 mx-4  p-3 bg-transparent bg-slate-300 rounded-3xl placeholder:text-slate-500 italic "
              placeholder="Write Todos"
              // value={todos}
            />
            <button 
            onClick={handleClick}
            className="p-4 px-5 rounded-full text-sm italic text-slate-700 bg-green-400">
              Add Task
            </button>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-center flex-col">
          
          {/* {"TODO ITEMS"} */}
          <div className="pl-2 justify-between my-3 w-[22rem] sm:w-[30rem] md:w-[60rem] rounded-2xl bg-red-500 border flex border-indigo-700">
           
            <div className="gap-1 text-slate-300 p-[0.75rem] flex flex-row">
              <input type="checkbox"/>
              <p>THis is our first todo bois</p>
            </div>
            
            <div className="flex items-center gap-3 mr-4">
            <button className="p-1.5 px-2 text-sm border rounded-lg bg-white">✅</button>
            <button className="p-1.5 px-2 text-sm border rounded-lg bg-white">🤞</button>
            </div>
          </div>
          {/* {"TODO ITEMS"} */}
          
        </div>
      </div>
    </>
  );
};

export default Home;
