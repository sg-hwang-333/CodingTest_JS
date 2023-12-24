function solution(num_list) {
    let odd = '', even = '';
    for (let x of num_list) {
        if (x % 2 == 0) even += x;
        else odd += x;
    }
    return (parseInt(odd) + parseInt(even));
}