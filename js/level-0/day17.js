// 영어 대소문자로 이루어진 문자열 my_string이 매개변수로 주어질 때, 
// my_string을 모두 소문자로 바꾸고 알파벳 순서대로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요.
const test1 = (my_string) => {
    my_string = my_string.toLowerCase();
    return answer = my_string.split('').sort().join('');
}


// 머쓱이는 행운의 숫자 7을 가장 좋아합니다. 
// 정수 배열 array가 매개변수로 주어질 때, 
// 7이 총 몇 개 있는지 return 하도록 solution 함수를 완성해보세요.
const test2 = (array) => {
    let answer = array.join('');
    let count = 0;
    for(let i=0; i<answer.length; i++){
        answer[i] === '7' ? count++ : null;
    }
    return count;

    // '7'이라는 문자열을 정규 표현식으로 검색하여 매칭되는 모든 경우를 배열로 반환 후 길이를 반환
    // return (answer.match(/7/g) || []).length;
}


// 문자열 my_str과 n이 매개변수로 주어질 때, 
// my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.
const test3 = (my_str, n) => {
    let answer = [];
    for(let i = 0; i < my_str.length; i += n) {
        answer.push(my_str.substring(i, i + n));
    }
    return answer;
}


// 열이 얼마나 유사한지 확인해보려고 합니다. 
// 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.
const test4 = (s1, s2) => {
    let answer = 0;
    s1.filter(item => {
        if(s2.includes(item)) answer++;
    });
    return answer;
}


// 정수 n이 매개변수로 주어질 때 
// n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요
const test5 = (n) => {
    let answer = 0;
    n.toString().split('').forEach(item => {
        answer += parseInt(item);
    });
    return answer;
}


// 정수 num과 k가 매개변수로 주어질 때, 
// num을 이루는 숫자 중에 k가 있으면 num의 그 숫자가 있는 자리 수를 return하고 
// 없으면 -1을 return 하도록 solution 함수를 완성해보세요.
const test6 = (num, k) => {
    let answer = -1;
    for(let i=0; i<num.toString().length; i++){
        if(parseInt(num.toString()[i]) === k){
            answer = i+1;
            break;
        }
    }
    return answer;
}


// 정수 n이 매개변수로 주어질 때, 
// n의 약수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.
const test7 = (n) => {
    let answer = [];
    // Math.sqrt 불필요한 계산을 줄여 성능 개선
    for(let i=1; i<=Math.sqrt(n); i++){
        if(n%i === 0) {
            answer.push(i);
            // i가 n의 약수일 경우, n/i도 약수이므로 answer에 추가
            if(n / i !== i) answer.push(n / i);
        }
    }
    answer.sort((a, b) => a-b);
    return answer;
}


// 문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때,
// my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.
const test8 = (my_string, num1, num2) => {
    let answer = my_string.split('');
    let temp = answer[num1];
    answer[num1] = answer[num2];
    answer[num2] = temp;
    return answer.join('');
}


// 문자열 my_string이 매개변수로 주어질 때, 
// 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.
const test9 = (my_string) => {
    return my_string.split('').map(item => {
        return item === item.toLowerCase() ? item.toUpperCase() : item.toLowerCase();
    }).join('');
}


// 머쓱이는 친구들과 369게임을 하고 있습니다. 
// 369게임은 1부터 숫자를 하나씩 대며 3, 6, 9가 들어가는 숫자는 
// 숫자 대신 3, 6, 9의 개수만큼 박수를 치는 게임입니다. 
// 머쓱이가 말해야하는 숫자 order가 매개변수로 주어질 때, 
// 머쓱이가 쳐야할 박수 횟수를 return 하도록 solution 함수를 완성해보세요.
const test10 = (order) => {
    let answer = 0;
    order.toString().split('').forEach(item => {
        if(item === '3' || item === '6' || item === '9') answer++;
    });
    return answer;
}