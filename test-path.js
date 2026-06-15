const pathname = "/who-we-are/about-us";
const href = "/who-we-are";
console.log(pathname === href || (href !== "/" && pathname?.startsWith(href)));
