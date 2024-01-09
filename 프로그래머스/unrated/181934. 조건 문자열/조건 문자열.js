function solution(ineq, eq, n, m) {
    var comparison = false;
    
    if (ineq === ">" && eq === "=") comparison = (n >= m);
    else if (ineq === "<" && eq === "=") comparison = (n <= m);
    else if (ineq === ">" && eq === "!") comparison = (n > m);
    else comparison = (n < m);
    
    return comparison ? 1 : 0;
}