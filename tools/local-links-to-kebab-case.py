import os
import re

# Function to convert a string to kebab-case
def to_kebab_case(string):
    return re.sub(r'([a-z])([A-Z])', r'\1-\2', string).lower()

# Get the directory where the script is located
# dir_path = os.path.abspath(os.path.realpath(__file__))
dir_path = "/Users/aboureadaa/projects/private/anas-digital-garden/content"

# Function to replace all local links in mdx files with kebab-case links
def replace_links_with_kebab_case(path):
    for dirpath, dirnames, filenames in os.walk(path):
        for filename in filenames:
            if filename.endswith('.mdx'):
                # Open the file and read its contents
                with open(os.path.join(dirpath, filename), 'r') as file:
                    contents = file.read()

                # Replace all local links with kebab-case links
                contents = re.sub(r'\[([^\]]+)?\]\(([^http|^/][^\)]+)\)',
                                  lambda match: f"[{match.group(1)}]({to_kebab_case(match.group(2))})",
                                  contents)

                # Write the updated contents back to the file
                with open(os.path.join(dirpath, filename), 'w') as file:
                    file.write(contents)

replace_links_with_kebab_case(dir_path)
print("All local links in .mdx files have been replaced with kebab-case links.")
