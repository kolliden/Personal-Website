import os
import re
import sys

def main():
    if len(sys.argv) != 3:
        print("Usage: python3 convert_links.py <input_file> <output_file>")
        sys.exit(1)

    input_file = sys.argv[1]
    output_file = sys.argv[2]

    if not os.path.isfile(input_file):
        print("Error: input file does not exist")
        sys.exit(1)

    if os.path.isfile(output_file):
        print("Error: output file already exists")
        sys.exit(1)

    with open(input_file, 'r') as f:
        html = f.read()
        html = re.sub(r'href="(?!http)(.*?)"', r'href="\1.html"', html)
        html = re.sub(r'src="(?!http)(.*?)"', r'src="\1.html"', html)

    with open(output_file, 'w') as f:
        f.write(html)

if __name__ == "__main__":
    main()