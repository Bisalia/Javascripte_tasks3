function getMinimalCVS(array) {
    const history = [array.slice()];

    function head() {
        return history[history.length - 1].slice();
    }

    function push(item) {
        if (history.length === 0) {
            throw new Error("Array is empty");
        }
        const lastVersion = history[history.length - 1];
        const newArray = lastVersion.concat(item);
        history.push(newArray);
    }

    function pop() {
        if (history.length === 0) {
            throw new Error("Array is empty");
        }
        const lastVersion = history.pop();
        const poppedItem = lastVersion.pop();
        if (lastVersion.length > 0) {
            history.push(lastVersion);
        }
        return poppedItem;
    }

    return {
        head,
        history: () => history.slice(),
        push,
        pop
    };
}

// Exemple d'utilisation :
const cvs = getMinimalCVS(['a', 'b', 'c']);

console.log(cvs.head());    // ['a', 'b', 'c']
console.log(cvs.pop());     // 'c'

cvs.push('d');
cvs.push('e');

console.log(cvs.head());    // ['a', 'b', 'd', 'e']
console.log(cvs.history());
/**
 * [
 *   ['a', 'b', 'c'],
 *   ['a', 'b'],
 *   ['a', 'b', 'd'],
 *   ['a', 'b', 'd', 'e']
 * ]
 */