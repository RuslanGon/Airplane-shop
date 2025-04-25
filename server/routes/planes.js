import express from 'express'

const router = express.Router()

router.get('/', async (req, res) => {
res.send('Get all planes')
})

router.get('/:id', async (req, res) => {
    res.send('Get singl plane')
})

router.post('/', async (req, res) => {
    res.send('Create plane')
})


export default router