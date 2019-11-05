function add(x,y){
    return x + y;
}

add(10,20) => 30
add(100,200) => 300

var z = 100;
function add(x,y){
    return x + y + z;
}

add(10,20) => 130
z = 1000;
add(10,20) => 1030




var isPrime = (function(){
    function checkPrime(n){
        console.log('processing ', n);
        for(var i=2; i <= (n/2); i++)
            if (n % i === 0)
                return false;
        return true;
    }
    var cache = {};

    function isPrime(n){
        if (typeof cache[n] === 'undefined')
            cache[n] = checkPrime(n);
        console.log(cache);
        return cache[n];
    }

    return isPrime;
})();

var isOddOrEven = (function () {
    function checkOddOrEven(n) {
        console.log('processing ', n);
        return n % 2 == 0 ? 'even' : 'odd';
    }
    var cache = {};

    return function(n) {
        if (typeof cache[n] === 'undefined')
            cache[n] = checkOddOrEven(n);
        console.log(cache);
        return cache[n];
    }

    
})();



