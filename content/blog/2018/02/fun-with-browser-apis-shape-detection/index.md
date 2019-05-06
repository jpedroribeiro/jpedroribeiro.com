---
title: "Fun with Browser APIs: Shape Detection"
date: "2018-02-03"
tags: ["shape", "API", "detection", "browser", "barcode", "faces", "feed"]
---

This is the second instalment of [Fun with Browser APIs](http://jpedroribeiro.com/tag/apis/), and today I'm going to talk about [Shape Detection](https://wicg.github.io/shape-detection-api/#api).

## Spec in draft stage

This is a very _experimental_ API, meaning, there is not a lot of documentation available. The [WICG](https://www.w3.org/community/wicg/) (_Web Incubator Community Group_) spec is very new. At the time of writing this post, the last update was January 3rd 2018. This is just a **warning** that it is possible that some of the methods and features described in this article might be out of date if you're reading it later in the year.

## What is it about?

The **Shape Detection API** does what it says on the tin: detect shapes. This is a feature that has been available on a **hardware** level for a while, but now it surfaced to software.

This means that not only the browser you're using has to support the API, but the device you're using must have this capability.

When we talk about shapes, we're including:

- Faces
- Barcode
- Text

## Face Detector

In this article I'm focusing on detecting faces. The `FaceDetector` constructor accepts an _options_ param where you can set maximum number of faces to detect and whether you want it done using _fast mode_ (prioritise speed over accuracy).

## Using the API to detect faces in a picture

This can be achieved by doing the following:

var faceDetector = new FaceDetector();
faceDetector
.detect(myImageElement)
.then(faces => {
console.log(faces);
});

In this example, `faces` is a list of recognized faces. Each face comes with dimensions, coordinates and landmarks. According to the spec, landmarks can be either eyes or mouth, and each landmark object comes with its own coordinates.

A working example can be found in [this GitHub repo](https://github.com/jpedroribeiro/FunWithBrowserAPIs/tree/master/shapedetection/trek).

## Using the API to detect faces on a live feed

We saw on the [previous article](http://jpedroribeiro.com/2018/01/fun-with-browser-apis-media-stream-image-capture/) that we can easily use MediaStream to capture a camera feed into a `video` element. Could we use detect shapes of this stream?

Luckily for us, yes! In fact, you can use FaceDetector in any [ImageBitmapSource](https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#imagebitmapsource), such as:

- image
- video
- canvas

Here is how:

// #1 Start live feed
navigator
.mediaDevices
.getUserMedia({ video: true, audio: false })
.then(mediaStream => {
window.myVideoElement.srcObject = mediaStream;
});

// #2 Captures faces and display them in the browser console
function faceDetectorLoop() {
faceDetector
.detect(window.myVideoElement)
.then((faces) => {
console.log(faces);
window.requestAnimationFrame(faceDetectorLoop); // Loops detection
});
}

// #3 Run
faceDetectorLoop();

We start (1) by opening up the camera feed with `video` only, then we define a function (2) that will detect faces in an infinite loop using [requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame), and finally we start (3) the detection script.

I've create a **more complete** implementation of this idea in [this GitHub repo](https://github.com/jpedroribeiro/FunWithBrowserAPIs/tree/master/shapedetection/live), just click on the main box to start the application.

## Conclusion

Shape detection is a very **powerful** feature that not many people is aware of. Faces, barcodes and text can be detected and used as your application needs.
