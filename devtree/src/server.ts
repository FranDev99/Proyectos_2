// const express = require('express') // CJS Common Js
import express, { Application } from 'express' // ESM ECMAScript modules
import 'dotenv/config'
import router from './router'
import { connectDB } from './config/db'

const app: Application = express()

connectDB()

app.use('/', router)

export default app