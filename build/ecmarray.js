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

add('map', function (fun, _this) {
    var r = [];
    this.forEach(function (item, index, array) {
        r.push(fun.call(this, item, index, array));
    }, _this);
    return r;
});

add('filter', function (fun, _this) {
    var r = [];
    this.forEach(function (item, index, array) {
        fun.call(this, item, index, array) && r.push(array[index]);
    }, _this);
    return r;
});

add('every', function (fun, _this) {
    for (var i = 0, len = this.length; i < len; i++) {
        if( !fun.call(_this || GLOBAL, this[i], i, this) ) {
            return false;
        };
    }
    return true;
});

add('some', function (fun, _this) {
    for (var i = 0, len = this.length; i < len; i++) {
        if( fun.call(_this || GLOBAL, this[i], i, this) ) {
            return true;
        };
    }
    return false;
});

add('reduce', function (fun, defaultValue) {
    var r, i, len = this.length;
    if (typeof defaultValue === 'undefined') {
        r = this[0];
        i = 1;
    } else {
        r = defaultValue;
        i = 0;
    }
    for (;i < len; i++) {
        r = fun(r, this[i]);
    }
    return r;
});

add('reduceRight', function (fun, defaultValue) {
    var r, i, len = this.length;
    if (typeof defaultValue === 'undefined') {
        r = this[len - 1];
        i = len - 2;
    } else {
        r = defaultValue;
        i = len - 1;
    }
    for (;i >= 0; i--) {
        r = fun(r, this[i]);
    }
    return r;
});

add('indexOf', function (val) {
    for (var i = 0, len = this.length; i < len; i++) {
        if (val == this[i]) {
            return i;
        }
    }
    return -1;
});

add('lastIndexOf', function (val) {
    for (var i = this.length - 1; i >= 0; i--) {
        if (val === this[i]) {
            return i;
        }
    }
    return -1;
});


})(this, Array);