import React, { useEffect, useState } from "react";

const URL = `https://teachablemachine.withgoogle.com/models/xSc0sQGVm/`;

let model, webcam, labelContainer, maxPredictions;

// Load the image model and setup the webcam
async function init() {
  const modelURL = URL + "model.json";
  const metadataURL = URL + "metadata.json";
  //  const modelURL = `http://localhost:1212/user/metadata`;
  //const metadataURL = `http://localhost:1212/user/model`;

  // load the model and metadata
  // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
  // or files from your local hard drive
  // Note: the pose library adds "tmImage" object to your window (window.tmImage)
  let tmImage;
  model = await tmImage.load(modelURL, metadataURL);
  maxPredictions = model.getTotalClasses();

  // Convenience function to setup a webcam
  const flip = true; // whether to flip the webcam
  webcam = new tmImage.Webcam(200, 200, flip); // width, height, flip
  await webcam.setup(); // request access to the webcam
  await webcam.play();
  window.requestAnimationFrame(loop);

  // append elements to the DOM
  document.getElementById("webcam-container").appendChild(webcam.canvas);
  labelContainer = document.getElementById("label-container");
  console.log(labelContainer);
  console.log(maxPredictions);
  for (let i = 0; i < maxPredictions; i++) {
    console.log(i);
    // and class labels
    labelContainer.appendChild(document.createElement("div"));
  }
}

async function loop() {
  webcam.update(); // update the webcam frame
  await predict();
  window.requestAnimationFrame(loop);
}

// run the webcam image through the image model
async function predict() {
  // predict can take in an image, video or canvas html element
  const prediction = await model.predict(webcam.canvas);
  for (let i = 0; i < maxPredictions; i++) {
    const classPrediction =
      prediction[i].className +
      ": " +
      prediction[i].probability.toFixed(2) * 100 +
      "%";
    console.log("percent: ", prediction[i].probability);
    labelContainer.childNodes[i].innerHTML = classPrediction;
  }
}

function RecognizeFaceMask() {
  useEffect(() => {}, []);

  const openStartBtn = (e) => {
    document.getElementById("start_btn").style.display = "block";
  };

  return (
    <div>
      <button type="button" onClick={openStartBtn}>
        Open Start Btn
      </button>
    </div>
  );
}

export default RecognizeFaceMask;
