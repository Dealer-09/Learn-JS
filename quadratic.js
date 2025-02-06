function Quadratic(a, b, c) {
  if (a === 0) {
      console.log("Not a quadratic equation (a should not be 0).");
      return;
  }
  const d = b * b - 4 * a * c;  //d=discriminant
  const denominator = 2 * a;

  if (d > 0) {
      const sqrtD = Math.sqrt(discriminant);
      const root1 = (-b + sqrtD) / denominator;
      const root2 = (-b - sqrtD) / denominator;
      console.log(`Roots are real and different:\nRoot 1 = ${root1.toFixed(2)}\tRoot 2 = ${root2.toFixed(2)}`);
  } 
  else if (d === 0) {
      const root = -b / denominator;
      console.log(`Roots are real and equal:\nRoot = ${root.toFixed(2)}`);
  } 
  else {
      const realPart = (-b / denominator).toFixed(2);
      const imagPart = (Math.sqrt(-discriminant) / denominator).toFixed(2);
      console.log(`Roots are imaginary:\nRoot 1 = ${realPart} + ${imagPart}i\tRoot 2 = ${realPart} - ${imagPart}i`);
  }
}
const a = parseFloat(prompt("Enter coefficient a:"));
const b = parseFloat(prompt("Enter coefficient b:"));
const c = parseFloat(prompt("Enter coefficient c:"));
