import os

directories = [
    'src/landing', 'src/what-we-do', 'src/news-rooms', 'src/careers',
    'src/blogs', 'src/contact-us', 'src/nav-bar', 'src/footer',
    'src/who-we-are/leadership', 'src/who-we-are/our-team', 'src/who-we-are/community'
]

def fix_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Check if "use client"; exists somewhere
    if '"use client"' in content or "'use client'" in content:
        # We need to make sure it is at the very top.
        # Remove all occurrences of "use client"; 
        lines = content.split('\n')
        new_lines = []
        found_use_client = False
        
        for line in lines:
            if '"use client"' in line or "'use client'" in line:
                found_use_client = True
                continue # Skip it
            new_lines.append(line)
            
        if found_use_client:
            new_lines.insert(0, '"use client";')
            
            new_content = '\n'.join(new_lines)
            if new_content != content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Fixed use client in {file_path}")

for d in directories:
    for root, _, files in os.walk(d):
        for file in files:
            if file.endswith('.tsx'):
                fix_file(os.path.join(root, file))

print("Use client fixes complete.")
