function solution(strArr) {
    return strArr.map((e, i) => {
        if ((i+1) % 2 == 0) return e.toUpperCase();
        else return e.toLowerCase();
    });
}