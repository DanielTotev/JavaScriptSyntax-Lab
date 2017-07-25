function findLargestThreeNumbers(args) {
    args = args.map(Number).sort((a, b) => b -a );
    let numbersToTake = Math.min(3 , args.length);
    for(let i = 0; i < numbersToTake; i++){
        console.log(args[i]);
    }
}


findLargestThreeNumbers(['10', '30', '15', '5', '20', '50'])