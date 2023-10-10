// Imports
const session = require('express-session')
const express = require('express')
const Producto = require("./models/Producto")
const connectDatabase = require("./db")
const User = require("./models/User")

// Constants
const PORT = 3000
const app = express()

// Middlewares
app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({ extended: true }))

// Session
const sessionParams = {
  secret: 'KeySecret',
  resave: false,
  saveUnitialized: true,
  cookie: { secure: false }
}
app.use(session(sessionParams))

// functions
const crearProducto = (name, price, description, stock) => {
  connectDatabase((_response) => {
    console.log("connection stablished")
    const newProduct = new Producto({ name, price, description, stock })
    newProduct.save()
      .then((_productoGuardado) => {
        console.log("Se guardo el producto")
      })
  })
}

// Endpoints
app.get("/", (_req,res)=>{
  res.sendFile(__dirname + "/public/home/index.html")
})

app.get("/login", (_req,res)=>{
  res.sendFile(__dirname + "/public/login/index.html")
})

app.post("/login", (req,res)=>{
  const {username, password} = req.body
  res.send(username,password)
})

app.get('/register', (_req, res) =>{
    res.sendFile(__dirname + '/public/register/index.html')
})

app.post('/register', (req, _res) =>{
    const {username, password} = req.body
})

// Server Listener
app.listen(PORT, console.log(`server on ${PORT}`))
