const fs = require('fs');
const file = 'src/blogs/BlogList/BlogList.tsx';
let code = fs.readFileSync(file, 'utf8');

code = code.replace(/text-primary-red/g, 'text-[#2563EB]');
code = code.replace(/border-primary-red/g, 'border-[#2563EB]');
code = code.replace(/bg-primary-red/g, 'bg-[#2563EB]');
code = code.replace(/hover:text-primary-red/g, 'hover:text-[#2563EB]');

code = code.replace(/bg-\[\#121212\]/g, 'bg-[#0A1128]');
code = code.replace(/bg-\[\#1F1F1F\]/g, 'bg-[#1A233A]');
code = code.replace(/border-\[\#3A3A3A\]/g, 'border-[#1F2C47]');
code = code.replace(/border-\[\#2A2A2A\]/g, 'border-[#1F2C47]');

code = code.replace(/text-\[\#121212\]/g, 'text-slate-900');
code = code.replace(/bg-\[\#FFFFFF\]/g, 'bg-white');
code = code.replace(/bg-\[\#FAFAFA\]/g, 'bg-gray-50');
code = code.replace(/border-\[\#E8E8E8\]/g, 'border-gray-200');

code = code.replace(/text-\[\#7A7A7A\]/g, 'text-gray-500');
code = code.replace(/text-\[\#A0A0A0\]/g, 'text-gray-400');
code = code.replace(/text-\[\#888888\]/g, 'text-gray-400');
code = code.replace(/text-\[\#5A5A5A\]/g, 'text-gray-600');
code = code.replace(/text-\[\#FAFAFA\]/g, 'text-white');
code = code.replace(/text-\[\#FFFFFF\]/g, 'text-white');

fs.writeFileSync(file, code);
