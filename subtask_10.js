function solutionFn(number) {
    // Si le nombre est déjà un chiffre, le renvoyer
    if (number < 10) {
        return number;
    }
    
    // Tant que le nombre a plus d'un chiffre
    while (number >= 10) {
        let product = 1;
        // Multiplier chaque chiffre du nombre
        while (number > 0) {
            const digit = number % 10;
            product *= digit;
            number = Math.floor(number / 10);
        }
        // Affecter le produit au nombre pour la prochaine itération
        number = product;
    }
    
    // Renvoyer le nombre à un chiffre résultant
    return number;
}

console.log(solutionFn(4));   // Returns 4, since it's already a single-digit number
console.log(solutionFn(42));  // Returns 8, since 4 * 2 = 8
console.log(solutionFn(999)); // Returns 2, since 9 * 9 * 9 = 729, 7 * 2 * 9 = 126, 1 * 2 * 6 = 12, and finally 1 * 2 = 2