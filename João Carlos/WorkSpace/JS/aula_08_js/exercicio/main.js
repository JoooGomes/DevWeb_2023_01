alert("bem vindo");

    let a = prompt("valor do = A")
    let b = prompt("valor do = B")
    let c = prompt("valor do = C em negativo")


const delta = b * b - 4 * a * c;
const x1 = (-b + Math.sqrt(delta)) / (2 * a);
const x2 = (-b - Math.sqrt(delta)) / (2 * a);

const eventClique = () => {
   console.log(delta);
};
