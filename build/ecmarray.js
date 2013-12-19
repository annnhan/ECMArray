/* https://github.com/hanan198501/ECMArray.git */
;(function (window, Array, undefined) {

function isFunction (value) {
    return typeof value === 'function';
}
var fn = Array.prototype;
!isFunction(Array.isArray) && (Array.isArray = function (val) {
    return Object.prototype.toString.call(val) === '[object Array]';
});

})(window, Array);