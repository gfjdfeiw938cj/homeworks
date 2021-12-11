function solveEquation(a, b, c) {
  let arr = [];
    
  let x;
  let x2;
  let Discriminant = b**2 - 4*a*c;
  
  if(Discriminant > 0){
    x = (-b + Math.sqrt(Discriminant))/(2*a);
    x2 = (-b - Math.sqrt(Discriminant))/(2*a);
    arr.push(x,x2);
    return arr;
  } else if(Discriminant === 0){
    x = -b/2*a;
    arr.push(x);
    return arr;
   } else if(Discriminant < 0)
    return arr; 
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  
  let monthDate = date - new Date();

  let timeСonversion = Math.round(monthDate / (1000 * 60 * 60 * 24 * date.getMonth() * 12)) ; 

  let totalAmount;
  let S = amount - contribution;
  let P = percent*1/12/100;
  let monthlyPayment;

  monthlyPayment = S * (P + (P / (((1 + P)**timeСonversion) - 1)));

  totalAmount = monthlyPayment * timeСonversion;

  return Math.round(totalAmount * 100)/100;
 
}

