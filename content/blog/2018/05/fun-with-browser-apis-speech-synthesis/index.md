---
title: "Fun with Browser APIs: Speech Synthesis"
date: "2018-05-09"
tags: ["speech", "api", "synthesis"]
---

On the previous post, I showed how you can use the [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) to translate _speech to text_ using Speech Recognition. Today, I'm going to talk about the the API's other interface: [Speech Synthesis](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis).

## What is it about?

This interface enables synthetic voices to read plain text. The list of synthetic voices depends on which device you're using and you can get a list of the available ones by running the `getVoices` method.

A simple example of this API goes like this:

const utter = new SpeechSynthesisUtterance(myTextField.value);
utter.voice = window.speechSynthesis.getVoices()\[0\]\]; // Picked the 1st available voice, which is also default
window.speechSynthesis.speak(utter);

You can also set other properties of your `SpeechSynthesisUtterance` instance, like pitch, volume, rate, volume [and more](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance).

## Conclusion

On this [GitHub repo](https://github.com/jpedroribeiro/FunWithBrowserAPIs/tree/master/speechsynthesis) you can see the full implementation of the example above including a selector for all synthetic voices available on your device.
