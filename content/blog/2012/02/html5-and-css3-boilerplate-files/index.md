---
title: "HTML5 and CSS3 Boilerplate files"
date: "2012-02-28"
coverImage: "boilerplate.jpg"
---

![](images/boilerplate.jpg "boilerplate")

**Boilerplate** is a set of files composed to be used over and over again. In [front-end development](http://jpedroribeiro.com/tag/front-end-development/) (any area actually), starting from scratch every time you have a new **project** is a waste of time and money. How many times have you reset your css or applied the same basic styles to the same [html](http://jpedroribeiro.com/tag/html/) tags?

There are a vast amount of boilerplate files out there. Some are very complex and full of options, other are focused to certain types of projects. You are very well served of options.

On the projects I work on, I prefer to use a something simpler but that covers most of the areas. I **created this set** based on what I use the most.

## The Boilerplate

![](images/html5boilerplate.png "html5boilerplate")

This set is not 100% original. Like almost everything **web** related, it is a combination of several others plus my own insights resulting on what works for me. I use some of [Eric Meyers CSS Reset](http://meyerweb.com/eric/tools/css/reset/), mixed with some details by [HTML Doctor](http://html5doctor.com/html-5-boilerplates/), [HTML5 Boilerplate](http://html5boilerplate.com/) and others. You are welcome to make your additions, updates and customise it to fit your requirements.

## HTML

Start out creating a basic **HTML5** file. Add [Modernizr](http://www.modernizr.com/) (on header) so we can use new html5 tags on older **browsers** plus it allow us to detect whether the browser support css3 or not (always useful for graceful degradations).

## Styles

Do a basic **css reset** and minify it to make it stand out from your own styles, plus it will save you some bytes. If you are making a **Wordpress** theme, don't forget to add your details as comments on top, I recommend adding those details anyway. Add **conditional comments** to place your IE8- styles. If you are going [responsive](http://jpedroribeiro.com/tag/responsive/) (and you should!) place stylesheets according to the devices/screens you are going to support. Plus the **print** stylesheet.

## Scripts

![](images/jquery.png "jquery")

Add the latest [jQuery](http://jquery.com/) for advanced javascript support. You can get it either from Google repository or download and use the latest version (I prefer this, I don't like to rely on others, even Google!). Add a Site.js (or whatever name you want) to host your own javascript and jQuery calls. These all should be on the **bottom** of your HTML document (we only leave Modernizr on top to enable HTML5 on old browsers).

## Everything Else

**Favicon** and **iPad/iPhone** icons also should be provided (on top of HTML doc). You can also add your own **meta** information. Not only good for **SEO**, it works as a signature of your project. Speaking of meta, add viewport and set it for mobile devices if you're going responsive.

## Wrap Up

This is how I basically created my **boilerplate**, you can download it here and see it in action. It has folder structure to help organize the files and speed up maintenance.

Bear in mind this is always work in progress, so make sure to come back and check the upcoming updates.

[DOWNLOAD THE FILES](http://jpedroribeiro.com/wp-content/uploads/2012/02/v2.0-2011-blank-template.rar)
