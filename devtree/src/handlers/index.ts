import type { Request, Response } from 'express'
import User from "../models/User"
import { hashPassword } from '../utils/auth'

export const createAccount = async (req: Request, res: Response) => {

    const { email, password } = req.body || {}

    const userExists = await User.findOne({ email })
    if (userExists) {
        const error = new Error('El usuario ya esta registrado')
        return res.status(409).json({ error: error.message })
    }

    await User.create(req.body)
    hashPassword(password)
    res.status(201).send('Registro exitoso')
}