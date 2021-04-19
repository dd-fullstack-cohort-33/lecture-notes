// 1. declare function sumAllPositiveFactors argument value
function sumAllPositiveNumbers(number) {
    // 2. enforce that value is positive
    const newNumber = Math.abs(number)
    // 3. declare accumulator and make it equal 0
    let accumulator = 0;
// 4. for i equals 1; stop at i is less than or equal to number; every loop i equals i plus 1;
    for (let i = 0; i <= newNumber; i++) {
        // 5. if i divides equally into number
        // - accumulator equals accumulator + i
        if(number % i === 0) {
            accumulator = accumulator + i
        }
    }
    // 6. return accumulator
    return accumulator;
}

console.log(sumAllPositiveNumbers(12))