import os

def add_frontmatter(root_dir):
    frontmatter = """---
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
"""

    # Iterate through all files in the root directory recursively
    for subdir, dirs, files in os.walk(root_dir):
        for file in files:
            # Check if the file is an .mdx file
            if file.endswith(".mdx"):
                file_path = os.path.join(subdir, file)
                with open(file_path, "r+") as f:
                    content = f.read()
                    if not content.startswith("---"):
                        f.seek(0, 0)
                        f.write(frontmatter + content)

# Example usage
add_frontmatter("/Users/aboureadaa/projects/private/anas-digital-garden/content")
