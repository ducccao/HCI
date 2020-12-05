const express = require("express");
const router = express.Router();
const tensorCtrl = require("./../controllers/tensor.controller");

router.get("/metadata", tensorCtrl.getMetaData);
router.get("/model", tensorCtrl.getModel);

module.exports = router;
