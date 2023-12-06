function solution(my_string) {
    let answer = my_string;
    let vowels = ["a", "e", "i", "o", "u"];
    
    for (let vowel of vowels) {
        answer = answer.replaceAll(`${vowel}`, "");  
    }
    
    return answer;
}