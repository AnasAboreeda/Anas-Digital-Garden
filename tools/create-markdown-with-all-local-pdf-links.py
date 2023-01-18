import os

def create_markdown_file(root_dir):
    # Create an empty list to store the markdown links
    markdown_links = []

    # Iterate through all subdirectories in the root directory
    for subdir, dirs, files in os.walk(root_dir):
        # Add a header with the subdirectory name
        markdown_links.append("# {}\n".format(subdir))

        # Iterate through all files in the subdirectory
        for file in files:
            # Check if the file is a PDF
            if file.endswith(".pdf"):
                # Add a link to the PDF file in markdown format
                markdown_links.append("[{}]({})\n".format(file, os.path.join(subdir, file)))

    # Write the markdown links to a file
    with open("links.mdx", "w") as f:
        f.writelines(markdown_links)

# Example usage
create_markdown_file("/Users/aboureadaa/projects/private/anas-digital-garden/content/kubernetes/k8s-study-notes")
