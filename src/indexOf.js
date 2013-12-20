add('indexOf', function (val) {
    for (var i = 0, len = this.length; i < len; i++) {
        if (val == this[i]) {
            return i;
        }
    }
    return -1;
});
