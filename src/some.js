add('some', function (fun, _this) {
    for (var i = 0, len = this.length; i < len; i++) {
        if( fun.call(_this || GLOBAL, this[i], i, this) ) {
            return true;
        };
    }
    return false;
});
