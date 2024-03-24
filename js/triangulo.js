const chequear=document.querySelector('button')
let tipo=''
chequear.addEventListener('click',() => {
  const lado1 = document.getElementById("lado1").value; 
  const lado2 = document.getElementById("lado2").value; 
  const lado3 = document.getElementById("lado3").value;
  
  if (lado1 === lado2) {
    if (lado2 === lado3){
      tipo="Equilatero"
    } else {
      tipo ="Isosceles"
    }
  } else {
    if (lado1 ===lado3 ) {
      tipo = "Isosceles"
    } else {
      if (lado2 === lado3) {
        tipo="Isoseles"
      } else {
        tipo ="Escaleno"
      }
    } 

  }
document.getElementById('respuesta').innerHTML=tipo
  
}
)

