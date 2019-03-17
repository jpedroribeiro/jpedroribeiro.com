---
title: "Workflow: From Design to the Browser"
date: "2015-10-04"
---

What is the best way to code a design piece to the browser? Lately, I've been questioning myself if the process I use is the proper one or if there are better alternatives. It's more of a rhetorical question as there are hundreds different ways you can code for the web.

In a nutshell, here is what I do:

## 1) Modules first

I like to break down the product into modules - kind of _divide and conquer_ approach. A single module lets you focus on one specific functionality of the site that could live on its own and therefore should not be influenced or influence other modules.

## 2) Be Semantic

Regardless of the design or styles that were applied to this module, I like to think of it as a **content container**. If there is text, it's likely to be a `p`, if it's a link I'll go for `a` and so on. This sounds obvious but you'll be surprised by the amount of unsemantic code is out there. From `button` acting like anchors to `span` with `display: block`. This is just wrong.

## 3) JS is for interactivity, CSS for styles

Your JavaScript should not interfere with the styles of this module nor with it's content. I like to prefix my JavaScript only classes with _js-_ and no CSS will ever be applied to them. This way you're making sure interactivity is isolated from styling and markup.

## 4) Auxiliary markup as a last resort

Empty `div`s used for styling arrows or any other auxiliary resource should be used only if there is no other way around it. Bear in mind that this extra markup will be meaningless and will have no semantic value to the page. If it's an assistance to some JavaScript code, then it's best to create it in JavaScript:

`var element = document.createElement(tagName);`

In a similar way, elements needed for styling purposes only should be created in CSS using pseudo elements:

`.selector::before {...}`

What about you? What's your process? Let me know at [@jpedroribeiro](http://www.twitter.com/jpedroribeiro).
