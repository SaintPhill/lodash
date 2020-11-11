function chunk(array, chunkLength=1) {
    const chunksCount = Math.ceil(array.length / chunkLength);
    let chunkIndex = 0;
    const result = []

    for (let i = 0; i < chunksCount; i++) {
        result.push([...array.slice(chunkIndex, chunkLength + chunkIndex)])
        chunkIndex += chunkLength
    }

    return result
}

function compact(array) {
    return array.filter(item => Boolean(item))
}

function concat(array, ...values) {
    const result = [...array]

    values.forEach(value => {
        if (Array.isArray(value)) {
            result.push(value[0])
        } else {
            result.push(value)
        }
    })

    return result
}

function difference(array, values) {
    const result = [];

    array.forEach(item => {
        if (!values.find(value => value === item)) {
            result.push(item)
        }
    })

    return result
}

function differenceBy(array, values, iterate) {
    const result = [];

    array.forEach(item => {
        if (!values.find(value => iterate(value) === iterate(item))) {
            result.push(item)
        }
    })

    return result
}

function differenceWith(array, values, comparator) {
    const result = [];

    array.forEach(item => {
        if (!values.find(value => comparator(value,item))) {
            result.push(item)
        }
    })

    return result
}

function drop(array, dropCount = 1) {
    return [...array.slice(dropCount, array.length)]
}

function dropRight(array, dropCount = 1) {
    return [...array.slice(0, array.length - dropCount)]
}

function dropRightWhile(array, predicate) {
    let result = [...array];

    while (true) {
        if ( result.length && predicate(result[result.length - 1])) {
            result.splice(-1, 1)
        } else {
            break;
        }
    }

    return result
}

function fill(array, value, start = 0, end = array.length - 1) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        if (i >= start && i <= end) {
            result.push(value)
        } else {
            result.push(array[i])
        }
    }

    return result
}

function findIndex(array, predicate, fromIndex = 0) {
    return array.slice(fromIndex, array.length).findIndex(predicate)
}

var users = [
    { 'user': 'pebbles',  'active': true },
    { 'user': 'pebbles',    'active': false },
    { 'user': 'pebbles', 'active': false }
];

function findLastIndex(array, predicate, fromIndex = array.length - 1) {
    let index;
    for (let i = array.length - 1; i >= fromIndex; i--) {
        if (predicate(array[i])) {
            index = i
            break;
        }
    }

    return index || -1;
}

function flatten(array) {
    const result = []

    array.forEach((i) => {
        if (Array.isArray(i)) {
            i.forEach(j => result.push(j))
        } else {
            result.push(i)
        }
    })

    return result
}

function flattenDeep(array) {
    let result = []

    function goDeep(arr) {
        arr.forEach(i => {
            if(Array.isArray(i)) {
                goDeep(i)
            } else {
                result.push(i)
            }
        })
    }
    goDeep(array)

    return result
}
