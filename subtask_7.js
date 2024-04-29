function solutionFn(snakeCaseString) {
    // Diviser la chaîne en mots en utilisant le séparateur _
    const mots = snakeCaseString.split('_');
    
    // Transformer chaque mot, sauf le premier, en camelCase
    for (let i = 1; i < mots.length; i++) {
        mots[i] = mots[i][0].toUpperCase() + mots[i].slice(1);
    }
    
    // Joindre les mots pour former une seule chaîne et la retourner
    return mots.join('');
}

// Exemple d'utilisation :
const snakeData = 'data_en_snake_case';
const resultat = solutionFn(snakeData);
console.log(resultat); // "dataEnSnakeCase"