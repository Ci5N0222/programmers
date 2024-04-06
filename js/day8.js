// 정수 start_num와 end_num가 주어질 때, 
// start_num에서 end_num까지 1씩 감소하는 수들을 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.
const test1 = (start, end_num) => {
    let answer = [];
    for(let i=start; i>=end_num; i--){
        answer.push(i);
    }
    return answer;
}


// 정수 리스트 num_list와 찾으려는 정수 n이 주어질 때, 
// num_list안에 n이 있으면 1을 없으면 0을 return하도록 solution 함수를 완성해주세요.
const test2 = (num_list, n) => {
    let answer = 0;
    let num = num_list.filter(item => item === n);
    answer = num.length > 0 ? 1 : 0;
    return answer;
}


// 실수 flo가 매개 변수로 주어질 때, 
// flo의 정수 부분을 return하도록 solution 함수를 완성해주세요.
const test3 = (flo) => {
    let answer = Math.floor(flo);
    return answer;
}


// 숫자로만 이루어진 문자열 n_str이 주어질 때, 
// n_str을 정수로 변환하여 return하도록 solution 함수를 완성해주세요.
const test4 = (n_str) => {
    let answer = 0;
    answer = parseInt(n_str);
    return answer;
}
