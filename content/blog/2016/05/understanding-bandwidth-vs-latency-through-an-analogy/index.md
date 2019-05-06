---
title: "Understanding Bandwidth vs Latency Through An Analogy"
date: "2016-05-14"
coverImage: "road.jpg"
tags: ["performance", "latency", "bandwidth"]
---

![road](images/road-1024x683.jpg)

To understand how [performance](http://jpedroribeiro.com/tag/performance/) can affect your website, it's important to understand common terms and which part they play in a **network** connection. I'm going to try to explain the differences between **bandwidth** and **latency** by using an analogy\*. Bear with me.

## Road to performance

Picture **bandwidth** as being the amount of luggage you can fit inside the boot of a car.

Now imagine **latency** as being the distance between you and your destination, let's say Brighton.

You can fit (_bandwidth_) as much as you want as long as it fits the boot of your car. And for this exercise, let's ignore the differences between cars.

## Time for upgrade

You feel it's time to **upgrade** your vehicle as you have too many things to carry. You upgrade it to a 5mb/s connection, I mean, a **big truck** with lots of space to fill (bandwidth).

Everything is great and you can carry all the items you want. But you still need to go to Brighton, and it's quite far away (_latency_).

The distance (_latency_) is still the same, no matter how much you can carry (**bandwidth**) in one go.

## Summing up

This is why _streaming_ movies requires good bandwidth, as you need to carry a lot of data in one go. Websites, on the other hand, perform better when latency is reduced, lots of small files requires lots of roundtrips.

\* This is not an original idea. I've read similar analogies several times. This is **my take** on it.
