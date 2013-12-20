add('map', function (fun, _this) {
    var r = [];
    this.forEach(function (item, index, array) {
        r.push(fun.call(this, item, index, array));
    }, _this);
    return r;
});
