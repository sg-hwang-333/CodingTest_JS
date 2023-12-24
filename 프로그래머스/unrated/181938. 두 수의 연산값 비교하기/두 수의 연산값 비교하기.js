function solution(a, b) {
    return (a.toString() + b.toString() >= 2 * a * b) ? parseInt(a.toString() + b.toString()) : 2 * a * b;
}