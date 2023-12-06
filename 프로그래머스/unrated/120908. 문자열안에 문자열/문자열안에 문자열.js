function solution(str1, str2) {
    var answer = 2;
    str1.split("");
    str2.split("");
    
    
    let count = 0;
    
    for (let p1 = 0; p1 < str1.length; p1++) {
        if (str1[p1] === str2[0]) {
            for (let p2 = 0; p2 < str2.length; p2++) {
                if (str1[p1+p2] == str2[p2]) count++;
            }
            if (count == str2.length) return 1;
            else count = 0;
        }
    }
    return answer;
}