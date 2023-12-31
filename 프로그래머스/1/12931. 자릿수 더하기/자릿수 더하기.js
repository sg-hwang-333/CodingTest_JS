function solution(n)
{
    var answer = 0;

    for (let x of n.toString()) {
        answer += parseInt(x);
    }

    return answer;
}