const express = require('express');
const {
    getAllUser,
    singup
} = require('../controllers/user-controller');

const router = express.Router();
router.get("/", getAllUser);
router.post("/singup", singup);

module.exports = router;