Function.prototype.myBind = function(context) {
    return () => this.call(context, undefined);
};