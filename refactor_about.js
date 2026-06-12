const fs = require('fs');
const path = require('path');

const aboutSrc = 'src/AboutPage/AboutPage.tsx';
const targetDir = 'src/who-we-are/about-us';

// Create directories
fs.mkdirSync('src/who-we-are', { recursive: true });
fs.mkdirSync(targetDir, { recursive: true });

const content = fs.readFileSync(aboutSrc, 'utf8');

// I will just prepare the directories for now
fs.mkdirSync(path.join(targetDir, 'AboutHero'), { recursive: true });
fs.mkdirSync(path.join(targetDir, 'StatsSection'), { recursive: true });
fs.mkdirSync(path.join(targetDir, 'StorySection'), { recursive: true });
fs.mkdirSync(path.join(targetDir, 'CoreValues'), { recursive: true });
fs.mkdirSync(path.join(targetDir, 'MilestonesTimeline'), { recursive: true });
fs.mkdirSync(path.join(targetDir, 'CorporateCTA'), { recursive: true });

console.log("Directories created successfully.");
