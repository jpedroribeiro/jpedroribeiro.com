---
title: "Fun with Browser APIs: Speech Recognition"
date: "2018-03-04"
tags: ["speech", "api", "recognition", "browser", "transcript", "grammar"]
---

On this third post about [browser APIs](http://jpedroribeiro.com/tag/apis/) we're gonna talk about audio, or more specifically, speech. The [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) is compromised of two interfaces, and today we're going to talk about one of them: [Speech Recognition](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition).

## What is it about?

The **Speech Recognition API** takes a speech input (via microfone) and outputs a list of results, which including the transcript and the confidence level of that translation. It is customisable, letting you define what **language** you're using and what words (**Grammar**) you are interested in.

The _confidence level_ (0-1) changes over time, meaning that as you speak, new results are output replacing the initial _guess_. When the system is happy with the results, a boolean flag `isFinal` comes true and it moves on to following parts of the speech.

## Using the API to type as you speak

A simple speech to text application could be done with the following code:

const speech = new SpeechRecognition();
speech.lang = ‘en-US’;
speech.onresult = (event) => {
console.log(event.results\[0\]\[0\].transcript
}
speech.start();

## Grammar

On that example, more options could be applied to the `speech` variable, like `grammar`. Grammar must be written using the JSpeech Grammar Format, you can ream about it in the [spec document](https://www.w3.org/TR/jsgf/).

## Conclusion

With just a few lines we managed to translate speech into text, which then can be used by your application to do as you please. You could, for example, create a voice activated app by limiting the grammar and taking actions depending on which word was said.

A more complete example is available on [this GitHub repo](https://github.com/jpedroribeiro/FunWithBrowserAPIs/tree/master/speechrecognition), where apart from a simple dictation, I've added a voice functionality to search for merchants on a website.
