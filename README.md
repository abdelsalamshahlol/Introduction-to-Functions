# Introduction-to-Functions
Week 1 - Introduction to Functions
### Basic Requirments

1. In the console on the blank index.html page, try the following and verify that the results match your expectations:

```
 square(10) + 2 ; 
 square(100) + square(77) ; 
 square(8 / 2) ; 
 square(2 + 17) ; 
 square(square(15));
```

2.Write a sentence (in simple English) describing how square(square(15)) is evaluated.

3.Rename the parameter to square in your main.js file to monkey, and rename the uses of that parameter in the body to monkey as well. Will the function square still work? Why or why not?

4.What is wrong with the following definitions of square? Write a sentence or two describing the issue(s); then, try copying the incorrect examples into a console one-at-a-time and observing the error(s) generated (you may have to attempt to invoke the functions to see the error). What errors are produced (if any) for each incorrect version? Do the errors make sense?

```
 function square(monkey) { 
 return x * x ; 
 } 
 function square(5) { 
 return 5 * 5 ; 
 } 
 function square('x') { 
 return 'x' * 'x' ; 
 }
```

5.Fix the invalid syntax in the following functions (you can copy and paste these invalid definitions into main.js and then edit them there):

```
 func square1(x { 
 return x * x ; 
 } 
 functionsquare2 x) 
 return x * x ; 
 } 
 function (x) square3 { 
 return x * x;
```

6.The following functions have poor style -- fix these style problems using the original version of square as a reference

```
 function square(x){return x*x; } 
 function square (x) { return x *x; 
 } 
 function square(x) 
 { 
 return x * x; 
 }
```

7.Complete the function cube that returns the cube of x:

```
 function cube(x) { 
 // your code here 
 }
```

8.Complete the function fullName that should take two parameters, firstName and lastName, and returns the firstName and lastName concatenated together with a space in between.

```
 //don't forget the parameters! 
 function fullName() { 
 // your code here 
 } 
 fullName('Nancy', 'Ajram') // => 'Nancy Ajram'
```

9.Write a function average that takes two numbers as inputs and returns the average of those numbers.

10.Write a function greeter that takes a name as an argument and greets that name by returning something along the lines of 'Hello, <name>!'

11.Using the document found at this page 'http://www.gbcnv.edu/documents/ASC/docs/00000005.pdf', translate the first page of geometric formulas into JavaScript functions. As an example, a function to compute the perimeter of a rectangle might look like this:

```
function perimeterRect(l, w) { 
 return 2 * (l + w) 
 }
```

NOTE: JavaScript provides some useful mathematical functions and constants built into the language that you'll need for this exercise. The two that we'll be making use of are: Math.PI; // => 3.141592653589793 ; Math.sqrt(256); // => 16 

.

![](/images/geometry.png)

### More Practice

1.Translate the rest of the geometric formulas found here into JavaScript functions.

### Advanced

1.Compound interest can be calculated with the formula: F: future value, P: present value, r: nominal interest rate, n: compounding frequency, t: time

![](/images/formula.png)

Write a function futureValue that can be used to calculate the future value of a quantity of money using compound interest. Use the function to calculate what the future value of $1700 (P = 1700) deposited in a bank that pays an annual interest rate of 4.7% (i = 0.047), compounded quarterly (n = 4) after 6 years (t = 6) (you can use Math.pow to do exponentiation).

2. Write a power function that accepts the parameters base and exponent and returns the result. Replace square and cube with the power function you just wrote. Do not use Math.pow

3.Write your own square-root function called sqrt that accepts a number parameter and returns an approximate square root. Square-root approximations make use of averages. Be sure to use the average function you previously wrote. The first version of your square root function should perform no more than 3 successive averages.

4.Read and Learn about the following KeyWords in detail and make sure your partner understands them

List of Keywords: - complied vs. interpreted language - high-level language - weakly typed - v8 engine - Javascript - Why Javascript - Functional based language - object Oriented language