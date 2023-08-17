import React, { useState } from "react";
import ToDoList from "./ToDoList";
const App = () => {
    const[inputList , setInputList]= useState("") 
    const[Item,setItem] = useState([]);
    const itemEvent = (event) =>{
        setInputList(event.target.value);
    };

    const listOfItems =() =>{
        setItem ((olditem) =>{
            return [...olditem,inputList]; 

        });
        setInputList('');
    };

    const deleteItem =(id) =>{
        setItem((olditem) => {
            return olditem.filter((arrElem,index ) =>{
                    return index !== id;
            })
        })
    };
    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1> ToDo List</h1>
                    <br />
                    <input type="text" placeholder="Add a item" 
                    value={inputList}
                    onChange={itemEvent} />
                    <button onClick={listOfItems}> + </button>

                    <ol>
                         {Item.map((itemval ,index) => {
                            return <ToDoList text={itemval}
                            key={index}
                            id={index}
                            onSelect={deleteItem} />;
                         })}
                    </ol>
                </div>
            </div>
        </>
    );
};

export default App;
