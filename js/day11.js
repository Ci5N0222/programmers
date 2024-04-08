// 정수 배열 numbers와 정수 n이 매개변수로 주어집니다. 
// numbers의 원소를 앞에서부터 하나씩 더하다가 그 합이 n보다 커지는 순간 이때까지 더했던 원소들의 합을 return 하는 solution 함수를 작성해 주세요.
const test1 = (numbers, n) => {
    let answer = 0;
    numbers.map(item => {
        if(answer <= n) answer += item;
    })
    return answer;
}


// 알파벳으로 이루어진 문자열 myString과 pat이 주어집니다. 
// myString의 연속된 부분 문자열 중 pat이 존재하면 1을 그렇지 않으면 0을 return 하는 solution 함수를 완성해 주세요.
// 단, 알파벳 대문자와 소문자는 구분하지 않습니다.
const test2 = (myString, pat) => {
    const lowerCaseMyString = myString.toLowerCase();
    const includesPat = lowerCaseMyString.includes(pat.toLowerCase());
    return includesPat ? 1 : 0;
}


// 한 자리 정수로 이루어진 문자열 num_str이 주어질 때, 
// 각 자리수의 합을 return하도록 solution 함수를 완성해주세요.
const test3 = (num_str) => {
    let answer = 0;
    for(let i=0; i<num_str.length; i++) {
        answer += parseInt(num_str[i]);
    }
    return answer;
}


// 영소문자로 이루어진 문자열 my_string과 영소문자 1글자로 이루어진 문자열 alp가 매개변수로 주어질 때, 
// my_string에서 alp에 해당하는 모든 글자를 대문자로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.
const test4 = (my_string, alp) => {
    let answer = '';
    for(let i=0; i<my_string.length; i++){
        answer += my_string[i].toLowerCase() === alp.toLowerCase() ? my_string[i].toUpperCase() : my_string[i];
    }
    return answer;
}


// 부분 문자열이란 문자열에서 연속된 일부분에 해당하는 문자열을 의미합니다. 
// 예를 들어, 문자열 "ana", "ban", "anana", "banana", "n"는 모두 문자열 "banana"의 부분 문자열이지만, 
// "aaa", "bnana", "wxyz"는 모두 "banana"의 부분 문자열이 아닙니다.
// 문자열 my_string과 target이 매개변수로 주어질 때, 
// target이 문자열 my_string의 부분 문자열이라면 1을, 
// 아니라면 0을 return 하는 solution 함수를 작성해 주세요.
const test5 = (my_string, target) => {
    return my_string.includes(target) ? 1 : 0
}


// 정수로 이루어진 리스트 num_list가 주어집니다. 
// num_list에서 가장 작은 5개의 수를 오름차순으로 담은 리스트를 return하도록 solution 함수를 완성해주세요.
const test6 = (num_list) => {
    let answer = []
    num_list.sort((a, b) => {
        return a-b;
    });
    for(let i=0; i<5; i++){
        answer.push(num_list[i]);
    }
    return answer;
}


// 문자열 myString이 주어집니다. 
// myString에서 알파벳 "a"가 등장하면 전부 "A"로 변환하고, 
// "A"가 아닌 모든 대문자 알파벳은 소문자 알파벳으로 변환하여 return 하는 solution 함수를 완성하세요.
const test7 = (myString) => {
    let answer = '';
    for(let i=0; i<myString.length; i++){
        answer += myString[i] === 'a' || myString[i] === 'A'? myString[i].toUpperCase() : myString[i].toLowerCase();
    }
    return answer;
}


// 문자열 my_string과 정수 n이 매개변수로 주어질 때, 
// my_string의 앞의 n글자로 이루어진 문자열을 return 하는 solution 함수를 작성해 주세요.
const test8 = (my_string, n) => {
    return my_string.slice(0, n);
}


// 단어가 공백 한 개로 구분되어 있는 문자열 my_string이 매개변수로 주어질 때, 
// my_string에 나온 단어를 앞에서부터 순서대로 담은 문자열 배열을 return 하는 solution 함수를 작성해 주세요.
const test9 = (my_string) => {
    let answer = my_string.split(' ');
    return answer;
}


// 아무 원소도 들어있지 않은 빈 배열 X가 있습니다. 
// 양의 정수 배열 arr가 매개변수로 주어질 때, 
// arr의 앞에서부터 차례대로 원소를 보면서 원소가 a라면 X의 맨 뒤에 a를 a번 추가하는 일을 반복한 뒤의 배열 X를 return 하는 solution 함수를 작성해 주세요.
const test10 = (arr) => {
    let answer = [];

    arr.forEach(item => {
        for(let i=0; i<item; i++) {
            answer.push(item);
        }
    })

    return answer;
}