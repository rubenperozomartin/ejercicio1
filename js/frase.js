let continua=prompt("Deseas introducir un mensaje ?")
let mensaje=""
while (continua.toUpperCase() !== "N"){
    mensaje= prompt ("Introduce el mensaje")
    alert ("Tu mensaje es :"+ mensaje)
    continua=prompt("Deseas introducir un mensaje ?")
}
alert ("Adios")