// my_string은 "3 + 5"처럼 문자열로 된 수식입니다. 문자열 my_string이 매개변수로 주어질 때, 
// 수식을 계산한 값을 return 하는 solution 함수를 완성해주세요.
const test1 = (my_string) => {
    return eval(my_string);
}


// 영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다. 
// 문자열 numbers가 매개변수로 주어질 때, 
// numbers를 정수로 바꿔 return 하도록 solution 함수를 완성해 주세요.
const test2 = (numbers) => {
    let numArr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let numbersArr = numbers.split('');
    let sum = 0; 
    let answer = [];
    for(let i=0; i<numbersArr.length; i++){
        answer.push(numbersArr[i]); 
        let current = answer.join(''); 
        if(numArr.includes(current)) { 
            sum = sum * 10 + numArr.indexOf(current);
            answer = [];
        }
    }
    return sum;
}


// 순서쌍이란 두 개의 숫자를 순서를 정하여 짝지어 나타낸 쌍으로 (a, b)로 표기합니다. 
// 자연수 n이 매개변수로 주어질 때 두 숫자의 곱이 n인 자연수 순서쌍의 개수를 return하도록 solution 함수를 완성해주세요.
const test3 = (n) => {
    let answer = 0;
    for(let i = 1; i <= Math.sqrt(n); i++) {
        if(n % i === 0) {
            let divisor2 = n / i;
            if(i !== divisor2) answer += 2;
            else answer++;
        }
    }
    return answer;
}


// 중앙값은 어떤 주어진 값들을 크기의 순서대로 정렬했을 때 가장 중앙에 위치하는 값을 의미합니다.
// 예를 들어 1, 2, 7, 10, 11의 중앙값은 7입니다. 
// 정수 배열 array가 매개변수로 주어질 때, 중앙값을 return 하도록 solution 함수를 완성해보세요.
const test4 = (array) => {
    let arr = array.sort((a, b) => a - b);
    return arr[Math.floor(array.length/2)];
}


// 정수 배열 array가 매개변수로 주어질 때, 
// 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.
const test5 = (array) => {
    const max = Math.max(...array); 
    const index = array.indexOf(max); 
    return [max, index];
}