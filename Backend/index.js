const express = require('express')
const app = express();
const {createTodo, updateTodo} = require("./type");
const { Todo } = require('./db/db');
const cors = require('cors');

const port = 3000;

app.use(express.json());
app.use(cors({}));

// add todo
app.post('/todo',async (req, res)=>{

    const response = createTodo.safeParse(req.body);

    if (!response.success){
        res.status(411).json({
            msg : "Invalid inputs"
        })
        return;
    }

    const title = req.body.title;
    const description = req.body.description;
    const completed = req.body.completed;

    await Todo.create({
        title,
        description,
        completed
    })

    res.json({
        msg : "Todo created!"
    })

})

// get todos
app.get('/todos', async (req, res)=>{

    const allTodos = await Todo.find({})

    res.json({
        todos : allTodos
    })

})


// mark a todo done
app.put('/todo', async (req,res)=>{

    const id = req.body.id;
    console.log("type of id --> ",typeof(id))
    const response = updateTodo.safeParse(req.body);

    if(!response.success){
        res.status(411).json({
            msg : "Invalid inputs"
        })
        return;
    }

    await Todo.updateOne({
        _id : id
    },
    {
        completed : true
    })


    res.json({
        msg : "Todo updated!"
    })


})



app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`);
})