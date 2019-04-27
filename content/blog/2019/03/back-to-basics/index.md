---
title: "Back to Basics"
date: "2019-03-30"
tags: ["opinion", "react", "gatsby"]
---

It's been a long time since I wrote anything on this site. So, as any web developer would do, I decided to rewrite the whole site instead.

## Out with the old...

My previous hosting provider was stuck in the 2000's, and this is me being nice. It was very difficult (read: _impossible_) to upgrade **backend applications**, which led me to find hacky alternatives to achieve what I needed.

The _Plesk_ version was so old that there was no documentation or support available. If you've never used Plesk before... consider yourself lucky.

It was a **WordPress** site. Which is a great tool, at least good enough for [33% of the internet](https://w3techs.com/technologies/overview/content_management/all), but it wasn't fulfilling my needs. It is too big, bulky, high maintenance. I even had a **crypto miner** injected into my scripts for a while due to not updating some plugins [_insert facepalm emoji_].

And I was also unable to migrate to HTTPS. Oh god, [the horror](https://www.youtube.com/watch?v=VKcAYMb5uk4)...

## ...and in with the new

So I ditched my old hosting company and setup a GitHub page. It's **free**, comes with **SSL** by default, integrates beautifully with static site generators, and enables you to use custom domains.

Speaking of static site generators, doing this move led me to experiment with [Gatsby](https://www.gatsbyjs.org/). I was already experienced enough with [NextJS](https://github.com/zeit/next.js/) but wanted to try something new - I'm a Frontend Engineer, I like shinny new things, OK?

If you are not familiar with Gatsby, it lets you pull data from pretty much anywhere (Markdown files in my case), pipes it through **GraphQL** (which is awesome), and generates a compiled HTML ready to be used in any static hosting.

This is made even easier when you fork from their own [gatsby-starter-blog](https://github.com/gatsbyjs/gatsby-starter-blog) package. That's half of the work done for you.

## But, and there's always a but

Static hosting means there's not much backend, server configuration allowed. Some links to my old site (`/tags/`, etc...) will 404 as I haven't created static pages for them (too lazy). This would be easy to solve with some 301 redirects but GitHub Pages has zero options to do that.

Fair enough, it's not like this blog is a SEO heaven anyway.

## Here is to a new beginning

The direction of this blog might change a bit. To prevent my inner procrastinator to only write 2-3 times a year I'll focus on more bite sized posts and add some **personal**, non-tech related topics as well.

If you're curious about how this blog comes together, have a look at the source on [GitHub](https://github.com/jpedroribeiro/jpedroribeiro.com)

Feedback is welcome, reach me out on [@jpedroribeiro](https://twitter.com/jpedroribeiro) and leave a comment. Cheers!
