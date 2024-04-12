

// Checkpoint on the Edabit problem-solving game. 
// The challenge here is to collect 70 points. 


// Very easy 5XP
// Create an hello() function that returns "hello edabit.com"

function hello() {
	
    return "hello edabit.com";

}


// Easy 10XP
/* Create a function that takes the base and height of a triangle and 
   return its area. */
// we declare the function name to be "triArea"

function triArea(base, height) {
	      
    let area = (base * height) / 2;
    return area;

}


// Easy 15XP
// Find the Perimeter of a Rectangle
/* We create a function findPerimeter, that takes length and width and 
   finds the perimeter of a rectangle. */

function findPerimeter(length, width) {

	   let perimeter = 2 * (length + width);
	   return perimeter;

}

findPerimeter(length, width);


// Easy 20XP
// Power Calculator
/* We create a function circuitPower, that takes voltage and current 
   and returns the calculated power. */

function circuitPower(voltage, current) {
	
	let power = voltage * current;
	return power;
	
}


// Easy 25XP
// Less Than 100?
/* Given two numbers, return true if the sum of both numbers is less 
   than 100. Otherwise return false.. */

   function lessThan100(a, b) {
	
	  let sum = a + b;
	  if(sum < 100) {
	  return true;
		
	} else{
		
	  return false;

	}
	
}









