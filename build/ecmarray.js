/* https://github.com/hanan198501/ECMArray.git */
;(function (GLOBAL, Array, undefined) {

function isFunction (val) {
    return typeof val === 'function';
}

function add(val, fun) {
    !isFunction(Array.prototype[val]) && (Array.prototype[val] = fun);
}

!isFunction(Array.isArray) && (Array.isArray = function (val) {
    return Object.prototype.toString.call(val) === '[object Array]';
});

add('forEach', function (fun, _this) {
    for (var i = 0, len = this.length; i < len; i++) {
        fun.call(_this || GLOBAL, this[i], i, this);
    }
});

add('map_', function (fun, _this) {
    var r = [];
    for (var i = 0, len = this.length; i < len; i++) {
        r.push(fun.call(_this || GLOBAL, this[i], i, this));
    }
    return r;
});

})(this, Array);