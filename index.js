const express=require("express")

const app = express()

app.use(express.json())

app.get("/pets",(request,response)=>{
    const pets = [
        {nome:"Belinha", especie:"cachorro"},
        {nome:"Mingau", especie:"gato"},
    ]
    return response.status(200).json(pets)
})


app.listen(3001, () => {
    console.log('Running server')
})