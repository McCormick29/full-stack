import { MongoClient } from 'mongodb'

import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import path from 'path'

import { connectDB } from './connect-db'
import './initialize-db'
import { authenticationRoute } from './authenticate'

let port = process.env.PORT || 7777
let app = express()

app.listen(port,console.log("server listening on port", port))

app.get('/',(req,res)=>{
    res.send("Hello world!!!")
})

app.use(
    cors(),
    express.urlencoded({extended:true}),
    express.json()
)

// app.get('/user/:id',(req,res)=>{
//     let user = defaultState.users.find(user=>user.id === req.params.id);
//     if (!user) {
//         res.status(500).send();
//     } else {
//         res.json(user);
//     }
// });

authenticationRoute(app)

if (process.env.NODE_ENV == 'production') {
    app.use(express.static(path.resolve(__dirname,`../../dist`)))
    app.get('/', (req,res)=>{
        res.sendFile(path.resolve('index.html'))
    })
}

// export const addNewTask = async task=>{
//     let db = await connectDB()
//     let collection = db.collection('tasks')
//     await collection.insertOne(task)
// }

// export const updateTask = async task=>{
//     let { id, group, isComplete, name} = task
//     let db = await connectDB()
//     let collection = db.collection('tasks')

//     if (group) {
//         await collection.updateOne({id}, {$set:{group}})
//     }

//     if (name) {
//         await collection.updateOne({id}, {$set:{name}})
//     }

//     if (isComplete !== undefined) {
//         await collection.updateOne({id}, {$set:{isComplete}})
//     }
// }

app.post(`/task/new`, async (req,res)=>{
    // let task = req.body.task
    await addNewTask(req.body.task)
    res.status(200).send()
})

app.post(`/task/update`, async (req,res)=>{
    let db = await connectDB();
    // let task = req.body.task
    await updateTask(req.body.task)
    res.status(200).send()
})

app.post(`/user/create`, async (req,res)=>{
    let db = await connectDB()
    let collection = db.collection('users')
    await collection.insertOne(users)
})