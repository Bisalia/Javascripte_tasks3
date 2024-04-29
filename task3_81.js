function isSpam(text, keywords) {
    const textLowerCase = text.toLowerCase();
    
    // Construire une expression régulière à partir des mots-clés
    const regex = new RegExp(keywords.join('|'), 'i'); // 'i' pour une recherche insensible à la casse
    
    // Vérifier si le texte contient l'expression régulière
    return regex.test(textLowerCase);
}

// Exemple d'utilisation :
const emailText = "Hey, gagnez un million de dollars facilement ! Cliquez ici !";
const keywords = ["million", "dollars", "cliquez"];

const estSpam = isSpam(emailText, keywords);
console.log(estSpam); // true, car le texte contient les mots-clés "million" et "dollars"