export function ageCalculator(y,m,d) {
  const today = new Date()
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1;
  const currentDay = today.getDate();
    
let edad = currentYear - y;

if (currentMonth < m || (currentMonth == m && currentDay < d)){
    edad;
}
return edad;


}


// const y = 1990;
// const m = 12;
// const d = 15;
// console.log(calcularEdadExacta(y, m, d)); 




