import os
import shutil
import re

src_dir = 'src'
app_dir = 'app'

# Mapping of old directory names to new paths
path_mapping = {
    'LandingPage': 'landing',
    'IndustriesPage': 'what-we-do',
    'NewsroomsPage': 'news-rooms',
    'CareersPage': 'careers',
    'BlogPage': 'blogs',
    'ContactPage': 'contact-us',
    'Navbar': 'nav-bar',
    'Footer': 'footer',
    'AboutPage': 'who-we-are/about-us',
    'LeadershipPage': 'who-we-are/leadership',
    'TeamPage': 'who-we-are/our-team',
    'CommunityPage': 'who-we-are/community',
}

# 1. Move directories
for old_name, new_rel_path in path_mapping.items():
    old_path = os.path.join(src_dir, old_name)
    new_path = os.path.join(src_dir, new_rel_path)
    
    if os.path.exists(old_path):
        print(f"Moving {old_path} to {new_path}...")
        # Ensure parent dirs exist
        os.makedirs(os.path.dirname(new_path), exist_ok=True)
        # Move
        shutil.move(old_path, new_path)

# 2. Update imports in all files
def update_imports(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        new_content = content
        for old_name, new_rel_path in path_mapping.items():
            # Replace exactly "@/src/OldName" with "@/src/new-name"
            # We use regex to ensure it's a directory boundary
            pattern = r"@/src/" + re.escape(old_name) + r"(?=[/\'\"])"
            replacement = "@/src/" + new_rel_path
            new_content = re.sub(pattern, replacement, new_content)
            
        if new_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated imports in {file_path}")
    except Exception as e:
        print(f"Error processing {file_path}: {e}")

for d in [src_dir, app_dir]:
    for root, _, files in os.walk(d):
        for file in files:
            if file.endswith(('.ts', '.tsx', '.js', '.jsx')):
                update_imports(os.path.join(root, file))

print("Restructuring and import updates complete.")
