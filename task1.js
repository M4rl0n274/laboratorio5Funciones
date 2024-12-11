export function costCalculator(Transaccion) {
    const tarifa = 3; 
    const interes = 0.01;

   
    const total = Transaccion + (Transaccion * interes) + tarifa ;
    return total
}




const monto = 124; // Ejemplo de monto de transacción
console.log(costCalculator(monto)); // Salida: 4





// * 1. María está calculando el costo de los pagos mensuales. Por cada transacción hay una tarifa de $3 y una tarifa de interés del 1% (0,01). 
//     * Dado el monto de una transacción de entrada, exporte una función que devuelva el valor de lo que debería pagar.
//         * Esta función debería poder tomar un número como entrada y devolver un número como salida.