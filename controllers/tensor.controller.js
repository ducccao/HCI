const path = require("path");
const express = require("express");

const tensorCtrl = {
  getMetaData: (req, res) => {
    console.log("meta");
    res.sendFile(path.join(__dirname, "../tensorflow/metadata.json"));
  },
  getModel: (req, res) => {
    console.log("model");
    res.sendFile(path.join(__dirname, "../tensorflow/model.json"));
  },
};

module.exports = tensorCtrl;
