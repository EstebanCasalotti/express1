const express = require('express')
const app = express()
const port = 8080
const fs = require('fs');

app.get('/', (req, res)=>{
    res.send(`<h1>Hola</h1>`)

})

class Contenedor{
    constructor(title, price, id) {
        this.title = title;
        this.price = price;
        this.id = id; 
    }
    save = () =>{
        const id = {id: ''}
        fs.writeFileSync('productos.txt', id , (error)=>{
            if(error){
                console.log(`Error: ${error}`)
            }else{
                console.log('guardado')
            }
        } )
    }
    
    getAll = () =>{
        fs.readFile('productos.txt', 'utf-8',(error, data)=>{
            if(!error){
                console.log(data);
            }else{
                console.log(`Error: ${error}`);
            }
        });
    }
}
const contenedor = new Contenedor()
app.listen(port, ()=>{
    console.log(`puerto: http://localhost:${port}`)
})