function shapeArea(arg1, arg2, arg3) {

    let type = arg1;
    let result = 0;

    if (type === 'square'){
        result = arg2 * arg2;
        console.log(result);
        
    } else if (type === 'rectangle') {
        result = arg2 * arg3;
        console.log(result.toFixed(3));
        

    } else if (type === 'circle') {
        result = Math.PI * (arg2**2);
        console.log(result.toFixed(3));
        
    } else if (type === 'triangle') {
        result = 1/2 * arg2 * arg3;
        console.log(result.toFixed(3));
        
    }
}

shapeArea("triangle",
4.5,
20
);