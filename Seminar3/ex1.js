const birthYears = [1990, 2000, 1985, 1995, 2005, 2010];

console.log(birthYears);

anCurent = new Date().getFullYear();

const filteredYears = birthYears.filter(el => (anCurent - el) >= 18);

console.log(filteredYears);

const mappedYears = filteredYears.map(el => (anCurent - el));

console.log(mappedYears);