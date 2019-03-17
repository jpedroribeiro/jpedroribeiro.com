---
title: "Accessibility Tests with Pa11y & Node"
date: "2018-01-10"
---

In this article I'm going to show you how to automate your accessibility testing with just a little amount of JavaScript and a great library.

## A little background

A while ago I was under the task of review the **accessibility** standards of the website we were working on. We were used to do this, roughly, twice a year. One engineer would get this **ticket**, run through the code base for obvious **a11y** (accessibility) issues, and would submit a **pull request** with the fixes.

It was a **manual job** and the requirements would be very loose. An `alt` tag here, a `label` there. Nothing more than a few file changes.

It's valid to point out that, keeping a commercial site up to accessibility standards is not just a nice thing to do to your users but also it is the [law](https://www.gov.uk/service-manual/helping-people-to-use-your-service/making-your-service-accessible-an-introduction).

When you combine repetitive tasks with lack of time you get... **automation**. We engineers are _"lazy"_ by nature and the idea of automating a tedious task is what makes our job exciting.

## Accessibility tests automation = pa11y

When researching about tools I could use for this task I came across [Pa11y](http://pa11y.org/), which includes not only the command line interface but also a dashboard, webservice and a CI.

In this article I'm focusing on the JavaScript interface that Pa11y provides, letting us write node modules to achieve our automation. I'm also using the version 5.0 beta, in which makes use of headless Chrome in place of PhantomJS.

## Installation and first steps

Go to your terminal and make sure your node version is at least 8: `$ node -v v8.9.4`

All good. Now we install pa11y@beta (version 5 will soon leave beta and become the master branch, but in the meantime we need to tag its beta branch): `$ npm install -g pa11y@beta`

The `-g` is optional, it means it's a _global_ install and makes it available throughout the system. If you need this just for one specific project, feel free to skip it.

With the installation done, you can start using it's command line interface straightaway: `$ pa11y http://www.google.com`

The output will be a list of accessibility issues found on that specific URL. Now let's see how we can test multiple pages at the same time and generate reports.

## Node.js to the rescue

Pa11y provides a **JavaScript interface** that lets us write node scripts to create automation. In its most basic form, you can replicate the example above this way:

\- In a file named a11y.js, type the following code:

const pa11y = require('pa11y');
pa11y('http://www.google.com/')
  .then((results) => { 
    console.log(results);
  });

\- Now run it on your terminal `$ node a11y.js`

You will notice that, now, the output is in **JSON** format. You can change it to CSV, HTML, and other types by passing a **configuration object** which will see more details later on.

Now let's try testing multiple pages.

## Testing multiple pages

const pa11y = require('pa11y');
const urls = \[
    pa11y('http://www.google.com'),
    pa11y('http://www.bbc.co.uk'),
    // Add more pages here as needed
\];

Promise.all(urls)
  .then(results => {
    console.log(results\[0\]); // Results for Google
    console.log(results\[1\]); // Results for BBC
  });

You can cater for each page individually, or you could just **loop through** the `results` array.

The console **output** can become overwhelming on some sites, so let's output this results into a readable HTML with the help of **reporters**.

## Reporters

As default, Pa11y comes with **JSON**, CSV and CLI reporters, but you can add **HTML** and TSV via additional packages. To enable HTML reporting you need to install another node module:

`$ npm install -g pa11y-reporter-html`

As before, the `-g` is optional. With that done, we need to change our code to the following:

const pa11y = require('pa11y');
const html = require('pa11y-reporter-html');
const urls = \[
  pa11y('http://www.google.com'),
  pa11y('http://www.bbc.co.uk')
\];

Promise.all(urls)
  .then(results => {
    const googleResults = html.results(results\[0\]);
    const bbcResults = html.results(results\[1\]);

    googleResults
      .then(output => {
        console.log(output)
      });

    bbcResults
      .then(output => {
        console.log(output)
      });
  });

If you run that, `$ node a11y.js` you will get the output of each test in HTML format. With that content in hands, you can always use it to save into a file using `fs.createWriteStream`.

## Conclusion

With a very small script and the help of a great library like Pa11y, accessibility tests can easily be automated.

You can always take a step further and try out their [dashboard repository](https://github.com/pa11y/pa11y-dashboard) if you like to have a more graphical interface, or use [pa11y-ci](https://github.com/pa11y/pa11y-ci), for continuous integration.
