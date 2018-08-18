
function Stopwatch() {

    Object.defineProperty(this, 'startTime', {
        get: function() { return startTime; }
    });

    Object.defineProperty(this, 'endTime', {
        get: function() { return endTime; }
    });

    Object.defineProperty(this, 'running', {
        get: function() { return running; },
        set: function(value) { running = value; }
    });

    Object.defineProperty(this, 'duration', {
        get: function() { return duration; },
        set: function(value) { duration = value; }
    });

    this.duration = 0;
    this.running = false;

};

Stopwatch.prototype.start = function() {
    if(this.running) 
        throw new Error('Stopwatch has already started');
    
        this.running = true;
        this.startTime = new Date();
};

Stopwatch.prototype.stop = function() {
    if(!this.running)
        throw new Error('Stopwatch is not started.');
    
    this.running = false;
    this.endTime = new Date();
    
    const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
    this.duration += seconds;
};

Stopwatch.prototype.reset = function() {
    this.startTime = null;
    this.endTime = null;
    this.running = false;
    this.duration = 0;
};


let sw = new Stopwatch();
console.log(sw);
console.log(sw.duration);