function solution(age) {
    var answer = '';
    let obj = {
        0: 'a',
        1: 'b',
        2: 'c',
        3: 'd',
        4: 'e',
        5: 'f',
        6: 'g',
        7: 'h',
        8: 'i',
        9: 'j'
    }
   let str = '' + age;
    for(let i = 0; i < str.length; i++){
        for (let key in obj){
            if(str[i] === key){
                answer += obj[key];
            }
        }
    }
    return answer;
}
