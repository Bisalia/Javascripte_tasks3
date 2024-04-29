/**
 * Arrête le temps pendant un certain nombre de millisecondes et imprime un message dans la console.
 * 
 * @param {Number} ms - Le nombre de millisecondes pendant lesquelles le temps doit être arrêté.
 */
async function theWorld(ms) {
    console.log('See this before time stops.');
    // Convert milliseconds to seconds and round up to the nearest integer
    const seconds = Math.ceil(ms / 1000);

    // Loop to display the message every second
    for (let i = seconds; i >= 0; i--) {
        console.log(`Time will continue running in ${i}`);
        await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second before continuing
    }
    console.log('See this after time resumes.');
}

console.log('Will occur before time stops');

theWorld(3000); // or await theWorld(3000) if used in an async context

console.log('Will occur after time resumes');