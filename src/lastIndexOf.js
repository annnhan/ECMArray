add('lastIndexOf', function (val) {
    for (var i = this.length - 1; i >= 0; i--) {
        if (val === this[i]) {
            return i;
        }
    }
    return -1;
});
