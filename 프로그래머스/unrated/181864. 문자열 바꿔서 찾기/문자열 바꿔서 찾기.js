function solution(myString, pat) {
    var answer = 0;
    myString = myString.split('').map((v) => (v === "A" ? "B" : "A")).join('');
    
    if (myString.includes(pat)) return 1;
    else 0;
    
    return answer;
}