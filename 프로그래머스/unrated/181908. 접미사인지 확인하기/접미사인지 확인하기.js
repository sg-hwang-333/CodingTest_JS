function solution(my_string, is_suffix) {
    if (my_string.length < is_suffix.length) return 0;
    
    let i = my_string.length - 1;
    let j = is_suffix.length - 1;
    
    while (i >= 0 && j >= 0) {
        if (my_string[i] !== is_suffix[j]) return 0;
        i--;
        j--;
    }
    
    return 1;
}