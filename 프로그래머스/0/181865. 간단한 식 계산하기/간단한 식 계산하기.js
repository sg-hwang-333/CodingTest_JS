function solution(binomial) {
    var answer = 0;
    let [a, op, b] = binomial.split(' ');
    
    switch(op) {
        case '+': return Number(a) + Number(b);
        case '-': return Number(a) - Number(b);
        case '*': return Number(a) * Number(b);
    }
    
}