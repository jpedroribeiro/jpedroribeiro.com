---
title: "HTML5 & CSS3 Curriculum Vitae (Résumé) Template"
date: "2012-05-09"
coverImage: "html-cv.png"
tags: ["html", "css", "curriculum"]
---

![](images/html-cv.png "HTML5 & CSS3 Curriculum Vitae (Résumé) Template")

I was tired of my old **CV** and lately I was using the [LinkedIn](http://www.linkedin.com/in/joaopedroribeiro "My LinkedIn Profile") auto generated **PDF** CV, which is quite nice and handy but it lacks personality. The solution was to create on purely on [html5](http://jpedroribeiro.com/tag/html5/ "HTML5 Posts") ([css3](http://jpedroribeiro.com/tag/css/ "CSS Posts") for presentational styles), easier on the eye, clean and more accessible then a PDF file (or a Doc file) and viewable on all (or most?) devices, screens and browsers.

## Semantics

The markup follows the latest web **standards** (for [HTML5](http://jpedroribeiro.com/tag/html5/ "HTML5 Posts")), tried to make it as **semantic** as possible although I found out that being semantic in this context is heavily based on interpretation. Take the Skills section for example: it could be an ordered (even unordered) list but I decided to make it a definition list `dl`. My idea is that I am defining what _Design_ (as for Front-end, Back-end and Other) means using **me** as the context.

## Responsiveness

It's basically a **liquid layout**, although I set a `max-width` of 978px for readability. With the help of `media queries`, managed to fix some layout flaws when viewing in smaller screens.

## Styling and Extras

There are a couple javascript files on this document. One is a Google Font addon. I'm quite a fan of _PT Sans_ so I had to use it in this project. The other one is Modernizr, which (among other things) lets old browsers render html5 sintaxes. On a similar cause, you will find another javascript in there to enable media queries on IE5+.

## Fork It

I made the files available on GitHub, so please be welcome to fork it and make your updates on it. You can easily update the code to fit your details and with some minor tweaking on the css you can make it shine in no time.

[https://github.com/jpedroribeiro/html5-curriculum-vitae-template](https://github.com/jpedroribeiro/html5-curriculum-vitae-template "Download the files at GitHub")

Any feedback on this is always welcome.
