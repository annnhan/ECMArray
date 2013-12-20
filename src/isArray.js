!isFunction(Array.isArray) && (Array.isArray = function (val) {
    return Object.prototype.toString.call(val) === '[object Array]';
});
