// 문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다. 
// str에 나타나는 숫자 중 최소값과 최대값을 찾아 이를 "(최소값) (최대값)"형태의 문자열을 반환하는 함수, solution을 완성하세요.
// 예를들어 s가 "1 2 3 4"라면 "1 4"를 리턴하고, "-1 -2 -3 -4"라면 "-4 -1"을 리턴하면 됩니다.
// 제한 조건
// s에는 둘 이상의 정수가 공백으로 구분되어 있습니다.
const test1 = (s) => {
    let answer = s.split(' ').sort((a, b) => a - b);
    return answer[0] +" "+ answer[answer.length-1];
}

// 괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다.
// 예를 들어
// "()()" 또는 "(())()" 는 올바른 괄호입니다.
// ")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.
// '(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.
// 제한사항
// 문자열 s의 길이 : 100,000 이하의 자연수
// 문자열 s는 '(' 또는 ')' 로만 이루어져 있습니다.
const test2 = (s) => {
    let left = 0;
    let right = 0;
    let answer = true;

    for(let i=0; i<s.length; i++){
        if(s[0] === ')'){
            answer = false;
            break;
        }
        if(s[i] === '(') left++;
        if(s[i] === ')') right++;

        if(left < right) {
            answer = false;
            break;
        }
    }
    if(left !== right) answer = false;

    return answer;
}


// JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다. 
// 단, 첫 문자가 알파벳이 아닐 때에는 이어지는 알파벳은 소문자로 쓰면 됩니다. (첫 번째 입출력 예 참고)
// 문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.
const test3 = (s) => {
    return s.split(' ').map(item => {
        if(item.length === 0) return '';
        return item[0].toUpperCase() + item.toLowerCase().slice(1);
    }).join(' ');
}