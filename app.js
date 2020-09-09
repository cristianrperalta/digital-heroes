// requerimos express
const express = require('express')
// instanciamos express
const app = express()
// modulo nativo de node para trabajar con rutas de archivos
const path = require('path')

app.get('/', function(req, res){
    let txt1 = `Ni Superman, Iron Man o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y hueso que encontrarás en este sitio. 
    Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos. 
    Recuerda: ¡nunca pares de creer en ti`
    res.send(txt1)
})


app.get('/heroes', function(req, res){
    let rutaFile = path.resolve('./heroes/heroes.json')
    res.sendFile(rutaFile)
})

app.get('*', function(req, res){
    res.send('Not found')
})

app.listen(3000)
