// 정수 배열 numbers가 매개변수로 주어집니다. 
// numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.
const test1 = (numbers) => {
    let answer = numbers.sort((a, b) => b-a)
    return answer[answer.length-1]*answer[answer.length-2] < answer[0]*answer[1] ? answer[0]*answer[1] : answer[answer.length-1]*answer[answer.length-2];
}


// 문자열 my_string이 매개변수로 주어집니다. 
// my_string은 소문자, 대문자, 자연수로만 구성되어있습니다. 
// my_string안의 자연수들의 합을 return하도록 solution 함수를 완성해주세요.
const test2 = (my_string) => {
    const numbers = my_string.match(/\d+/g);
    if (numbers) {
        return numbers.reduce((acc, cur) => acc + parseInt(cur), 0);
    } else {
        return 0;
    }
}


// 문자열 my_string이 매개변수로 주어질 때, 
// my_string 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return 하도록 solution 함수를 작성해보세요.
const test3 = (my_string) => {
    const numbers = my_string.match(/\d+/g);
    if (numbers) {
        return numbers.join('').split('').map(Number).sort((a, b) => a - b);
    } else {
        return [];
    }
}
