const DB_NAME = 'test'
const DB_PORT = 27017
const DB_ADDRESS = '172.17.0.2'
const URL_CONNECTION = `mongodb://${DB_ADDRESS}:${DB_PORT}/${DB_NAME}`

const mongoose = require('mongoose')

const connectDatabase = (callback) => mongoose.connect(URL_CONNECTION,{
  useNewUrlParser: true,
useUnifiedTopology: true
})
.then(
    (response) => {
      callback(response)
    }
  )
.catch(
    (error) => {
    console.log(error)
    }
  )

module.exports = connectDatabase
/*
export const crearProducto= async (name,price, description, stock)=>{

mongoose.connect(URL_CONNECTION,{
  useNewUrlParser: true,
useUnifiedTopology: true
})
.then(
    (_response) => {
      console.log("connection stablished")
      const newProduct= new Producto({name,price,description,stock})
      newProduct.save()
        .then((_productoGuardado)=>{
            console.log("Se guardo el producto")
          })
    }
  )
.catch(
    (error) => {
    console.log(error)
    }
  )
}
*/
