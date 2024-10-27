---
title: "How to prevent a CSS Flex item from expanding beyond its parent"
date: "2024-10-27"
tags: ["css", "flex"]
---

![flex item breaking layout](./images/output.png)

This is a weird one that caught me off guard when I saw it. A rogue element inside a flex child was making breaking the layout by expanding beyond the  
supposed limits of its container.

The code was similar to the following:
```
// HTML
<div class="flex-container">
    <div class="main-column">
        Main content
    </div>
    <div class="sidebar">
        <span>Sidebar</span>
    </div>
</div>

// CSS
.flex-container {
  display: flex;
  width: 400px;
}

.main-column {
  flex: 1 0 300px;
}

.sidebar {
  flex: 1 1 auto;
}

span {
  display: inline-block;
  width: 400px;
}
```
My first reaction was to bluntly give the parent a `overflow: hidden`, but that would do more harm than good as
it would hide any content, including some tooltips that were supposed to be shown in some scenarios.

After some digging and research, it turned out that flex-items have `min-width: auto` by default, which means that they can grow beyond their parent's width. 
The solution was to set `min-width: 0` on the flex-item that was causing the issue.
```
.sidebar {
  flex: 1 1 auto;
  min-width: 0;
}
```

You can check out the codepen below to see the issue in action and the solution applied.

<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/jpedroribeiro/embed/abeqoRE?default-tab=css%2Cresult&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/jpedroribeiro/pen/abeqoRE">
  Untitled</a> by Pedro Ribeiro (<a href="https://codepen.io/jpedroribeiro">@jpedroribeiro</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>