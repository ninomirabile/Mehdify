(function() {

    function mehdify(x) {
        // Add your code here
        //Make the array from the given number
        
        var modifiedX = x.toString().split('');        
        var abc = -1;
        for (var i = modifiedX.length - 1; i > 0; i--) {
            if (+modifiedX[i] > +modifiedX[i - 1]) {
                abc = i - 1;
                break;
            }
        }       
        if (abc != -1)
        {
            var newAbc = modifiedX.splice(abc);            
            var tmp = newAbc.splice(0, 1)[0];
             
            var y = null, min = null;
            for (var i = 0; i < newAbc.length; i++) {
                if (newAbc[i] > tmp) {
                    if (y == null || newAbc[i] < y) {
                        y = newAbc[i];
                        min = i;
                    }
                }
            }
        }
        if (min == null) return x;
        newAbc.splice(min, 1);
        newAbc.push(tmp);
        newAbc = newAbc.sort();       
        return +modifiedX.concat([y]).concat(newAbc).join('');;
    }
    
    // required to export for tests
    // DO NOT TOUCH
    var exports = module.exports;
    module.exports = mehdify;
})();
