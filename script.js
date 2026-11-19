function calculateSum(){
    let num1 = parseFloat(document.getElementById("sum1").value);
    let num2 = parseFloat(document.getElementById("sum2").value);
    let result1 = num1 + num2;
    document.getElementById("sum").innerHTML = `The sum is: ${result1}` ;
    


}

function calculateDifference(){
    let num1 = parseFloat(document.getElementById("diff1").value);

    let num2 = parseFloat(document.getElementById("diff2").value);

    let result2 = num1 - num2;

    document.getElementById("difference").innerHTML = `The Difference is : ${result2}`;


}

function productCalculation(){
    let num1 = parseFloat(document.getElementById("prod1").value);
    let num2 = parseFloat(document.getElementById("prod2").value);

    let result3 = num1 * num2;
    document.getElementById("product").innerHTML = `The product is : ${result3}`;

}

function divisionCalculator(){
    
    let num1 = parseFloat(document.getElementById("div1").value);
    let num2 = parseFloat(document.getElementById("div2").value);

    if(num2 === 0){
        document.getElementById("division").innerHTML = "Division by zero is not possible.";
    }else{

        let result4 = num1 / num2;
        document.getElementById("division").innerHTML = `The division is : ${result4}`;
    }


}

    function calculateNum(){
        let num1 = parseFloat(document.getElementById("num").value);

        let square = num1 * num1 ;
        let cube = num1 * num1* num1;

        document.getElementById("numResult").innerHTML = `The square is : ${square} & The cube is : ${cube}` ;


    }

    function areaOfRectangle(){
        let length = parseFloat(document.getElementById("len").value);
        let breadth = parseFloat(document.getElementById("breadth").value);

        let area = length * breadth;
        document.getElementById("areaResult").innerHTML = `The area of rectangle is : ${area}` ;
    }

    function areaOfCircle(){
        const pi = Math.PI;
        let radius = parseFloat(document.getElementById("r").value);

        let area = pi * radius * radius;
        document.getElementById("circleResult").innerHTML = `The Area of a Circle is : ${area.toFixed(2)}`;

    }

    //(°C × 9/5) + 32 = °F
    function temperatureConverter(){
        let celsius = parseFloat(document.getElementById("c").value);

        let result8 = (celsius * 9/5) + 32;

        document.getElementById("tempResult").innerHTML = `Fahrenheit is ${result8.toFixed(2)}`;
    }

    // SI = (P × R × T) / 100
    function calculateSI(){
        let principleAmt = parseFloat(document.getElementById("principle").value);
        let rateAmt = parseFloat(document.getElementById("rate").value);
        let timeLine = parseFloat(document.getElementById("time").value);

        let simpleInterest = (principleAmt * rateAmt * timeLine) / 100;

        document.getElementById("resultSI").innerHTML = `The SI is : ${simpleInterest}`;
    }

    function verificationOddEven(){
        let num = parseFloat(document.getElementById("number").value);

        if(num % 2 === 0){
            document.getElementById("resultOddEven").innerHTML = `${num} is Even`;
        }else{
            document.getElementById("resultOddEven").innerHTML = `${num} is Odd`;

        }
    }

    function verifyInteger(){
        let num = parseInt(document.getElementById("number").value);

        let result;
            
    if (isNaN(num)) {
      result = "Please enter a valid number";
    } else if (num > 0) {
      result = "Positive";
    } else if (num < 0) {
      result = "Negative";
    } else {
      result = "Zero";
    }
       document.getElementById("resultInteger").innerHTML = result;
    }

    function verifyLaregestNum(){

        let num1 = parseFloat(document.getElementById("firstNum").value);
        let num2 = parseFloat(document.getElementById("secondNum").value);

        if(num1 < num2){
            document.getElementById("resultlargestNum").innerHTML = `${num2} is Largest Number`;
        }else{
            document.getElementById("resultlargestNum").innerHTML = `${num1} is Largest Number`;

        }


        
    }

    function verifyThreeLargest(){
        let num1 = parseFloat(document.getElementById("firstNum").value);
        let num2 = parseFloat(document.getElementById("secondNum").value);
        let num3 = parseFloat(document.getElementById("thirdNum").value);

        if(num1 > num2 || num1 > num3){
            document.getElementById("resultThreeLargest").innerHTML = `${num1} is Greater`;
        }else if(num2 > num1 || num2 > num3 ){
            document.getElementById("resultThreeLargest").innerHTML = `${num2} is Greater`;
        }else{
            document.getElementById("resultThreeLargest").innerHTML = `${num3} is Greater`;
        }


    }

    function verifyEligibility(){
        let num = parseFloat(document.getElementById("age").value);

        if(num <= 18){
            document.getElementById("resultVoting").innerHTML = `${num} isn't Eligible`;
        }else{
            document.getElementById("resultVoting").innerHTML = `${num} is Eligible`;
        }
    }

    function calculateGrade(){
        let num = parseFloat(document.getElementById("marks").value);

        if(num >= 90  ){
            document.getElementById("resultGrade").innerHTML = `A Grade`;
        }else if (num < 90 && num >= 75){
            document.getElementById("resultGrade").innerHTML = `B Grade`;
        }else if (num < 75 && num >= 50 ){
            document.getElementById("resultGrade").innerHTML = `C Grade`;
        }else{
            document.getElementById("resultGrade").innerHTML = `Fail`;
        }

    }

    function verifyYear(){
        let year = parseFloat(document.getElementById("leapYear").value);

        if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
            document.getElementById("resultYear").innerHTML = `${year} is a leap year`;
        }else{
            document.getElementById("resultYear").innerHTML = `${year} is not a leap year`;
        }
    }

    function verifyDivisibility(){
        let num = parseInt(document.getElementById("divisibleNum").value);

        if(num % 5 === 0 || num % 11 === 0){
            document.getElementById("resultDivisibility").innerHTML = `${num} is divisible by 5 & 11`;
        }else{
            document.getElementById("resultDivisibility").innerHTML = `${num} is not divisible by 5 & 11`;
        }
        
    }
    
    function calculateOperator(){
        let num1 = parseFloat(document.getElementById("firstNum").value);
        let num2 = parseFloat(document.getElementById("secondNum").value);

        let operator = document.getElementById("op").value;
        console.log(operator);
        
        let output;
        switch(operator){
            case "Addition" :
                output = num1 + num2;
                break;
            case "Subtraction" :
                output = num1 - num2;
                break;
            case "Multiplication" :
                output = num1 * num2;
                break;
            case "Division" :
                
                if(num2 !== 0){
                   output =  num1 / num2;
                }else{
                    output = "Error cannot divide by zero"
                };
                break;
                default :
                output = "Invalid Error";


        };


        document.getElementById("resultOperator").innerHTML = `Total is ${output}`;
    }