---
title: "Vertically Centering Images with HTML & CSS"
date: "2012-08-03"
---

Here is a quick trick whenever you need to **vertically centre an image** (or paragraph, or any other element) inside its parent container: treat them like **tables**. That's right.

By setting the parent element's display type to `table` and the child element to `table-cell` we can vertically align its content. Have a look at the code below:

## HTML

 <div>
  <p>Centred element</p>
 </div>

## CSS

  div {display: table; height: 100px}
  p {display: table-cell; vertical-align: middle;}

Depending on your site structure, that parent tag could be **non-semantic** but it's a price to pay! Also, you got to set a **fixed height** to this parent element.

There are other solutions using [jQuery](http://jpedroribeiro.com/tag/jquery/ "Tag: jQuery") at page loading but to me it seems too much "power" for such a simple result.

Got any other solution? [Let me know](http://jpedroribeiro.com/contact-me/ "Contact Me")!
