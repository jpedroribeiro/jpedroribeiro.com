---
title: "Book Review: Using WebPageTest"
date: "2016-08-29"
tags: ["book review", "performance"]
---

You can't start talking about **performance** without hearing about [WebPageTest](https://www.webpagetest.org/). It's by far the most complex and useful synthetic tool available these days. I've been using it for quite some time and decided to brush up my knowledge by [reading](http://jpedroribeiro.com/category/book-reviews/) [Using WebPageTest](http://shop.oreilly.com/product/0636920033592.do), by O'Reily Media.

## Back to basics

The book says clearly on the cover: "...for novices and power users" so you've been warned. I've been using WebPageTest, on and off, for years. If you are in the same situation, you might find that 70% of the book is too obvious or just common sense, after all, WebPageTest is a pretty self explanatory tool.

## Hidden complexity

With that in mind, the advanced parts of the books are quite good. I was not fully aware of the **script** capabilities of WPT. The fact that you can give instructions to it and **simulate** a navigation flow is very powerful. You can simulate a login scenario by doing the following: 

    navigate http://www.example.com/login setValue id=u username setValue ud=p password submitForm id=login-form navigate http://www.example.com/profile/username

Other highlights include a full chapter on Continuous Integration, with plenty of examples on how to setup WPT and Jenkins or Travis, or how to setup a private instance of WPT - which I [struggled to achieve](https://twitter.com/jpedroribeiro/status/766623046471942144) a couple weeks ago!

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Took me a day and a half but I finally managed to get WebPageTest working on AWS 😅</p>— João Pedro Ribeiro (@jpedroribeiro) <a href="https://twitter.com/jpedroribeiro/status/766623046471942144">August 19, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

## Conclusion

I **definitely recommend** reading this book. WPT is such a complex tool that I can guarantee you will find something new about it that you didn't know before.

Having said that, bear in mind that **WebPageTest**, like any other **open source project**, is constantly being updated and you mind find some topics presented on the book are slightly outdated.
