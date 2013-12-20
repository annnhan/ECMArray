function isFunction (val) {
    return typeof val === 'function';
}

function add(val, fun) {
    !isFunction(Array.prototype[val]) && (Array.prototype[val] = fun);
}
