Function.prototype.myThrottle = function(interval) {
    let tooSoon = false;
    if (!tooSoon) {
        tooSoon = true;
        setTimeout(tooSoon(), interval)
        this(...args)
    }

}

Function.prototype.myDebounce = function(interval) {
       
}