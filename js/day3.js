// 길이가 같은 두 문자열 str1과 str2가 주어집니다.
// 두 문자열의 각 문자가 앞에서부터 서로 번갈아가면서 한 번씩 등장하는 문자열을 만들어 return 하는 solution 함수를 완성해 주세요.
const test1 = (str1, str2) => {
    let answer = '';

    for(let i=0; i<str1.length; i++){
        answer += str1[i] + str2[i];
    }
    return answer;
}


// 문자들이 담겨있는 배열 arr가 주어집니다. 
// arr의 원소들을 순서대로 이어 붙인 문자열을 return 하는 solution함수를 작성해 주세요.
const test2 = (arr) => {
    let answer = '';
    arr.map(item => answer += item);
    return answer;
}


// 문자열 my_string과 정수 k가 주어질 때, 
// my_string을 k번 반복한 문자열을 return 하는 solution 함수를 작성해 주세요.
const test3 = (my_string, k) => {
    let answer = '';
    answer = my_string.repeat(k);
    return answer;
}


/**
 * 연산 ⊕는 두 정수에 대한 연산으로 두 정수를 붙여서 쓴 값을 반환합니다. 예를 들면 다음과 같습니다.
    12 ⊕ 3 = 123
    3 ⊕ 12 = 312
    양의 정수 a와 b가 주어졌을 때, a ⊕ b와 2 * a * b 중 더 큰 값을 return하는 solution 함수를 완성해 주세요.
    단, a ⊕ b와 2 * a * b가 같으면 a ⊕ b를 return 합니다.
 */
const test4 = (a, b) => {
    let answer = 0;
    const num = parseInt(a.toString() + b.toString());
    const mul = 2 * a * b;
    answer = num >= mul ? num : mul;
    return answer;
}


// 정수 num과 n이 매개 변수로 주어질 때, 
// num이 n의 배수이면 1을 return n의 배수가 아니라면 0을 return하도록 solution 함수를 완성해주세요.
const test5 = (num, n) => {
    let answer = 0;
    answer = num%n === 0 ? 1 : 0;
    return answer;
}


// 정수 number와 n, m이 주어집니다. 
// number가 n의 배수이면서 m의 배수이면 1을 아니라면 0을 return하도록 solution 함수를 완성해주세요.
const test6 = (number, n, m) => {
    let answer = 0;
    answer = number%n === 0 && number%m === 0 ? 1 : 0;
    return answer;
}


// 양의 정수 n이 매개변수로 주어질 때, 
// n이 홀수라면 n 이하의 홀수인 모든 양의 정수의 합을 return 하고 
// n이 짝수라면 n 이하의 짝수인 모든 양의 정수의 제곱의 합을 return 하는 solution 함수를 작성해 주세요.
const test7 = (n) => {
    let answer = 0;
    for(let i=n; i > 0; i=i-2){
        i%2 === 0 ? answer += (i*i)  : answer += i
    }
    return answer;
}


// 두 문자열 ineq와 eq가 주어집니다. ineq는 "<"와 ">"중 하나고, eq는 "="와 "!"중 하나입니다. 
// 그리고 두 정수 n과 m이 주어질 때, n과 m이 ineq와 eq의 조건에 맞으면 1을 아니면 0을 return하도록 solution 함수를 완성해주세요.
const test8 = (ineq, eq, n, m) => {
    let answer = false;
    // eval(): 문자열에 포함된 JavaScript의 코드를 실행하는데 사용
    eq === '!' ? answer = eval(`${n} ${ineq} ${m}`) : answer = eval(`${n} ${ineq}${eq} ${m}`);
    return answer ? 1 : 0;
}


// 두 정수 a, b와 boolean 변수 flag가 매개변수로 주어질 때, 
// flag가 true면 a + b를 false면 a - b를 return 하는 solution 함수를 작성해 주세요.
const test9 = (a, b, flag) => {
    let answer = 0;
    flag ? answer = a + b : answer = a - b
    return answer;
}


/**
 *  문자열 code가 주어집니다.
    code를 앞에서부터 읽으면서 만약 문자가 "1"이면 mode를 바꿉니다. 
    mode에 따라 code를 읽어가면서 문자열 ret을 만들어냅니다.

    mode는 0과 1이 있으며, idx를 0 부터 code의 길이 - 1 까지 1씩 키워나가면서 
    code[idx]의 값에 따라 다음과 같이 행동합니다.

    mode가 0일 때
    code[idx]가 "1"이 아니면 idx가 짝수일 때만 ret의 맨 뒤에 code[idx]를 추가합니다.
    code[idx]가 "1"이면 mode를 0에서 1로 바꿉니다.

    mode가 1일 때
    code[idx]가 "1"이 아니면 idx가 홀수일 때만 ret의 맨 뒤에 code[idx]를 추가합니다.
    code[idx]가 "1"이면 mode를 1에서 0으로 바꿉니다.
    문자열 code를 통해 만들어진 문자열 ret를 return 하는 solution 함수를 완성해 주세요.

    단, 시작할 때 mode는 0이며, return 하려는 ret가 만약 빈 문자열이라면 대신 "EMPTY"를 return 합니다.
 */
const test10 = (code) => {
    let answer = '';
    let mode = 0;

    for(let i=0; i<code.length; i++){
        if(mode === 0) {
            if(code[i] !== "1") {
                if(i%2 === 0 ) answer += code[i];
            } else {
                mode = 1;
            }
        } else if(mode === 1) {
            if(code[i] !== "1") {
                if(i%2 === 1 ) answer += code[i];
            } else {
                mode = 0;
            }
        }
    }

    if(answer.length === 0) answer = "EMPTY";
    return answer;
}