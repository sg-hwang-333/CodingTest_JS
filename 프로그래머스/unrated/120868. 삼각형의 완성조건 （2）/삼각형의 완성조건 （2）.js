function solution(sides) {
    var answer = 0;
    sides.sort((a, b) => a-b);
    
    // 가장 긴 변을 기준으로
    let temp = sides[1];
    while (temp + sides[0] > sides[1]) temp--;
    answer += (sides[1] - temp);
    
    // 나머지 한 변이 가장 긴 변인 경우
    for (let i = sides[1] + 1; i < sides[0] + sides[1]; i++) answer++;
    
    return answer;
}