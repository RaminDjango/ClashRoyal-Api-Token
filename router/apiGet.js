const express = require('express')
require('dotenv').config()
const router = express.Router()





router.post('/', async (req, res) =>{
    const apiToken = process.env.TOKEN;
    const {tagName} = req.body;
    const user = tagName;
    const response = await fetch(`https://api.clashroyale.com/v1/players/%23${user}`, {
        headers: {
            'Authorization': `Bearer ${apiToken}`
        }
    })
    const data = await response.json()
    res.render('getData', {data})
})



module.exports = router;