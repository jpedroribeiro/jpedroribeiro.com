---
title: "Progressive Web Apps"
date: "2016-12-29"
tags: ["pwa", "offline", "performance"]
---

In the past couple of months I've been reading quite a lot about Progressive Web Apps. The term is getting very popular especially due to Google's effort and investment in the concept.

## What is a Progressive Web App?

I kind of like [Ada Rose Edwards](https://twitter.com/lady_ada_king) definition: ["A website so good you want to save it on your home screen"](https://www.youtube.com/watch?v=5ylZbXelPMA).

According to Google, a Progressive Web App is "_a website or web application that is reliable, fast and engaging_". Lets break down those 3 pillars:

**Reliable**: this is mostly about using [Service Workers](https://developer.mozilla.org/en/docs/Web/API/Service_Worker_API) and enabling **offline** with the use of cache control and managing requests when connection is unstable.

**Fast**: we all know thats users leave websites if they take too long to load. Google is putting a lot of emphasis on **performance** these days and I wouldn't be surprised if it becomes part of its indexing algorithm.

Engaging: basically, the features that make a website look more like a **native** app - being installable, work on full screen, make use of [push notifications](https://developer.mozilla.org/en/docs/Web/API/Push_API).

## Being Progressive

There is a focus on the **new technologies** like Service Workers and the Push API, but being progressive means catering for legacy browsers too. This is the basic idea of [progressive enhancement](https://www.gov.uk/service-manual/technology/using-progressive-enhancement) which we know and have been using for ages.

## Where to start?

The Google Developer Team has been putting a lot of effort in this field, especially since their [Summit](https://www.youtube.com/playlist?list=PLNYkxOF6rcIAWWNR_Q6eLPhsyx6VvYjVb) last September.

They also have a very deep and beginner friendly portal with loads of articles and tutorials on the subject: [https://developers.google.com/web/progressive-web-apps/](https://developers.google.com/web/progressive-web-apps/)

Smashing Magazine, as always, has done the same and came up with a great article written by Kevin Farrugia on building PWAs: [https://www.smashingmagazine.com/2016/08/a-beginners-guide-to-progressive-web-apps/](https://www.smashingmagazine.com/2016/08/a-beginners-guide-to-progressive-web-apps/)

## My PWA on github

I've also being playing around with these concepts and build a very simple page to practise. You can have a look at the source code on github: [https://github.com/jpedroribeiro/VoucherWallet](https://github.com/jpedroribeiro/VoucherWallet)
