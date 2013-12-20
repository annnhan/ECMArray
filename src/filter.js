add('filter', function (fun, _this) {
    var r = [];
    this.forEach(function (item, index, array) {
        fun.call(this, item, index, array) && r.push(array[index]);
    }, _this);
    return r;
});
