---
layout: post-layout.njk 
title: Messages now work on chat app
date: 2020-07-25
tags: ['100days']
---
<!-- Excerpt Start -->
Added chat functionality to the front end of the app (previously was just console confirming that everything connected)
<!-- Excerpt End -->
Had some issues with scope when trying to append messages to the chat, but this was fixed using the StencilJS @Element decorator, which gives you a pointer to the component's host element. This was actually super useful and I'll definitely be using it again in the future.