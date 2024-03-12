function solution(s) {
    let answer = [];
    
    for (let i in s.split('')) {
        answer.push(s.charCodeAt(i));
    } 
    
    answer.sort((a,b) => b - a).join('');
    
    return String.fromCharCode(...answer); 
}