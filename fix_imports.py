import os
import re

directories = [
    'src/landing', 'src/what-we-do', 'src/news-rooms', 'src/careers',
    'src/blogs', 'src/contact-us', 'src/nav-bar', 'src/footer',
    'src/who-we-are/leadership', 'src/who-we-are/our-team', 'src/who-we-are/community'
]

for d in directories:
    for root, _, files in os.walk(d):
        for file in files:
            if file.endswith('.tsx'):
                path = os.path.join(root, file)
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    
                lines = content.split('\n')
                data_import = None
                new_lines = []
                
                for line in lines:
                    if 'Data } from "./' in line and line.strip().startswith('import '):
                        data_import = line
                        continue # remove it from current position
                    new_lines.append(line)
                    
                if data_import:
                    # Put it after the first line (or after 'use client' if line 0 is use client)
                    if new_lines[0].startswith('"use client"') or new_lines[0].startswith("'use client'"):
                        new_lines.insert(1, data_import)
                    else:
                        new_lines.insert(0, data_import)
                        
                    with open(path, 'w', encoding='utf-8') as f:
                        f.write('\n'.join(new_lines))
                    print(f"Fixed {path}")
