function solution(code) {
    var ret = '';
    let mode = 0;
    
    
    for (let idx in code) {
        if (code[idx] === "1") {
            mode = (mode == 1 ? 0 : 1);
            continue;
        }
        
        if (mode == 0) {
            if (idx % 2 == 0) ret += code[idx];
        } else {
            if (idx % 2 == 1) ret += code[idx];
        }
    }
    
    return ret == '' ? "EMPTY" : ret;
}