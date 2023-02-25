const express = require("express");
const router = express.Router();




router.get('/', (req, res) => {
    // console.log('ユーザーです')
    res.send('ユーザーです')
})

router.get('/info', (req, res) => {
    res.send('info画面です')
})

//ランダムなuser情報が取得できる状態
router.get('/:id', (req, res) => {
    res.send(`${req.params.id}のユーザーです`);
})



module.exports = router;