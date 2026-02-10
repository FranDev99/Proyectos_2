// const express = require('express') // CJS Common Js
import express, { Application } from 'express' // ESM ECMAScript modules
import cors from 'cors'
import 'dotenv/config'
import router from './router'
import { connectDB } from './config/db'
import { corsConfig } from './config/cors'

//conexión a la base de datos
connectDB()

const app: Application = express()

//cors
app.use(cors(corsConfig))

//Leer datos del formulario
app.use(express.json())

app.use('/', router)

export default app