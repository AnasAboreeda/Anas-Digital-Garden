---
id: <% tp.file.creation_date('DD/MM/YYYY') %> - <% tp.file.title %>
createdDate: <% tp.file.creation_date('DD/MM/YYYY') %>
updatedDate: <% tp.file.last_modified_date('DD/MM/YYYY') %>
week_number: <% tp.file.creation_date('YYYYw') %>
type: Daily Note
---

tags: #Daily

# {{title}}

## Notes

## Tasks

### New Today

### Start of Day

- [ ] Take Vitamins
- [ ] Check Email
- [ ] Check Slack
- [ ] Check Calendar - Time Block
- [ ] Solve Leetcode problem
- [ ] Study 2hr from RoadMap

### Over Due

```tasks

not done

due before <% tp.date.now("YYYY-MM-DD") %>

```

### Due Today

```tasks

not done

due on <% tp.date.now("YYYY-MM-DD") %>

```

### Other Tasks

### No Due Date

```dataviewjs
dv.taskList(dv.pages('-"Travel" and -"Studying/my-own-coding-realm/nodejs/node_modules" and -"Studying/Interview Questions" and -"Templates" and -"Studying/Interview preparation/Question Patterns/all"').file.tasks.where(t => !t.completed))
```

### Done Today

```tasks

done on <% tp.date.now("YYYY-MM-DD") %>

```



**← y'day:** [[<%tp.date.yesterday("YYYY/MM-MMMM/YYYY-MM-DD-dddd")%>]] | [[<%tp.date.tomorrow("YYYY/MM-MMMM/YYYY-MM-DD-dddd")%>]] **to'mor →**
