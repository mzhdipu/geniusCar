const express = require ('express')
const cors = require ('cors')
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express()
const port = process.env.PORT || 5000


// Middelware Setup
app.use(cors());
app.use(express.json());



const uri = "mongodb+srv://geniusCar:vGUBB4qWdvgyLyUF@cluster0.yxzgo8g.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function dbConnect() {
  try {
    
    await client.connect();
    console.log(`Database Connected`)

  } catch (error) {
    console.log(`${error.name} : ${error.message}` )
  }
}
dbConnect().catch(console.dir);

/*
DATABSE 
===============================================
*/
// const geniusCarDatabase = client.db('').collection('')


/*
POST 
===============================================
*/
// app.post('', (req, res)=>{
//     try{
        
//         res.send({
//             success : true, 
//             message : ``
//         })
//     }
//     catch (error){
//         res.send({
//             success : false,
//             error : error.message
//         })
//     }
// })





app.get('/', (req, res) =>{
    res.send(`Genius Car Server Is Running`)
})

app.listen(port, ()=>{
    console.log(`Server Running Port : ${port}`)
})