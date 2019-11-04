function getRandomNumbers(){
    var randomNos = [];
    for(var index = 0, count = 100; index < count; index++){
        randomNos[index] = Math.round(Math.random() * 100);
    }
    return randomNos;
}

function getStats(nos){
    var evenCount = 0,
        oddCount = 0;
    for(var index = 0, count = nos.length; index < count; index++){
        if (nos[index] % 2 === 0){
            ++evenCount;
        } else {
            ++oddCount;
        }
    }
    var stats = {
        evenCount : evenCount,
        oddCount : oddCount
    };

    return stats;
}

var randomNos = getRandomNumbers();
var stats = getStats(randomNos);
console.log('evenCount = ', stats.evenCount, ' oddCount = ', stats.oddCount);