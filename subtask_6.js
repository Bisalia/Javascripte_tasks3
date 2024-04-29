function hitOrRun(a, b) {
    // Генерируем случайное число в промежутке [a, b]
    const randomNum = Math.floor(Math.random() * (b - a + 1)) + a;

    // Проверяем, является ли число простым
    function isPrime(num) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return num > 1;
    }

    // Если число простое, возвращаем 'run', иначе 'hit'
    return isPrime(randomNum) ? 'run' : 'hit';
}


const result = hitOrRun(1, 100);
console.log(result); // Выводит 'run' или 'hit' в зависимости от случайного числа