const RESULTADO1 = document.getElementById("resultado1");
const RESULTADO2 = document.getElementById("resultado2");
const BUTON = document.getElementById("calcular");
const INPUT1 = document.getElementById("costo");
const INPUT2 = document.getElementById("porcentaje");
const ERROR = document.getElementById("error");

BUTON.addEventListener("click",()=>{
    let costo = INPUT1.value;
    let porcentaje = INPUT2.value; 

        if(costo === ""){
           ERROR.style.display = "block";

        } else if(porcentaje === ""){
            ERROR.style.display = "block";

          } else if(porcentaje < 1 || porcentaje > 100){
            ERROR.style.display = "block";

           } else {
            let respuesta = PreciodeVenta(costo,porcentaje);
            RESULTADO1.innerHTML= "El precio de venta es:    " + respuesta[0] + "00" + " Gs";
            RESULTADO1.style.display= "block";

            RESULTADO2.innerHTML= "Su ganancia será:    " + respuesta[1] + "00" + " Gs";
            RESULTADO2.style.display= "block";

            ERROR.style.display= "none";
           }
});

function PreciodeVenta(costo,porcentaje) {
    let PreciodeVenta= ((costo / (100 - porcentaje))*100);
    return [(PreciodeVenta).toFixed(1), (PreciodeVenta-costo).toFixed(1)]
}
