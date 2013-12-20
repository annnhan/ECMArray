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
