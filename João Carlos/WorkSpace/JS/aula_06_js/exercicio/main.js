var lista1 =['HTML', '1993', 'CSS', '1996', 'Bootstrap', '2011', 'JS', '1995', 'React', '2013',
    'Java', '1995']  

console.log(lista1)
console.log(lista1.length)
console.log(lista1[6])
console.log(lista1.join("/"))
lista1.unshift("IOS")
console.log(lista1)
console.log(lista1.toString())
console.log(typeof lista1)

var tabelalista = [

    ["HTML", "1993", "CSS", "1996" ],
    ["Bootstrap", "2011", "JS", "1995" ],
    ["React", "2013", "Java", "1995" ]

]
console.log(tabelalista)
console.log(tabelalista.length)
console.log(tabelalista[2][1])
tabelalista[1][2] = "JavaScript"
console.log(tabelalista)
delete tabelalista [2][2];
console.log(tabelalista)

let y = tabelalista.push("pipoca");
console.log(tabelalista)
console.log(y)
