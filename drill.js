const sumOf = function(sheep) {
// Base case
if (sheep.length === 1) {
    return sheep[0] + 'All sheep jumped over the fence';
}

// General case
return sheep[0] + sumOf(sheep.slice(1)) + ': Another sheep jumps over the fence';

}


let sheep = [3, 2, 1];
console.log(sumOf(sheep))