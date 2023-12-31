function solution(s){
    let chk_p = 0, chk_y = 0;
    
    for (let x of s.toLowerCase()) {
        if (x == "p") chk_p++;
        else if (x == "y") chk_y++;
    }

    return chk_p === chk_y ? true : false;
}