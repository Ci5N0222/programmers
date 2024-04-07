// 문자열 my_string과 정수 배열 index_list가 매개변수로 주어집니다. 
// my_string의 index_list의 원소들에 해당하는 인덱스의 글자들을 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.
const test1 = (my_string, index_list) => {
    let answer = ''
    index_list.forEach(item => {
        answer += my_string[item];
    });
    return answer;
}


// 음이 아닌 정수를 9로 나눈 나머지는 그 정수의 각 자리 숫자의 합을 9로 나눈 나머지와 같은 것이 알려져 있습니다.
// 이 사실을 이용하여 음이 아닌 정수가 문자열 number로 주어질 때, 이 정수를 9로 나눈 나머지를 return 하는 solution 함수를 작성해주세요.
const test2 = (number) => {
    let answer = '';
    for(let i=0; i<number.length; i++){
        answer += number[i];
    }
    return BigInt(answer)%9n;
}


// 문자열 my_string과 이차원 정수 배열 queries가 매개변수로 주어집니다. 
// queries의 원소는 [s, e] 형태로, my_string의 인덱스 s부터 인덱스 e까지를 뒤집으라는 의미입니다. 
// my_string에 queries의 명령을 순서대로 처리한 후의 문자열을 return 하는 solution 함수를 작성해 주세요.
const test3 = (my_string, queries) => {
    queries.forEach(item => {
        let [s, e] = item;
        let substring = my_string.substring(s, e + 1);
        let reversedSubstring = substring.split('').reverse().join('');
        my_string = my_string.substring(0, s) + reversedSubstring + my_string.substring(e + 1);
    });
    return my_string;
}


// 문자열 배열 strArr가 주어집니다. 모든 원소가 알파벳으로만 이루어져 있을 때, 
// 배열에서 홀수번째 인덱스의 문자열은 모든 문자를 대문자로, 
// 짝수번째 인덱스의 문자열은 모든 문자를 소문자로 바꿔서 반환하는 solution 함수를 완성해 주세요.
const test4 = (strArr) => {
    const answer = strArr.map((item, i) => {
        return i%2 === 0 ? item.toLowerCase() : item.toUpperCase();
    });
    return answer;
}


// 어떤 문자열 A가 다른 문자열 B안에 속하면 A를 B의 부분 문자열이라고 합니다. 
// 예를 들어 문자열 "abc"는 문자열 "aabcc"의 부분 문자열입니다.
// 문자열 str1과 str2가 주어질 때, 
// str1이 str2의 부분 문자열이라면 1을 부분 문자열이 아니라면 0을 return하도록 solution 함수를 완성해주세요.
const test5 = (str1, str2) => {
    let answer = str2.includes(str1) ? 1 : 0
    return answer;
}