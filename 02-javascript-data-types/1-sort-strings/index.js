/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {

    let newArr = [...arr];

    if (param === 'desc') {
        newArr.sort((a, b) => b.localeCompare(a, ['ru', 'en']));

        newArr.sort(function(a, b) {
            if (a.toLocaleLowerCase() === b.toLocaleLowerCase()) return a.localeCompare(b, ['ru', 'en']);
        });

        return newArr;
    }

    newArr.sort((a, b) => a.localeCompare(b, ['ru', 'en']));

    newArr.sort(function(a, b) {
        if (a.toLocaleLowerCase() === b.toLocaleLowerCase()) return b.localeCompare(a, ['ru', 'en']);
    });

    return newArr;
}
