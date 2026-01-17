import { Router } from "express"

const router: Router = Router()

//Routing

//Autenticación y registro
router.post('/auth/register', (req, res) => {
    console.log('Desde register')
})

export default router