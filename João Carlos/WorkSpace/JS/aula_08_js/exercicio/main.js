alert("bem vindo");

    let a = prompt("coloque um valor ")
    let b = prompt("coloque outro valor")
    let c = prompt("coloque um valor em negativo")


const delta = b * b - 4 * a * c;
const x1 = (-b + Math.sqrt(delta)) / (2 * a);
const x2 = (-b - Math.sqrt(delta)) / (2 * a);

const eventClique = () => {
   console.log(delta);
};
