---
title: "Book Review: TypeScript In 50 Lessons"
date: "2021-02-20"
tags: ["book review", "typescript", "javascript"]
---

![Typescript in 50 lessons Book Cover](./images/typescript-book-cover.png)

I've started incorporating **TypeScript** into my daily code not too long ago. Skeptical at first, the _loosely typed_ nature of JavaScript never bothered me as much as it does to other developers whose background on strongly typed languages is stronger.

However, mostly due to its popularity, I've decided to give it a go - and as you might expect, I was impressed.

After a couple of months of self learning I've decided to upgrade my knowledge and got my copy of [TypeScript In 50 Lessons](https://www.smashingmagazine.com/printed-books/typescript-in-50-lessons/) by [Stefan Baumgartner](https://fettblog.eu/).

## The Book

As someone new to TypeScript, my initial thought was how **accessible** it is.
It starts with a very hand holding approach, explaining the importance and advantages of types, which for me is error prevention (specially in a collaborative work environment) and _IDE integration_ (autocomplete, code hints, etc).

The book gets more **advanced** towards the later lessons. To the point that it became less useful to me. Tho I might revisit that section later as I get more experienced with TypeScript.

## Some Highlights

I'm guilty of adding the type `any` whenever I get stuck. On the book, we're exposed with the type `unknown` which is an interesting way of explicitly saying we don't know what type this _variable/parameter_ could be.

> "`unknown` should make you cautious: we have to provide a proper control flow to ensure type safety"

As in, testing the type of the variable before returning or making any operation.

When you have a rather complex **data structure**, an easy way of getting it as a type is using `typeof`.

> "In TypeScript's type system, the `typeof` operator takes any object and extracts the _shape_ of it:"
> `type Order = typeof defaultOrder`

When learning TypeScript one thing that I could never find a proper explanation was when to use Type or Interface. I am still unsure, but I can see how one can have advantages over the other:

> "Declaration merging for interfaces means we can declare an interface at separate positions in the same file, with different properties, and TypeScript combines all declarations and merges them into one."

    declare global {
      interface Window {
        isDevelopment: boolean
      }
    }

## Conclusion

As you can see by my [reviews](/tag/book-review/) I'm a huge fan of the **Smashing Books**, and I can honestly say that this is by far **their best book**. A joy to read and very insightful.

[Grab a copy of the book](https://www.smashingmagazine.com/printed-books/typescript-in-50-lessons/).
