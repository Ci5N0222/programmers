// 정수 배열 arr가 주어집니다. 
// arr의 각 원소에 대해 값이 50보다 크거나 같은 짝수라면 2로 나누고, 
// 50보다 작은 홀수라면 2를 곱합니다. 그 결과인 정수 배열을 return 하는 solution 함수를 완성해 주세요.
const test1 = (arr) => {
    let answer = [...arr];

    answer.forEach((item, i) => {
        if(item >= 50 && item%2 === 0) {
            answer[i] = item/2;
        } else if(50 > item && item%2 === 1) {
            answer[i] = item*2;
        } else { 
            answer[i] = answer[i];
        }
    });

    return answer;
}


// 알파벳으로 이루어진 문자열 myString이 주어집니다. 
// 모든 알파벳을 소문자로 변환하여 return 하는 solution 함수를 완성해 주세요.
const test2 = (myString) => {
    let answer = myString.toLowerCase();
    return answer;
}


// 정수 리스트 num_list와 정수 n이 주어질 때, 
// n 번째 원소부터 마지막 원소까지의 모든 원소를 담은 리스트를 return하도록 solution 함수를 완성해주세요.
const test3 = (num_list, n) => {
    let answer = [];
    for(let i=n-1; i<num_list.length; i++) answer.push(num_list[i]);
    return answer;
}


// 정수 n과 k가 주어졌을 때, 
// 1 이상 n이하의 정수 중에서 k의 배수를 오름차순으로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.
const test4 = (n, k) => {
    let answer = [];
    for(let i=1; i<=n; i++){
        i%k === 0 ? answer.push(i) : null;
    }
    return answer;
}


// 정수 리스트 num_list와 정수 n이 주어질 때, 
// num_list의 첫 번째 원소부터 n 번째 원소까지의 모든 원소를 담은 리스트를 return하도록 solution 함수를 완성해주세요.
const test5 = (num_list, n) => {
    let answer = []
    for(let i=0; i<n; i++) answer.push(num_list[i]);
    return answer;
}


// 알파벳으로 이루어진 문자열 myString이 주어집니다. 
// 모든 알파벳을 대문자로 변환하여 return 하는 solution 함수를 완성해 주세요.
const test6 = (myString) => {
    return myString.toUpperCase();
}


// 정수 리스트 num_list와 정수 n이 주어질 때, 
// num_list의 첫 번째 원소부터 마지막 원소까지 n개 간격으로 저장되어있는 원소들을 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.
const test7 = (num_list, n) => {
    let answer = [];
    for(let i=0; i<num_list.length; i= i+n) answer.push(num_list[i]);
    return answer;
}


// 정수 리스트 num_list가 주어질 때,
// 첫 번째로 나오는 음수의 인덱스를 return하도록 solution 함수를 완성해주세요. 
// 음수가 없다면 -1을 return합니다.
const test8 = (num_list) => {
    for(let i=0; i<num_list.length; i++){
        if(num_list[i] < 0) return i;
    }
    return -1;
}


// 1부터 6까지 숫자가 적힌 주사위가 두 개 있습니다. 
// 두 주사위를 굴렸을 때 나온 숫자를 각각 a, b라고 했을 때 얻는 점수는 다음과 같습니다.
// a와 b가 모두 홀수라면 a2 + b2 점을 얻습니다.
// a와 b 중 하나만 홀수라면 2 × (a + b) 점을 얻습니다.
// a와 b 모두 홀수가 아니라면 |a - b| 점을 얻습니다.
// 두 정수 a와 b가 매개변수로 주어질 때, 얻는 점수를 return 하는 solution 함수를 작성해 주세요.
const test9 = (a, b) => {
    let answer = 0;
    if(a%2 === 1 && b%2 === 1) answer = a**2 + b**2;
    else if(a%2 === 0 && b%2 === 0) answer = a-b < 0 ? -1*(a-b) : a-b;
    else answer = 2*(a + b);
    return answer;
}