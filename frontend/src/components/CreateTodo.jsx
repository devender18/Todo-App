import {useState} from 'react';

export function CreateTodo(){

    // state
    const [title, setTitle]  = useState("");
    const [description, setDescription] = useState("");

    return <div>
        <input type="text" placeholder="title" onChange={function(e){
            const value = e.target.value;
            setTitle(value)
            console.log("value -->",value);
        }} /><br /><br />

        <input type="text" placeholder="description" onChange={function(e){
            const value = e.target.value;
            setDescription(value);
        }}/><br /> <br />

        <button onClick = {()=>{
            
            fetch("http://localhost:3000/todo",{
                method : "POST",
                body : JSON.stringify({
                    title : title,
                    description : description,
                    completed : false
                }),
                headers : {
                    "Content-Type": "application/json",
                    // "Content-Length": JSON.stringify({
                    //     title: title,
                    //     description: description,
                    //     completed : false
                    // }).length
                }
            })
                .then(async function(res){
                    const json = await res.json();
                    alert("Todo added");
                })
        }}>Add a todo</button>
    </div>
}
  