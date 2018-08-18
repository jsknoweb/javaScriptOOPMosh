
// You shoud put methods on the prototype as an optimization
// technique. So igf you're working with a large number of 
// objects of the same type, you don't want to have multiple
// copies of the same methods in  memory.

// If contrary you only have one instance of StopWatch for
// example, you don't need to do that.

// Putting those methods on the prototype will lead to another
// issue, you will not able to access private instance members

// Private instance property
// Cannot be used outside StopWatch function.
let startTime, endTime;

// Public instance property
// Can be used outside Circle function.
this.radius;

// So the solution in this case is declare startTime, endTime,..
// as instance public read-only properties; and use them in the
// prototype member with this accessor.

// RESULT REALLY REALLY BAD IDEA

// PREMATURE OPTIMIZATION IS THE ROOT OF ALL EVILS !!!