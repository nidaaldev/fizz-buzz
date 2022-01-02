// Fizz buzz - 100 Numbers

// 3 6 9 12... Fizz
// 5 10 15... Buzz
// 5 30 45... FizzBuzz!

for (let i = 0; i <= 100; i++) {

    if (i % 15 === 0) {
        console.log(`FizzBuzz! ${i}`)    
    } else if (i % 3 === 0) {
        console.log(`Fizz ${i}`)
        continue;
    } else if (i % 5 === 0) {
            console.log(`Buzz ${i}`)
            continue;
        }
    }
