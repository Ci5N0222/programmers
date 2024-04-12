// 숫자로 이루어진 문자열 t와 p가 주어질 때, 
// t에서 p와 길이가 같은 부분문자열 중에서, 
// 이 부분문자열이 나타내는 수가 p가 나타내는 수보다 작거나 같은 것이 나오는 횟수를 return하는 함수 solution을 완성하세요.
// 예를 들어, t="3141592"이고 p="271" 인 경우, 
// t의 길이가 3인 부분 문자열은 314, 141, 415, 159, 592입니다.
// 이 문자열이 나타내는 수 중 271보다 작거나 같은 수는 141, 159 2개 입니다.
const test1 = (t, p) => {
    let answer = [];
    let tLength = t.toString().length;
    let pLength = p.toString().length;
    for(let i=0; i<tLength; i++){
        let str = t.toString().slice(i, i+pLength);
        if(str.length === pLength) answer.push(str);
    }
    let count = 0;
    answer.forEach(item => {
        if(parseInt(item) <= parseInt(p)) count++
    });

    return count;
}


// 자연수 n이 매개변수로 주어집니다.
// n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return 하도록 solution 함수를 완성해주세요. 답이 항상 존재함은 증명될 수 있습니다.
const test2 = (n) => {
    let answer = 0
    for(let i=2; i<n; i++){
        if(n%i === 1) {
            answer = i;
            break;
        }
    }
    return answer;
}


// 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. 
// numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.
const test3 = (numbers) => {
    let answer = 0;
    numbers.forEach(item => answer += item);
    return 45 - answer;
}


// 어떤 정수들이 있습니다. 
// 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 
// 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 
// 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.
const test4 = (absolutes, signs) => {
    let answer = 0;
    signs.forEach((item, i) => {
        if(item) answer += absolutes[i];
        else answer -= absolutes[i];
    });
    return answer;
}


// 길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다. 
// a와 b의 내적을 return 하도록 solution 함수를 완성해주세요.
// 이때, a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1] 입니다. (n은 a, b의 길이)
const test5 = (a, b) => {
    let answer = 0;
    a.forEach((item, i) => {
        answer += item*b[i];
    })
    return answer;
}


// 함수 solution은 정수 x와 자연수 n을 입력 받아, 
// x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 
// 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요
const test6 = (x, n) => {
    let answer = [];
    let num = 0;
    while(answer.length < n){
        num += x;
        answer.push(num);
    }
    return answer;
}


// 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.
const test7 = (arr) => {
    let answer = 0;
    arr.forEach(item => answer += item);
    return answer/arr.length;
}


// 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.
const test8 = (num) => {
    return num%2 === 0 ? "Even" : "Odd";
}


// 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 
// 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 
// 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.
const test9 = (x) => {
    let sum = 0;
    x.toString().split('').forEach(item => sum += parseInt(item));
    return x%sum === 0 ? true : false;
}


// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.
const test10 = (n) => {
    return n.toString().split('').reduce((acc, curr) => acc + parseInt(curr), 0);
}