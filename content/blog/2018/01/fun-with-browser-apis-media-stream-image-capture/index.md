---
title: "Fun with Browser APIs: Media Stream Image Capture"
date: "2018-01-26"
tags: ["image capture", "API", "stream", "media", "flash", "feed", "camera"]
---

**Fun with Browser APIs** is a series of [posts](http://jpedroribeiro.com/Blog/) in which I introduce one or more APIs that you might not heard about or used.

This first one on the list is: [MediaStream Image Capture](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Image_Capture_API).

## What is it about?

The **MediaStream Image Capture APi** is an API for capturing **images** or **videos** from devices. It allows **multiple camera** configuration, so you could control the front and back cameras of your mobile phone, for example. The API also enables you to configure _flash_, _red-eye reduction_, _image size_ (resolution) and more. Support is currently minimal, to use it with all these feature you're gonna need **Chrome** 59+.

## Using the API to capture a camera feed

With very little code you can capture a device's camera feed and use it as a source for a `video` element. For example:

navigator
.mediaDevices.getUserMedia({ audio: true, video: true })
.then(mediaStream => {
myVideoElement.srcObject = mediaStream;
});

As you can see, `getUserMedia` accepts a **configuration object** with `audio` and `video`. They can either have _boolean_ values, telling the API whether you want audio and video, or, an _object_, if you need to specify more details of how you want the **stream** to be, for example: `video: {width 600, height: 480}`.

It's worth to note that these options will be taken into account depending on the **device capabilities**. It also defaults to max resolution.

## Using the API to take photos

Expanding the example above, you can use the mediaStream track to create an instance of ImageCapture, which will then let you:

- Grab a frame of the video feed, using `grapFrame`
- Take a photo using the camera's full capabilities, using `takePhoto`

And the code would be something like this:

navigator
.mediaDevices.getUserMedia({ audio: true, video: true })
.then(mediaStream => {
const track = mediaStream.getVideoTracks()\[0\];
const imageCapture = new ImageCapture(track);
imageCapture.grabFrame()
.then(frame => {
myImageElement.src = frame;
});
});

In this example, I've used `frame` as a source for an `image` tag, but you could also use it to populate a `canvas` element.

## Conclusion

MediaStream combined with Image Capture gives you full control of the camera feeds of a device, with very little code.

I've create a more complete example on this GitHub repo [https://github.com/jpedroribeiro/FunWithBrowserAPIs/tree/master/imagecapture](https://github.com/jpedroribeiro/FunWithBrowserAPIs/tree/master/imagecapture) where I combined these APIs with `canvas` to create a very basic image manipulation app.
