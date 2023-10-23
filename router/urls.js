const express = require('express')
const router = express.Router()


router.get('/', async  (req, res) =>{
    res.status(200).render('home')

})

router.get('/get-Date', (req, res) => {
    res.status(200).render('getData')
})


router.get('*', (req, res) =>{
    res.status(404).send('Not found')
})


module.exports = router;