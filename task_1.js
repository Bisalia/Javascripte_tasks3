/**
 * Кастомная реализация метода Array.prototype.filter
 * 
 * @param {Array} array - массив
 * @param {Function} filterFn - фильтрующая функция
 * @param {Boolean} inplace - флаг "модифицируем исходный массив или нет"
 * @returns {Array} - отфильтрованный массив
 */
function filter(array, filterFn, inplace = false) {
    const result = inplace ? array : [];
    let index = 0;
    for (let i = 0; i < array.length; i++) {
        if (filterFn(array[i], i, array)) {
            if (inplace) {
                array[index++] = array[i];
            } else {
                result.push(array[i]);
            }
        }
    }
    if (inplace) {
        array.length = index;
        return array;
    } else {
        return result;
    }
}

// Exemple d'utilisation :
const numbers = [1, 2, 3, 4, 5];
const filteredNumbers = filter(numbers, num => num % 2 === 0);
console.log(filteredNumbers); // Résultat attendu : [2, 4]
console.log(numbers);/**
 * Кастомная реализация метода Array.prototype.filter
 *
 * @param {Array} array - массив
 * @param {Function} filterFn - фильтрующая функция
 * @param {Boolean} inplace - флаг "модифицируем исходный массив или нет"
 * @returns {Array} - отфильтрованный массив
 */
function filter(array, filterFn, inplace = false) {
    const result = inplace ? array : [];
    let index = 0;
    for (let i = 0; i < array.length; i++) {
        if (filterFn(array[i], i, array)) {
            if (inplace) {
                array[index++] = array[i];
            } else {
                result.push(array[i]);
            }
        }
    }
    if (inplace) {
        array.length = index;
        return array;
    } else {
        return result;
    }
}
 // numbers reste inchangé