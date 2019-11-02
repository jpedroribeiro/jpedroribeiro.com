---
title: "Debugging Arrow Functions with console.log"
date: "2019-11-02"
tags: ["arrow functions", "debugging", "javascript"]
---

Something that always annoyed my about one-line **arrow functions** is that whenever I need to debug them, I need to open up a block of curly brackets. Then, when I'm done, go back and tidy up my code. 

Example:

```javascript{numberLines: true}
// Original code
const listOfBooks = console.log(booksOnStock); // [{name: "The Hobbit", isAvailable: true}, {name: "Lord of the Rings", isAvailable: false}, {name: "The Silmarillion", isAvailable: true}];
const booksOnStock = listOfBooks.map(book => book.isAvailable);
console.log(booksOnStock.length); // 2
```

```javascript{numberLines: true}
// During debugging
const listOfBooks = console.log(booksOnStock); // [{name: "The Hobbit", isAvailable: true}, {name: "Lord of the Rings", isAvailable: false}, {name: "The Silmarillion", isAvailable: true}];
const booksOnStock = listOfBooks.map(book => {
 console.log(book); // {name: "The Hobbit", isAvailable: true},...
 return book.isAvailable;
});
console.log(booksOnStock.length); // 2
``` 

Turns out there is a better way, you can chain the `console.log` directly next to the arrow function by using the `||` operator:

```javascript{numberLines: true}
// Better debugging
const listOfBooks = console.log(booksOnStock); // [{name: "The Hobbit", isAvailable: true}, {name: "Lord of the Rings", isAvailable: false}, {name: "The Silmarillion", isAvailable: true}];
 // highlight-start
const booksOnStock = listOfBooks.map(book => console.log(book) || book.isAvailable);  // {name: "The Hobbit", isAvailable: true},...
 // highlight-end
console.log(booksOnStock.length); // 2
```

The idea here is that `console.log(...)` will **always** return `false` so it will log the data **and** run the following operation. And when you're done you can simply remove that piece of code.