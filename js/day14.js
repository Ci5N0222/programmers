// 문자열 my_string과 두 정수 m, c가 주어집니다. 
// my_string을 한 줄에 m 글자씩 가로로 적었을 때 왼쪽부터 세로로 c번째 열에 적힌 글자들을 문자열로 return 하는 solution 함수를 작성해 주세요.
const test1 = (my_string, m, c) => {
    let answer = [];
    for(let i = 0; i < my_string.length; i += m) {
        let line = [];
        for(let j = 0; j < m; j++) {
            if((i + j) < my_string.length) {
                line.push(my_string[i + j]);
            }
        }
        answer.push(line);
    }
    let str = '';
    answer.forEach(item => {
        if(item[c - 1] !== undefined) {
            str += item[c - 1];
        }
    });

    return str;
}



// 아무 원소도 들어있지 않은 빈 배열 X가 있습니다. 
// 길이가 같은 정수 배열 arr과 boolean 배열 flag가 매개변수로 주어질 때, 
// flag를 차례대로 순회하며 flag[i]가 true라면 X의 뒤에 arr[i]를 arr[i] × 2 번 추가하고, 
// flag[i]가 false라면 X에서 마지막 arr[i]개의 원소를 제거한 뒤 X를 return 하는 solution 함수를 작성해 주세요.
const test2 = (arr, flag) => {
    let answer = [];

    flag.forEach((item, i) => {
        if(item === true) {
            for(let j=0; j<arr[i]*2; j++){
                answer.push(arr[i]);
            }
        } else {
            answer = answer.slice(0, -arr[i]);
        }
            
    });

    return answer;
}
