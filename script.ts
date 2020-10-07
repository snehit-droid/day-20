//CHUNK

let chunk = (ar, nu) => {
    let newarr = [];let temp = [];
    for(let i=0;i<ar.length;i++){ 
        if(i%nu == 0 && i != 0){
            newarr.push(temp);
            temp = [];
        }
        temp.push(ar[i]);
    }
    return newarr;
}

//FIND

let find = (ar, cond) => {
    for(let i=0; i<ar.length; i++){
        if(cond){
            return ar[i];
        }
    }
}

//SUM

let sum = (ar) => {
    for(let i=1; i<ar.length; i++){
        ar[0] = ar[0] + ar[i];
    }
    return ar[0];
}

//FILTER

let filter = (ar, cond) => {
    let newarr = [];
    for(let i=0;i<ar.length;i++){
        if(cond){
            newarr.push(ar[i]);
        }
    }
    return newarr;
}