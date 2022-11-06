function solution(array) {
    var answer = [];
    let 최댓값 = Math.max(...array)
    return [최댓값, array.indexOf(최댓값)];
}