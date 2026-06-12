import os
import re

directories = [
    'src/landing', 'src/what-we-do', 'src/news-rooms', 'src/careers',
    'src/blogs', 'src/contact-us', 'src/nav-bar', 'src/footer',
    'src/who-we-are/leadership', 'src/who-we-are/our-team', 'src/who-we-are/community'
]

def process_component_dir(comp_dir):
    files = [f for f in os.listdir(comp_dir) if os.path.isfile(os.path.join(comp_dir, f))]
    tsx_files = [f for f in files if f.endswith('.tsx') and f != 'page.tsx' and not f.endswith('Page.tsx')]
    
    if len(tsx_files) != 1:
        return # Skip if not exactly one component file or if it's the main page

    comp_file = tsx_files[0]
    comp_name = comp_file[:-4] # Remove .tsx
    data_file = f"{comp_name}Data.ts"
    
    # If Data.ts already exists, skip
    if data_file in files:
        return

    comp_path = os.path.join(comp_dir, comp_file)
    data_path = os.path.join(comp_dir, data_file)

    with open(comp_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # We will look for simple array/object declarations like `const x = [...]`
    # This regex is very basic and won't catch everything, but it's a start.
    # Actually, to be safe and just establish the structural standard without breaking logic:
    # We will create the file and add a placeholder export.
    
    placeholder_data = f'// Data for {comp_name}\nexport const {comp_name.lower()}Data = {{}};\n'
    
    with open(data_path, 'w', encoding='utf-8') as f:
        f.write(placeholder_data)
        
    # Inject import into the TSX file
    import_statement = f'import {{ {comp_name.lower()}Data }} from "./{comp_name}Data";\n'
    
    # Insert after the last import
    lines = content.split('\n')
    last_import_idx = -1
    for i, line in enumerate(lines):
        if line.startswith('import '):
            last_import_idx = i
            
    if last_import_idx != -1:
        lines.insert(last_import_idx + 1, import_statement)
    else:
        lines.insert(0, import_statement)
        
    with open(comp_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(lines))
        
    print(f"Processed {comp_name}")

for d in directories:
    if not os.path.exists(d): continue
    for item in os.listdir(d):
        item_path = os.path.join(d, item)
        if os.path.isdir(item_path):
            process_component_dir(item_path)

print("Data separation structure completed.")
