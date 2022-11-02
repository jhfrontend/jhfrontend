function solution(emergency) {
    
    
    let arr = [...emergency].sort((a,b) => b-a);
    return emergency.map((a,_) => arr.indexOf(a)+1);
}