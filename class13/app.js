 // 1. Write a js program to find cube of any number using function.?


        // function cube () {
        //     var number = prompt("Enter any number")
        //     var result = number* number* number ; 
        //     document.write( "cube" + "<br>" + result )
        // }

        // cube()

        // 2. Write a js program to find diameter, circumference and area of circle using functions.?


        // function diameterOfcircle (r){
        //     return 2 * r ;
        // }


        // function areaOfcircle (r) {
        //     return Math.PI * r * r ;  
        // }



        // function areaOfcircumference (r) {
        //     return 2 * Math.PI * r ;
        // }

        // function main () {
        //     let r = prompt ("Enter radius of circle")
        //     let diameter = diameterOfcircle (r);

        //     document.write("diameter of circle is" + "<br>" + "<br>"+ diameter + "<br>" + "<br>")


        //     let area = areaOfcircle (r)
        //     document.write ("area of circle is" + "<br>" + "<br>"  + area + "<br>" + "<br>" )

        //     let circumference = areaOfcircumference (r)
        //     document.write ( "Area of circumference is"  + "<br>" + "<br>" +  circumference + "<br>" )
        // }

        // main ()



        // 3. Write a js program to find maximum and minimum between two numbers using functions.?



        // function maxNumminNum () {
        //     var a = prompt ("Enter number 1")
        //     var b = prompt("Enter number 2")

        //     if (a>b) {
        //         document.write(a)
        //     }

        //     else if (a<b) {
        //         document.write(b + "")
        //     }

        //     else {
        //         document.write("not maximam and not minimum number is equal")
        //     }
        // }

        // maxNumminNum ()


        // 4. Write a js program to check whether a number is even or odd using functions.?

        // function checkFunction () {
        //     i = 1
        //     while(i <=100) {
        //         i++;

        //         var i = prompt("Enter any number ")

        //         if (i % 2 ==0) {

        //             document.write (i + "<br>" + "number is even")
        //         }

        //         else {
        //             document.write ( + "<br>" + "number is odd")
        //         }

        //     }

        // }

        // checkFunction()

        // 5. Write a js program to check whether a number is prime, Armstrong or perfect number using functions.?


        // function isPrime(num) {
        //     num <= 1
        //     for (let i = 2; i <= Math.sqrt(num); i++) {
        //         if (num % i === 0) {
        //             document.write("")
        //         }
        //     }
        //     return true;
        // }

        // function isArmstrong(num) {
        //     var digits = num.toString().split('');
        //     var numDigits = digits.length;
        //     let sum = 0;
        //     for (let digit of digits) {
        //         sum += Math.pow(parseInt(digit), numDigits);
        //     }
        //     return sum === num;
        // }

        // function isPerfect(num) {
        //     let sum = 0;
        //     for (let i = 1; i <= num / 2; i++) {
        //         if (num % i === 0) {
        //             sum += i;
        //         }
        //     }
        //     return sum === num;
        // }


        // function testNumber() {
        //     let num = parseInt(prompt("Enter any number"))
        //     let prime = isprime(num)
        //     document.write("diameter of circle is" + "<br>" + "<br>" + prime + "<br>" + "<br>")

        //     let Armstrong = isArmstrong(num)
        //     document.write("diameter of circle is" + "<br>" + "<br>" + Armstrong + "<br>" + "<br>")

        //     let perfect = isPerfect(num)
        //     document.write("diameter of circle is" + "<br>" + "<br>" + perfect + "<br>" + "<br>")
        // }

        // testNumber()



        // 6. Write a js program to find all prime numbers between given interval using functions.?


        // function isPrime(num) {
        //     if (num <= 1)

        //         return false;

        //     if (num <= 3)

        //         return true;

        //     if (num % 2 === 0 || num % 3 === 0) return false;

        //     for (let i = 5; i * i <= num; i += 6) {
        //         if (num % i === 0 || num % (i + 2) === 0)
        //             return false;
        //     }

        //     return true;
        // }

        // isprime()


        // 7. Write a js program to print all strong numbers between given interval using functions.?

        // function printStrongNumber (start ,end) {
        //     for (i = start ; i <=end ; i ++) {

        //         if (sumOfFactorialOfDigits(i) == i) {
        //             document.write(i)
        //         }
        //     }
        // }

        // printStrongNumber(1,1000)



        // 8. Write a js program to print all Armstrong numbers between given interval using functions.?


        // function printArmstrongNumbers(start =100, end=1000) {
        //     document.write(`Armstrong numbers between ${start} and ${end}:`);
        //     for (let i = start; i <= end; i++) {
        //         if (isArmstrong(i)) {
        //             document.write(i);
        //         }
        //     }
        // }

        // printArmstrongNumbers(100,1000)


        // 9. Write a js program to print all perfect numbers between given interval using functions.?

        

// function is_perfect(number) {
     
//     var temp = 0;
//     for (var i = 1; i <= number / 2; i++) {

//       if (number % i === 0) {
    
//         temp += i;
//       }
//     }
  
//     if (temp === number && temp !== 0) {

//       console.log("It is a perfect number.");
//     } else {
    
//       console.log("It is not a perfect number.");
//     }
//   }
  
  
//   is_perfect(28); 



// 10. Write a js program to find power of any number using function.?

// function power () {

//     let n = prompt("Enter base number")
//     let i = prompt("Enter exponent number")
    
//     result = Math.pow(n,i) ;
    
//     document.write(result)
    
//     }
//     power()


// 11. Write a js program to print all natural numbers between 1 to n using function.?


// function printNaturalNumber () {
//     let i = 0 ;
//     while (i<=100) {
//         document.write(i + "<br>" + "Natural Numbers")
//         i ++ ;
//     }
// }
// printNaturalNumber()


// 12. Write a js program to print all even or odd numbers in given range using function.?


// function printEvenOrOdd() {
//     let i = 1 ;
//     while (i <=100) {
//         if ( i % 2 ==0) {
//             document.write(+ "<br>" + i)
//         }

//         else if (i % 2 !==0) {
//             document.write("number is odd" + "<br>" + i)
//         }
//     }
// }

// printEvenOrOdd()


// 13. Write a js program to find sum of all natural numbers between 1 to n using function.?


// function sumOfnatural () {
//     let i = 1
//     sum = 0
//     while ( i<=100) {

//         sum = sum + i ;
//         i ++ ;
//         document.write ( sum + "<br>")

//     }
// }
// sumOfnatural ()


// 14. Write a js program to find sum of all even or odd numbers in given range using function.?


// function sumOfEvenOrOdd () {
//     let i = 0 ;
//     sum = 0

//     while (i <=100) {
//         if(i % 2 == 0) {
//             sum += i ;
//             document.write (+ "<br>" + i)
//         }

//         else if (i % 2 !==0) {
//             sum +=i ;
//             document.write(+ "<br>" + i)
//         }
//     }
// }



// 15. Write a js program to find reverse of any number using function.?

// function reverseNumber (num) {

//         let  reverse = 0 
//         while (num>0) {

//                 reverse = (reverse * 10) + (num % 10 )
//                 num = math.floor (num / 10) 
//         }

//         document.write (reverse)


// }

// reverseNumber (12345)


// 16. Write a js program to check whether a number is palindrome or not using function.?


// function isPalindrome(str) {
// 	let j = str.length - 1
// 	for (let i = 0; i < str.length / 2; i++) {
// 		if (str[i] != str[j]) {
// 			return false;
// 		}
// 		j--;
// 	}
// 	return true;
// }

// let str = "racecar";

// console.log(isPalindrome(str));


// 17. Write a js program to find sum of digits of a given number using function.?


// function sum_Of_Digits(n) {

//   if (n < 0) n = -n;
  
//   let result = 0;

//   while (n > 0) {
//     result += n % 10; 
//     n = Math.floor(n / 10); 
//   }

//   document.write (result)
// }

// document.write(sum_Of_Digits(6098)); // Output: 23

// document.write(sum_Of_Digits(2546)); // Output: 17

// 18. Write a js program to find factorial of any number using function.?



// function factorial(n){
//         let answer = 1;
//         if (n == 0 || n == 1){
//           return answer;
//         }
//         else if(n > 1){
//           for(var i = n; i >= 1; i--){
//             answer = answer * i;
//           }
//           return answer;
//         }
//         else{
//           return "number has to be positive."
//         }  
//       }
//       let n = 4;
//       answer = factorial(n)
//       console.log("Factorial of " + n + " : " + answer);


// 19. Write a js program to generate nth Fibonacci term using function.?

// function fibonacci (n) {
//     a = 0
//     b = 1
//     if (n===0) {
//         document.write(a)
//     }

//     for (i = 2 ; i<=n ; i++) {
//         let c = a+b ;
//         a = b ;
//         c = b
//     }

//     document.write()


// }


// 20. Write a js program to find GCD (HCF) of two numbers using function.?


// let hcf;
// const number1 = 20;
// const number2 = 30;

// for (let i = 1; i <= number1 && i <= number2; i++) 
// {

//     if( number1 % i == 0 && number2 % i == 0) 
//     {
//         hcf = i;
//     }
// }
// console.log('HCF of ',(number1),(number2), '=' ,(hcf));




        // 21. Write a js program to find LCM of two numbers using function.?


// function LCM (a,b) {
//     let c = (a * b) / gcd (a , b) ;
//     document.write (c)
// }        

// LCM (37 , 40)





        // 22. Write a js program to display all array elements using function.?

        // function displayArrayElements () {
        //     let arr = [34, 56 ,56 ,45 ,71]

        //     document.write(arr)
        // }

        // displayArrayElements()





        // 23. Write a js program to find sum of elements of array using function.?


// function findSum() {
//     let arr = [23,45,67,89]
//     sum = 0
    
//     for (i = 0 ; i<arr.length ; i ++) {
//         sum += arr[i] ;
//         document.write( "sum of array elements" + "<br>" + arr)
//     }
// }

// findSum()



// 24. Write a js program to find maximum and minimum elements in array using function.?


        // function findMinMax() {
        //     let Arr = [50, 60, 20, 10, 40];

        //     let minValue = Math.min(...Arr);
        //     let maxValue = Math.max(...Arr);

        //     document.write("Minimum element is: " + "<br>" + "<br>" + minValue + "<br>" + "<br>");
        //     document.write("Maximum Element is:" + "<br>" + "<br>" + maxValue + "<br>");
        // }

        // findMinMax()





