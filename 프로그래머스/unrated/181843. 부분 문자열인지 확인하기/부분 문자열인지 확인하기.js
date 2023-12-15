function solution(my_string, target) {
    let answer = 0;

    for (let i = 0; i < my_string.length; i++) {
        let temp = my_string.slice(i, i + target.length);

        if (temp === target) answer = 1;
    }

    return answer;
}