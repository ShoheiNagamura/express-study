const express = require("express");
const router = express.Router();




router.get('/', (req, res) => {
    // console.log('ユーザーです')
    res.send('ユーザーです')
})

router.get('/info', (req, res) => {
    res.send('info画面です')
})


module.exports = router;