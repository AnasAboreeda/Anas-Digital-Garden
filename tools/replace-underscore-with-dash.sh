#!/bin/bash

# Get the directory where the script is located
DIR="$1"

# Function to replace underscore with dash
replace_underscore_with_dash() {
    for file in $1/*; do
        # Check if the file name contains an underscore
        if [[ $file == *"_"* ]]; then
            # Replace underscore with dash
            new_file=$(echo $file | tr '_' '-')
            # Rename the file
            mv "$file" "$new_file"
        fi
        # If the file is a directory, call the function recursively
        if [ -d "$file" ]; then
            replace_underscore_with_dash "$file"
        fi
    done
}

replace_underscore_with_dash "$DIR"
