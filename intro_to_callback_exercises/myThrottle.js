Function.prototype.myThrottle = function(interval) {
    let tooSoon = true;
    if (!tooSoon) {
        tooSoon = true;
        setTimeout(tooSoon(), interval)
        this(...args)
    }

}

function helperMethod()