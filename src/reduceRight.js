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
