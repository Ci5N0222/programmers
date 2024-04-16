// String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, 
// "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요.
// seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.
const test1 = (seoul) => {
    for(let i=0; i<seoul.length; i++){
        if(seoul[i] === "Kim"){
            return `김서방은 ${i}에 있다`;
        }
    }
    return `김서방은 없다`;
}


// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 
// 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.
const test2 = (s) => {
    if(s.length%2 === 0) return s[s.length/2-1] + s[s.length/2];
    else return s[Math.floor(s.length/2)];
}


// 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, 
// solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.
const test3 = (n) => {
    let answer = '';
    for(let i=1; i<=n; i++){
        answer += i%2 === 0 ? "박" : "수";
    }
    return answer;
}


// 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
// 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.
const test4 = (a, b) => {
    let answer = 0;
    if(a >= b){
        max = a;
        min = b;
    } else {
        max = b;
        min =a;
    }
    let max;
    let min;
     for(let i=min; i<=max; i++){
        answer += i;
     }
     return answer;
}


// array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
// divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.
// 제한사항
// arr은 자연수를 담은 배열입니다.
// 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
// divisor는 자연수입니다.
// array는 길이 1 이상인 배열입니다.
const test5 = (arr, divisor) => {
    let answer = arr.filter(item => item%divisor === 0);
    return answer.length === 0 ? [-1] : answer.sort((a, b) => a-b);
}



// 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, 
// n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.
// 제한 사항
// n은 1이상, 50000000000000 이하인 양의 정수입니다.
const test6 = (n) => {
    let answer = Math.sqrt(n);
    return answer === Math.floor(answer) ? (answer+1)**2 : -1;
}


// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, 
// solution을 완성하세요. 예를 들어 s가 "a234"이면 턴False를 리하고 "1234"라면 True를 리턴하면 됩니다.
// 제한 사항
// s는 길이 1 이상, 길이 8 이하인 문자열입니다.
// s는 영문 알파벳 대소문자 또는 0부터 9까지 숫자로 이루어져 있습니다.
const test7 = (s) => {
    if(s.length !== 4 && s.length !== 6) return false;
    return s.split('').every(item => !isNaN(item));
}


// 두 정수 left와 right가 매개변수로 주어집니다. 
// left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 
// 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.
const test8 = (left, right) => {
    let answer = 0;
    for(let i=left; i<=right; i++){
        count = 0;
        for(let j=1; j<=i; j++){
            if(i%j === 0) count++;
        }
        count%2 === 0 ? answer += i : answer -= i;
    }
    return answer;
}
