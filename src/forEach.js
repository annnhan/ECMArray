add('forEach', function (fun, _this) {
    for (var i = 0, len = this.length; i < len; i++) {
        fun.call(_this || GLOBAL, this[i], i, this);
    }
});
