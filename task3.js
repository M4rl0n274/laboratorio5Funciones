export function ageCalculator(y,m,d) {
  const today = new Date()
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1;
  const currentDay = today.getDate();
    
let edad = currentYear - y;

if (currentMonth < m || (currentMonth === m && currentDay < d)){
    edad;
}
return edad;


}


// const y = 1990;
// const m = 12;
// const d = 15;
// console.log(calcularEdadExacta(y, m, d)); 




//* Tarea 3: A Javiera le gustaría una forma de calcular una edad a partir de una fecha de nacimiento determinada.
//* 2.	Exporte una función que requerirá 3 argumentos - un año, un mes y un día, y luego devuelva una edad precisa.
//* ○	Por ejemplo, ageCalculator(2000, 12, 25) debe devolver la edad de alguien nacido el día de Navidad de 2000.


// * 4. Ed would like a way to calculate an age from a given birth date.
//     * Export a function that will take 3 arguments - a **year**, a **month**, and a **day** - then return an accurate age.
//         * For example, `ageCalculator(2000, 12, 25)` should return the age of someone born on Christmas Day, 2000.

