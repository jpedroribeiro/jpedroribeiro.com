---
title: "Getting a nested property of an object with dot notation"
date: "2020-01-18"
tags: ["nested properties", "dot notation", "javascript"]
---
Let's say you have a JSON file with your data. You parse it into an object literal:

      const myObject = {
        foo: {
          bar: {
            baz: 123
          },
          ...
          xyz: "test"
        }
      };

Your app (maybe your CMS, or an i18n library) asks for the content of a specific path:

    const myPath = "foo.bar.baz";

How would you get the value of this property?

[This is what I came up with](https://gist.github.com/jpedroribeiro/8950ed3f10e505cadb7f62467714ab98):

    function getPropValue(sourceObject, dotNotationPath) {
      let returnData = sourceObject;
    
      dotNotationPath.split(".").forEach(subPath => {
        returnData = returnData[subPath] || `Property ${subPath} not found`;
      });
    
      return returnData;
    }

Basically, I'm breaking down the path string into an array (`split`), looping through each
property. As I go to each property, `returnData` receives the nested object of **that** specific level, up until we reach the
final property, which will be the value we want. 

    console.log(getPropValue(myObject, myPath)); // 123

If the path doesn't exist or a property down the road is not present, you get the 
error message:

    const myPath2 = "foo.zoo"
    console.log(getPropValue(myObject, myPath2)); // "Property zoo not found"


