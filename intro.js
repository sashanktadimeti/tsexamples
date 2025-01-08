var vec = [1, "one", 3, true];
vec.map(function (item) {
    if (typeof item === 'number') {
        console.log("Number: ".concat(item));
    }
    else if (typeof item === 'string') {
        console.log("String: ".concat(item));
    }
    else if (typeof item === 'boolean') {
        console.log("Boolean: ".concat(item));
    }
    return item.toString();
});
