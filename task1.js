export function costCalculator(Transaccion) {
    const tarifa = 3; 
    const interes = 0.01;

   
    const total = Transaccion + (Transaccion * interes) + tarifa ;
    return total
}




const monto = 124; // Ejemplo de monto de transacción
console.log(costCalculator(monto)); // Salida: 4





