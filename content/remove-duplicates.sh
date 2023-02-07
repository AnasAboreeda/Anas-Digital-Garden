#!/bin/bash


# Find all files that contain spaces, capital letters, or underscores
find . -regex ".*[ A-Z_].*" | while read -r file; do
  # Remove the file, escaping any special characters in the file name
  echo -- "$file"
done
