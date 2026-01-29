import { Router } from "express"
import { body } from "express-validator"
import { createAccount } from "./handlers";

const router: Router = Router()

//Routing

//Autenticación y registro
router.post('/auth/register',
    body('handle').notEmpty().withMessage('Handle de usuario no valido'),
    body('name').notEmpty().withMessage('Nombre de usuario no valido'),
    body('email').isEmail().withMessage('Email de usuario no valido'),
    body('password').isLength({ min: 8 }).withMessage('Contraseña de usuario no valido, son mínimo 8 caracteres'),
    createAccount)

export default router