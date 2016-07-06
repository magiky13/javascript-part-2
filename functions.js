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

 

//console.log(items);

//e2

var info = [{name: "Simon", email: "simdorvi@hotmail.com"}, {name: "Sara", email: "sara@hotmail.com"}, {name: "Salalalal", email: "alolal@hotmail.com"}]
info.sort(function(a, b){
    if(a.name.length > b.name.length) {
        return -1;
        
    }
    else if (a.name.length < b.name.length){
        return 1;
    }
    else {
        return 0;
    }
});

//console.log(info)


info.sort(function(a, b){
    if(a.email > b.email) {
        return 1;
        
    }
    else if (a.email < b.email){
        return -1;
    }
    else {
        return 0;
    }
});

//console.log(info);

//e3

var numbers = [1, 4, 9, 3928392839];
var doubles = numbers.map(function(num) {
    return num * num;
});

//console.log(doubles)
//e4

var infos = [{name: "Simon", age: 66}, {name: "Sara", age: 17}];
var doubleAge = infos.map(function(infos) {
    return infos.age * infos.age;
});

//console.log(doubleAge)
//e5


var adder = function(n1,n2) {
    return n1 + n2
}

var multiplier = function(n1,n2){
    return n1 * n2
}

var subtracter = function(n1,n2)  {
    return n1 - n2
}

var divider = function(n1,n2) {
    return n1 / n2
}


function operationMaker(operation){
    
    if(operation === "add"){
        return adder;
    }
    else if(operation === "subtract"){
        return subtracter;
    }
    else if(operation === "div"){
        return divider;
    }
    else if(operation === "mult"){
        return multiplier;
    }
}

console.log(operationMaker("subtract")(4, 10))

