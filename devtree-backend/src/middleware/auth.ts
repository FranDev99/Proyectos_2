import type { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import User, { UserType } from '../models/User'

declare global {
    namespace Express {
        interface Request {
            user?: UserType
        }
    }
}

export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
    const authorization = req.headers.authorization

    if (!authorization) {
        const error = new Error('No autorizado')
        return res.status(401).json({ error: error.message })
    }

    const [, token] = authorization.split(' ')

    if (!token) {
        const error = new Error('No autorizado')
        return res.status(401).json({ error: error.message })
    }

    try {
        const result = jwt.verify(token, process.env.JWT_SECRET)
        if (typeof result === 'object' && result.id) {
            const user = await User.findById(result.id).select('-password')
            if (!user) {
                const error = new Error('El usuario no existe')
                return res.status(404).json({ error: error.message })
            }
            req.user = user
            next()
        }
    } catch (error) {
        res.status(500).json({ error: 'Token no valido' })
    }
}