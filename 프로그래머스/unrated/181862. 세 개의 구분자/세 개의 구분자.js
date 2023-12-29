function solution(myStr) {
    var answer = [];
    let temp = "";
    for (let x of myStr) {
        if (x == "a" || x == "b" || x == "c") {
            if (temp != "") answer.push(temp);
            temp = "";
        } else {
            temp += x;
        }
    }
    if (temp !== "") answer.push(temp);
    else return ["EMPTY"];
    return answer;
}