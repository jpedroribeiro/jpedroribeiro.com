---
title: "Updating CSS Custom Properties with JavaScript"
date: "2019-12-08"
tags: ["css", "custom properties", "javascript"]
---

I ran into an issue this week: needed to update the colour of a pseudo element (i.e. `::before`) of an element.

The problem is that pseudo elements are not part of the browser **DOM API** and, therefore, are not available to JavaScript. They are, in fact, part of the [CSS Object Model](https://drafts.csswg.org/css-pseudo-4/). 

My solution was to update the custom property which that pseudo element was using. 
It's a rather simple solution, first select the **document root** element:

    const root = document.documentElement;

Then update the custom property with the new value:

    root.style.setProperty("--inputColour", "yellow");

Here's the working solution:

<iframe height="265" style="width: 100%;" scrolling="no" title="Updating CSS Custom Properties with JavaScript" src="https://codepen.io/jpedroribeiro/embed/rNaOrNb?height=265&theme-id=default&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/jpedroribeiro/pen/rNaOrNb'>Updating CSS Custom Properties with JavaScript</a> by Pedro Ribeiro
  (<a href='https://codepen.io/jpedroribeiro'>@jpedroribeiro</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>