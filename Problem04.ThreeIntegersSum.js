function checkForSum(args){
    args = args[0].split(" ").map(Number);
    let num1 = args[0];
    let num2 = args[1];
    let num3 = args[2];
    if(num1 + num2 === num3){
        console.log(`${Math.min(num1, num2)} + ${Math.max(num1, num2)} = ${num3}`)
    }else if(num2 + num3 === num1){
        console.log(`${Math.min(num3, num2)} + ${Math.max(num3, num2)} = ${num1}`)

    }else if(num1 + num3 === num2){
        console.log(`${Math.min(num1, num3)} + ${Math.max(num1, num3)} = ${num2}`)

    }else {
        console.log("No")
    }
}

solve(['3', '15', '2'])