function solution(n, control) {
    
    for (let x of control) {
        switch(x) {
            case "w": n++; break;
            case "s": n--; break;
            case "d": n+=10; break;
            case "a": n-=10; break;
        }
    }
    return n;
}