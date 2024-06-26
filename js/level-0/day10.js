// 문자열 배열 intStrs와 정수 k, s, l가 주어집니다. 
// intStrs의 원소는 숫자로 이루어져 있습니다.
// 배열 intStrs의 각 원소마다 s번 인덱스에서 시작하는 길이 l짜리 부분 문자열을 잘라내 정수로 변환합니다. 
// 이때 변환한 정수값이 k보다 큰 값들을 담은 배열을 return 하는 solution 함수를 완성해 주세요.
const test1 = (intStrs, k, s, l) => {
    let answer = [];
    intStrs.forEach(item => {
        let number = '';
        for(let i=s; i<s+l; i++){
            number += item[i];
        }
        if(k<parseInt(number)) answer.push(parseInt(number));
    });
    return answer;
}


// 길이가 같은 문자열 배열 my_strings와 이차원 정수 배열 parts가 매개변수로 주어집니다. 
// parts[i]는 [s, e] 형태로, my_string[i]의 인덱스 s부터 인덱스 e까지의 부분 문자열을 의미합니다. 
// 각 my_strings의 원소의 parts에 해당하는 부분 문자열을 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.
const test2 = (my_strings, parts) => {
    let answer = '';
    parts.forEach((item, i) => {
        const [s, e] = item;
        answer += my_strings[i].substring(s, e+1);
    });
    return answer;
}


// 문자열 my_string과 정수 n이 매개변수로 주어질 때, 
// my_string의 뒤의 n글자로 이루어진 문자열을 return 하는 solution 함수를 작성해 주세요.
const test3 = (my_string, n) => {
    let answer = my_string.substring(my_string.length - n);
    return answer;
}


// 어떤 문자열에 대해서 접미사는 특정 인덱스부터 시작하는 문자열을 의미합니다. 
// 예를 들어, "banana"의 모든 접미사는 "banana", "anana", "nana", "ana", "na", "a"입니다.
// 문자열 my_string이 매개변수로 주어질 때, 
// my_string의 모든 접미사를 사전순으로 정렬한 문자열 배열을 return 하는 solution 함수를 작성해 주세요.
const test4 = (my_string) => {
    let answer = [];
    for(let i=my_string.length-1; i>=0; i--){
        let str = my_string.substring(i);
        answer.push(str);
    }
    return answer.sort();
}


// 어떤 문자열에 대해서 접미사는 특정 인덱스부터 시작하는 문자열을 의미합니다. 
// 예를 들어, "banana"의 모든 접미사는 "banana", "anana", "nana", "ana", "na", "a"입니다.
// 문자열 my_string과 is_suffix가 주어질 때, 
// is_suffix가 my_string의 접미사라면 1을, 아니면 0을 return 하는 solution 함수를 작성해 주세요.
const test5 = (my_string, is_suffix) => {
    let answer = [];
    let filter = 0;
    for(let i=my_string.length-1; i>=0; i--){
        let str = my_string.substring(i);
        answer.push(str);
    }
    filter = answer.sort().filter(item => is_suffix === item);
    return filter.length;
}


// 어떤 문자열에 대해서 접두사는 특정 인덱스까지의 문자열을 의미합니다. 
// 예를 들어, "banana"의 모든 접두사는 "b", "ba", "ban", "bana", "banan", "banana"입니다.
// 문자열 my_string과 is_prefix가 주어질 때, 
// is_prefix가 my_string의 접두사라면 1을, 아니면 0을 return 하는 solution 함수를 작성해 주세요.
const test6 = (my_string, is_prefix) => {
    let answer = 0;
    for (let i = 1; i <= my_string.length; i++) {
        let prefix = my_string.substring(0, i);
        if (prefix === is_prefix) {
            answer = 1;
            break;
        }
    }
    return answer;
}


// 정수로 이루어진 리스트 num_list가 주어집니다. 
// num_list에서 가장 작은 5개의 수를 제외한 수들을 오름차순으로 담은 리스트를 return하도록 solution 함수를 완성해주세요.
const test7 = (num_list) => {
    let answer = num_list.sort((a,b) => a-b).slice(5);
    return answer;
}