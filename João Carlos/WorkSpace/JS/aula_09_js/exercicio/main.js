const num1 = [17, 43, 8, 4, 97, 56, 29, 40];

num1.forEach(ParImpar);

function ParImpar(valor) {
  if (valor % 2 === 0){
  console.log( valor + ' o valor é par')
  } else {
  console.log( valor + ' o valor é impar')
  }
  
}

const num2 = [17, 43, 8, 4, 97, 56, 29, 40, 3, 75, 34, 88, 82];

let filtronum2 = num1.filter((num2) => {
  return num2 > 20 && num2 < 80;
});
console.log(filtronum2);