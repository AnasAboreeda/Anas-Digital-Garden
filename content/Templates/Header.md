---
id: <% tp.file.creation_date('YYYY-MM-DD') %>-<% tp.file.title %>
title: <% tp.file.title.replace(/-/g, ' ') %>
metaTitle: <% tp.file.title.replace(/-/g, ' ').replace(/([^\W_]+[^\s-_]+]*) */g, function (txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) %> | Anas's Digital Garden
metaDescription: <% tp.file.title.replace(/-/g, ' ') %> | Anas's Digital Garden
createdDate: <% tp.file.creation_date('YYYY-MM-DD') %>
updatedDate: <% tp.file.last_modified_date('YYYY-MM-DD') %>
weekNumber: <% tp.file.creation_date('YYYYww') %>
category: <% tp.file.folder(true) %>
tags: ["<% tp.file.folder() %>", "<% tp.file.title %>"]
---