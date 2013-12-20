add('map_', function (fun, _this) {
    var r = [];
    for (var i = 0, len = this.length; i < len; i++) {
        r.push(fun.call(_this || GLOBAL, this[i], i, this));
    }
    return r;
});