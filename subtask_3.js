function sum(a, b) {
    if (typeof a !== 'number' && typeof b !== 'number') {
        throw new Error("Operands are not numbers");
    } else if (typeof a !== 'number') {
        throw new Error("The left operand is not number");
    } else if (typeof b !== 'number') {
        throw new Error("The right operand is not number");
    } else {
        return a + b;
    }
}

// Exemples d'utilisation :
try {
    console.log(sum(2, 3)); // Résultat attendu : 5
    console.log(sum('2', 3)); // Erreur: The left operand is not number
    console.log(sum(2, '3')); // Erreur: The right operand is not number
    console.log(sum('2', '3')); // Erreur: Operands are not numbers
} catch (error) {
    console.error(error.message);
}