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
    if(direction === 'left') {
        return numbers.slice(1).concat(numbers[0]);
    } else { 
        return numbers.slice(-1).concat(numbers.slice(0, -1));
    }
}


// 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 
// 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.
const test4 = (arr) => {
    if(arr.length === 1) return [-1];
    let min = Math.min(...arr);
    return arr.filter(item => item !== min);
}


// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 
// 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.
const test5 = (n) => {
    let arr = [];
    n = n.toString(); 
    for(let i=n.length-1; i>=0; i--){
        arr.push(parseInt(n[i]));
    }
    return arr;
}


// 함수 solution은 정수 n을 매개변수로 입력받습니다. 
// n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 
// 예를들어 n이 118372면 873211을 리턴하면 됩니다.
const test6 = (n) => {
    let answer = n.toString().split('').map(Number);
    answer.sort((a, b) => b-a);
    return parseInt(answer.join(''));
}


// 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
// 전화번호가 문자열 phone_number로 주어졌을 때, 
// 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.
const test7 = (phone_number) => {
    let answer = '';
    for(let i=0; i<phone_number.length; i++){
        if(i < phone_number.length-4) answer += '*';
        else answer += phone_number[i];
    }
    return answer;
}


// 문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.
const test8 = (s) => {
    return parseInt(s);
}


// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. 
// s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.
// 예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.
const test9 = (s) => {
    let p = 0;
    let y = 0;
    s = s.toLowerCase();
    for(let i=0; i<s.length; i++){
        if(s[i] === 'p') p++;
        if(s[i] === 'y') y++;
    }
    return p === y ? true : false;
}


// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.
const test10 = (n) => {
    let answer = 0;
    for(let i=1; i<=n; i++){
        if(n%i === 0) answer +=i;
    }
    return answer;
}