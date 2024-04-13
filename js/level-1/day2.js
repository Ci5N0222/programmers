// 문자열 my_string이 매개변수로 주어집니다. 
// my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.
const test1 = (my_string) => {
    let answer = 0;
    my_string.split('').forEach(item => {
        if(parseInt(item) > 0 && parseInt(item) < 10)
        answer += parseInt(item);
    });
    return answer;
}


// 영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다. 
// 문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 solution 함수를 완성해주세요.
const test2 = (my_string) => {
    let vowel = ['a', 'e', 'i', 'o', 'u'];
    return my_string.split('').filter(item => !vowel.includes(item)).join('');
}


// 정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다. 
// 배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.
const test3 = (numbers, direction) => {
    // let answer = [];
    // if(direction === 'left'){
    //     for(let i=1; i<numbers.length; i++){
    //         answer.push(numbers[i]);
    //     }
    //     answer.push(numbers[0]);
    // } else {
    //     answer.push(numbers[numbers.length-1]);
    //     for(let i=0; i<numbers.length-1; i++){
    //         answer.push(numbers[i]);
    //     }
    // }
    // return answer;
    if(direction === 'left') {
        return numbers.slice(1).concat(numbers[0]);
    } else { 
        return numbers.slice(-1).concat(numbers.slice(0, -1));
    }
}