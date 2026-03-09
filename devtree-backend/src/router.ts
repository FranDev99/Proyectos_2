import { Router } from "express"
import { body } from "express-validator"
import { createAccount, getUser, getUserByHandle, login, searchByHandle, updateProfile, uploadImage } from "./handlers";
import { handleInputErrors } from "./middleware/validation";
import { authenticate } from "./middleware/auth";

const router: Router = Router()

//Routing

//Autenticación y registro
router.post('/auth/register',
    body('handle').notEmpty().withMessage('Handle de usuario no valido'),
    body('name').notEmpty().withMessage('Nombre de usuario no valido'),
    body('email').isEmail().withMessage('Email de usuario no valido'),
    body('password').isLength({ min: 8 }).withMessage('Contraseña de usuario no valido, son mínimo 8 caracteres'),
    handleInputErrors,
    createAccount)

router.post('/auth/login',
    body('email').isEmail().withMessage('Email de usuario no valido'),
    body('password').isLength({ min: 8 }).withMessage('Contraseña de usuario no valido'),
    handleInputErrors,
    login
)

//Obtención de la información del usuario autenticado
router.get('/user', authenticate, getUser)

router.patch('/user',
    body('handle').notEmpty().withMessage('Handle de usuario no valido'),
    handleInputErrors, authenticate, updateProfile)

router.post('/user/image', authenticate, uploadImage)

router.get('/:handle', getUserByHandle)

router.post('/search', body('handle').notEmpty().withMessage('Handle de usuario no valido'), handleInputErrors, searchByHandle)

export default router