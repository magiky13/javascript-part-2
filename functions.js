//e1
var items = ['12345', '123', '123456789', '123456'];
items.sort(function (a, b) {
    if (a.length > b.length) {
        return -1;
    
    }
    else if (a.length < b.length) {
        return 1;
    }
    else {
        return 0;
    }
});

 

console.log(items);

