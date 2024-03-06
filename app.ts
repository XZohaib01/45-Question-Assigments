// lowe"r case

let personName: string="Zohaib" 
console.log("lowercase:", personName.toLocaleLowerCase());

// upper case
console.log("uppercase:", personName.toLocaleUpperCase());

// Tittle case
console.log("tittlecase:", personName.replace(/\bw/g,c => c.toLocaleUpperCase()));
