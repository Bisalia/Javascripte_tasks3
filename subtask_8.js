function isSpam(text, keywords) {
    // Convert text to lowercase for case-insensitive comparison
    const textLowerCase = text.toLowerCase();

    // Check if the text contains at least one of the keywords
    for (let i = 0; i < keywords.length; i++) {
        const keyword = keywords[i].toLowerCase();
        if (textLowerCase.includes(keyword)) {
            return true; // The text is considered spam
        }
    }

    return false; // The text is not spam
}

const emailText = "Hey, gagnez un million de dollars facilement ! Cliquez ici !";
const keywords = ["million", "dollars", "cliquez"];

const estSpam = isSpam(emailText, keywords);
console.log(estSpam); // true, because the text contains the keywords "million" and "dollars"