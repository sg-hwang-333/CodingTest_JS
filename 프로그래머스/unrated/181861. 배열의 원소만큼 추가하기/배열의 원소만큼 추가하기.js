function solution(arr) {
    var x = [];
    
    for (let e of arr) {
        for (let i = 0; i < e; i++) {
            x.push(e);
        }
    }
    
    return x;
}