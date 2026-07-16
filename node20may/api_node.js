require('dotenv').config()
const express = require('express');
//const Client = require('mongodb').MongoClient; //Sólo va a utlizar un pedacito de la dependencia
const {MongoClient} = require('mongodb') //Traer mongoClient del driver y lo guardamos en la variable con el mismo nombre, se llama deconstruir o desestructurar, es lo mismo de arribita
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/productos', async (req, res) => {

    const url = process.env.MONGODB_URI;
    const dbName = 'prueba107';

    let client;
    try {
        client = new MongoClient(url);
        await client.connect();
        
        const db = client.db(dbName);
        const productos = await db.collection('productos').find({}).toArray();
        
        res.json(productos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    } finally {
        client?.close();
    }
});

app.get('/productos/:id', async (req, res) => {
    const url = process.env.MONGODB_URI;
    const dbName = 'prueba107';
   let client;
   try {
       client = new MongoClient(url);
       await client.connect();

      
       const db = client.db(dbName);
       const producto = await db.collection('productos').findOne(
           {"consecutivo": parseInt(req.params.id)}
           
       );
      
       if (!producto) {
           return res.status(404).json({ mensaje: 'Producto no encontrado' });
       }
      
       res.json(producto);
   } catch (err) {
       res.status(500).json({ error: err.message });
   } finally {
       client?.close();
   }
});


app.post('/productos/', async (req, res) => {
    const url = process.env.MONGODB_URI;
    const dbName = 'prueba107';
   let client;
   try {
       client = new MongoClient(url);
       await client.connect();
       const dbName = 'prueba107';
       let productoNuevo = {
           consecutivo: parseInt(req.body.consecutivo),
           nombre: req.body.nombre,
           precio: parseInt(req.body.precio)
       }
       const db = client.db(dbName);
       const productos = await db.collection('productos').insertOne(productoNuevo);
      
       res.json(productos); 
   } catch (err) {
       res.status(500).json({ error: err.message });
   } finally {
       client?.close();
   }
});

app.delete('/productos/:id', async (req, res) => {
    const url = process.env.MONGODB_URI;
    const dbName = 'prueba107';
   let client;
   try {
       client = new MongoClient(url);
       await client.connect();

      
       const db = client.db(dbName);
       const producto = await db.collection('productos').deleteOne(
           {"consecutivo": parseInt(req.params.id)}
       );
      
       if (!producto) {
           return res.status(404).json({ mensaje: 'Producto no encontrado' });
       }
      
       res.json(producto);
   } catch (err) {
       res.status(500).json({ error: err.message });
   } finally {
       client?.close();
   }
});

app.put('/productos/:id', async (req, res) => {
    const url = process.env.MONGODB_URI;
    const dbName = 'prueba107';
   let client;
   try {
       client = new MongoClient(url);
       await client.connect();
       const dbName = 'prueba107';
       let productoNuevo = {
           consecutivo: parseInt(req.body.consecutivo),
           nombre: req.body.nombre,
           precio: parseInt(req.body.precio)
       }
       const db = client.db(dbName);
      
       const producto = await db.collection('productos').updateOne(
        {"consecutivo": parseInt(req.params.id)},
        {$set: productoNuevo}
        );
      
       res.json(producto);  
   } catch (err) {
       res.status(500).json({ error: err.message });
   } finally {
       client?.close();
   }
});


app.listen(process.env.PORT); //Puerto


