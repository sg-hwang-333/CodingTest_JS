function solution(num_list, n) {
    return num_list.map((e, i) => {
        if (i % n == 0) return e;
    }).filter(e => e != null);
}