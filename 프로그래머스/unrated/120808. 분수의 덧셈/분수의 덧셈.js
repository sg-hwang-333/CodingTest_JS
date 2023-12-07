function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    
    let denom = Math.round(lcm(denom1, denom2));
        
    // 최소공배수
    function lcm(n1, n2) {
        while (n1 !== n2) {
            if (n1 > n2) n2 += denom2;
            else n1 += denom1;
        }
        return n1;
    }
    let numer = Math.round(numer1 * (denom / denom1)) + Math.round(numer2 * (denom / denom2));
    
    // 기약분수
    let gcdNum = gcd(numer, denom);
    numer /= gcdNum;
    denom /= gcdNum;
    
    // 최대공약수 
    function gcd(n1, n2) {
        return n2 ? gcd(n2, n1%n2) : n1;
    }
    
    answer.push(numer);
    answer.push(denom);
    
    return answer;
}