function square(x) {
  return x * x;
}


// Basic Requirments

// A - 1

 	square(10) + 2 ; 			// 102
 	square(100) + square(77); 	// 15929
 	square(8 / 2) ;				// 16
 	square(2 + 17) ; 			// 361
 	square(square(15));			// 50625

// A - 2

/**
	The function square(square(15)) evaluates its parameter and in this case its the same function.
	square(square(15)) becomes square(225) and eventually results into 50625
*/

// A - 3

// Still works because we only changed the parameter name, its instances inside the function and not its value 
	function square(monkey) {
  		return monkey * monkey;
	}

// A - 4

/** 
This function won't work because the parameter is not used inside function body.

function square(monkey) { 
 	return x * x ; 
} 
*/

/**
This function throw a syntax error unexpected number 

function square(5) { 
 	return 5 * 5 ; 
 } 
*/


/**
This function throw a syntax error unexpected string 

function square('x') { 
 	return 'x' * 'x' ; 
 }
*/

// A - 5

	function square1(x) { 
	 	return x * x ; 
	} 

	function square2(x){ 
 		return x * x ; 
	} 

	function square3(x){ 
 		return x * x;
	}

// A - 6

 	function square(x){
 		return x * x;
 	} 
 
 	function square(x){ 
 		return x * x; 
 	}

 	function square(x){ 
 		return x * x; 
 	}

// A - 7

 	function cube(x) { 
 		return x*x*x; 
 	}

// A - 8

	function fullName(firstName,lastName) { 
 		return firstName + ' ' +lastName;
 	} 

// A - 9

	function average(a,b) {
		return (a+b)/2;
	}

// A - 10
	
	function greeter(name) {
		return 'Hello, '+ name +'!';
	}

// A - 11

	// Source of the info 
	// https://www.gbcnv.edu/documents/ASC/docs/00000005.pdf 

	function squareArea(s) {
		return s * s;
	}

	function perimeterSquare(s) { 
 		return 4 * s;
 	}

 	function rectangleArea(l,w) {
		return l * w;
	}

	function perimeterRectangle(l,w) { 
 		return (2*l) + (2*w);
 	}

 	function parallelogramArea(l,h) {
		return l * h;
	}

	function perimeterParallelogram(l,w) { 
 		return (2*l) + (2*w);
 	}

 	function trapezoidArea(h,b1,b2) {
		return 0.5 * h * (b1+b2);
	}

	function perimeterTrapezoid(s1,s2,b1,b2) { 
 		return s1+s2+b1+b2;
 	}

 	function triangleArea(h,b) {
		return 0.5 * h * b;
	}

	function perimeterTriangle(s1,s2,b) { 
 		return s1+s2+b;
 	}

 	function circleArea(r) {
		return Math.PI * r * r;
	}

	function perimeterCircle(r) { 
		return 2 * Math.PI * r;
 	}

//More Practice

// A - 1

	// Source of the info 
	// https://www.gbcnv.edu/documents/ASC/docs/00000005.pdf 

	// Nothing special 

// Advanced

// A - 1

	function futureValue(p,r,n,t) {
		return Math.pow(p * (1 + (r/n)),(n*t));
	}

// A - 2 

	function power(base, exp) {
		if(exp === 0){
			return 1;
		}	
		return base * power(base, exp-1); 
	}

// A - 3

	/***
	1. Estimate - first, get as close as you can by finding two perfect square roots your number is between.
	2. Divide - divide your number by one of those square roots.
	3. Average - take the average of the result of step 2 and the root.
	4. Use the result of step 3 to repeat steps 2 and 3 until you have a number that is accurate enough for you.
	*/
	
	function sqrt(n) {
		var roots = [[1,1],[2,4],[3,9],[4,16],[5,25],[6,36],[7,49],[8,64],[9,81],[10,100]];
		var start;
		var end;

		var isPerfectIndex = roots.findIndex(function(i) {
			return i[1] === n;
		});

		if(isPerfectIndex>0){
			return roots[isPerfectIndex][0];
		}

		for (var i = 0; i <= roots.length-1; i++) {
			if(roots[i][1] < n){
				start =  roots[i];
				end = roots[i+1];
			}
		}

		var result = n / start[0];
		for (var i = 1; i <2; i++) {
			result = average(result,start[0]);
		}
		return result;
	}

	// A - 4 

	//Repeated question