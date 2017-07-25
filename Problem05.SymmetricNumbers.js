function printSymmetricNumbers(args){

    function checkIfSymmetric(num) {
        let numberAsString = num.toString();
        for(let i = 0; i < numberAsString.length / 2; i++){
            if(numberAsString[i] !== numberAsString[numberAsString.length - 1 - i]){
                return false;
            }
        }
        return true;
    }

    let number = Number(args[0]);
    let result = '';
    for(let i = 1; i <= number; i++){
        if(checkIfSymmetric(i))
            result += `${i}` + " ";
    }

    console.log(result);
}


printSymmetricNumbers(['750']);