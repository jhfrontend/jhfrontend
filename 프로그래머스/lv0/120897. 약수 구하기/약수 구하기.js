function solution(n) {
    var answer = [];
    return Array(n).fill().map((_, i)=>i+1).filter(v => n % v === 0);
}