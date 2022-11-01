function solution(array, n) {
    var answer = 0;
    let arr = array.map(x=> Math.abs(n - x));
    let minNum = Math.min(...arr);
     return array.sort((a,b) => a-b).find(x => Math.abs(n - x) === minNum);
    
}