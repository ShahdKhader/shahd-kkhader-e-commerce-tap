const express = require('express');
const { Model } = require('sequelize');
const router = express.Router();

router.get("/", (req, res, next) => {
    res.send('shahd');
})




module.exports = router;