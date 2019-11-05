function memoize(fn) {
    var cache = {};
    return function (n) {
        if (typeof cache[n] === 'undefined')
            cache[n] = fn(n);
        console.log(cache);
        return cache[n];
    }
}

var isPrime = memoize(function checkPrime(n) {
    console.log('processing ', n);
    for (var i = 2; i <= (n / 2); i++)
        if (n % i === 0)
            return false;
    return true;
});

var isOddOrEven = memoize(function checkOddOrEven(n) {
    console.log('processing ', n);
    return n % 2 == 0 ? 'even' : 'odd';
});