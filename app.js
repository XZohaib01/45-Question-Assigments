// lowe"r case
var personName = "Zohaib";
console.log("lowercase:", personName.toLocaleLowerCase());
// upper case
console.log("uppercase:", personName.toLocaleUpperCase());
// Tittle case
console.log("tittlecase:", personName.replace(/\bw/g, function (c) { return c.toLocaleUpperCase(); }));
