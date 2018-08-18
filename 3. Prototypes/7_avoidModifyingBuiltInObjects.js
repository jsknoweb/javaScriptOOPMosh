
Array.prototype.shuffle = function() {
    console.log('shuffling...');
}

const array = [];
array.shuffle();

// NEVER DO THAT
// DON'T MODIFY OBJECTS YOU DON'T KNOW !!

// BECAUSE

// 1. It's possible that tomorrow you're going to use a library
//      that has also extended the array prototype and added the 
//      shuffle  method but with a different implementation.

// 2. Also JS developers could add later on this method.